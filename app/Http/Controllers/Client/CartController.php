<?php

namespace App\Http\Controllers\Client;

use App\Models\Cart;
use App\Models\Product;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Tambah produk ke dalam keranjang
     */
    public function addToCart(Request $request)
    {
        if (!Auth::check()) {
            return response()->json([
                'message' => 'You must be logged in to add products to cart',
            ], 401);
        }

        // Validasi input
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity'   => 'required|integer|min:1',
        ]);

        $userId   = Auth::id();
        $product  = Product::findOrFail($request->product_id);
        $quantity = $request->quantity;

        // Cek stok
        if ($product->stock < $quantity) {
            return response()->json(['message' => 'Insufficient stock'], 400);
        }

        DB::beginTransaction();
        try {
            // Ambil cart user atau buat baru
            $cart = Cart::firstOrCreate(['user_id' => $userId]);

            // Ambil item yang sudah ada di cart
            $cartItem = $cart->items()->where('product_id', $product->id)->first();

            if ($cartItem) {
                $newQuantity = $cartItem->quantity + $quantity;

                if ($newQuantity > $product->stock) {
                    return response()->json(['message' => 'Insufficient stock'], 400);
                }

                $cartItem->update(['quantity' => $newQuantity]);
            } else {
                $cart->items()->create([
                    'product_id' => $product->id,
                    'quantity'   => $quantity,
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Product added to cart successfully',
                'cart'    => $cart->load('items.product'),
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error("Failed to add product to cart: {$e->getMessage()}");
            return response()->json(['message' => 'Failed to add product to cart'], 500);
        }
    }

    /**
     * Hapus produk dari keranjang
     */
    public function removeFromCart($productId)
    {
        if (!Auth::check()) {
            return response()->json([
                'message' => 'You must be logged in',
            ], 401);
        }

        $cart = Cart::where('user_id', Auth::id())->first();
        if (!$cart) {
            return response()->json(['message' => 'Cart not found'], 404);
        }

        $cartItem = $cart->items()->where('product_id', $productId)->first();

        if (!$cartItem) {
            return response()->json(['message' => 'Item not found in cart'], 404);
        }

        $cartItem->delete();

        return response()->json([
            'message' => 'Product removed from cart',
        ]);
    }
}
