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
            'quantity' => 'required|integer|min:1',
        ]);

        // Ambil produk dan pastikan stok mencukupi
        $product = Product::findOrFail($request->product_id);
        if ($product->stock < $request->quantity) {
            return response()->json([
                'message' => 'Insufficient stock',
            ], 400);
        }

        DB::beginTransaction();
        try {
            // Ambil atau buat cart
            $cart = Cart::firstOrCreate([
                'user_id' => Auth::id(),
            ]);

            // Ambil item yang sudah ada
            $cartItem = CartItem::where('cart_id', $cart->id)
                ->where('product_id', $request->product_id)
                ->first();

            if ($cartItem) {
                // Jika item sudah ada, update quantity
                $cartItem->update([
                    'quantity' => $cartItem->quantity + $request->quantity,
                ]);
            } else {
                // Jika belum ada, tambahkan item baru
                $cart->items()->create([
                    'product_id' => $request->product_id,
                    'quantity' => $request->quantity,
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Product added to cart successfully',
                'cart' => $cart->load('items.product'),
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Cart add error: ' . $e->getMessage());
            return response()->json([
                'message' => 'Failed to add product to cart',
            ], 500);
        }
    }

    public function removeFromCart($productId)
    {
        if (!Auth::check()) {
            return response()->json([
                'message' => 'You must be logged in',
            ], 401);
        }

        $cart = Cart::where('user_id', Auth::id())->first();
        if (!$cart) {
            return response()->json([
                'message' => 'Cart not found',
            ], 404);
        }

        $cartItem = CartItem::where('cart_id', $cart->id)
            ->where('product_id', $productId)
            ->first();

        if ($cartItem) {
            $cartItem->delete();
            return response()->json([
                'message' => 'Product removed from cart',
            ]);
        }

        return response()->json([
            'message' => 'Item not found in cart',
        ], 404);
    }
}
