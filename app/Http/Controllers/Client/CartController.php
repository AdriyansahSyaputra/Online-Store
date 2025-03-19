<?php

namespace App\Http\Controllers\Client;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class CartController extends Controller
{
    /**
     * Memastikan user sudah login untuk semua metode kecuali yang diizinkan
     */
    public function __construct()
    {
        $this->midleware('auth:sanctum');
    }

    /**
     * Ambil data keranjang pengguna
     */
    public function getCart()
    {
        Log::info('Accessing cart', [
            'user_id' => Auth::id(),
            'authenticated' => Auth::check(),
        ]);

        $user = Auth::user();

        $cart = Cart::with('items.product')->firstOrCreate(['user_id' => $user->id]);

        // Hitung total harga
        $totalPrice = 0;
        foreach ($cart->items as $item) {
            if ($item->product) { // Pastikan product ada
                $item->subtotal = $item->quantity * $item->product->price;
                $totalPrice += $item->subtotal;
            }
        }

        return response()->json([
            'items' => $cart->items,
            'total_price' => $totalPrice
        ]);
    }

    /**
     * Tambahkan produk ke keranjang
     */
    public function addToCart(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $user = Auth::user();
        $cart = Cart::firstOrCreate(['user_id' => $user->id]);

        // Periksa apakah item sudah ada di keranjang
        $existingItem = $cart->items()->where('product_id', $request->product_id)->first();

        if ($existingItem) {
            // Update quantity jika sudah ada
            $existingItem->quantity += $request->quantity;
            $existingItem->save();
        } else {
            // Buat item baru jika belum ada
            $cart->items()->create([
                'product_id' => $request->product_id,
                'quantity' => $request->quantity
            ]);
        }

        // Reload cart dengan data terkait
        $cart->load('items.product');

        // Hitung total harga
        $totalPrice = 0;
        foreach ($cart->items as $item) {
            if ($item->product) {
                $item->subtotal = $item->quantity * $item->product->price;
                $totalPrice += $item->subtotal;
            }
        }

        return response()->json([
            'message' => 'Produk berhasil ditambahkan ke keranjang!',
            'items' => $cart->items,
            'total_price' => $totalPrice
        ]);
    }

    /**
     * Update jumlah produk di keranjang
     */
    public function updateQuantity(Request $request)
    {
        $request->validate([
            'item_id' => 'required|exists:cart_items,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem = CartItem::findOrFail($request->item_id);

        // Pastikan user hanya bisa mengakses cart itemnya sendiri
        if ($cartItem->cart->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $cartItem->update(['quantity' => $request->quantity]);

        $cart = $cartItem->cart->load('items.product');

        // Hitung total harga
        $totalPrice = 0;
        foreach ($cart->items as $item) {
            if ($item->product) {
                $item->subtotal = $item->quantity * $item->product->price;
                $totalPrice += $item->subtotal;
            }
        }

        return response()->json([
            'message' => 'Jumlah produk berhasil diperbarui!',
            'items' => $cart->items,
            'total_price' => $totalPrice
        ]);
    }

    /**
     * Hapus item dari keranjang
     */
    public function removeItem($id)
    {
        $cartItem = CartItem::findOrFail($id);

        // Pastikan user hanya bisa mengakses cart itemnya sendiri
        if ($cartItem->cart->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $cart = $cartItem->cart;
        $cartItem->delete();

        $cart->load('items.product');

        // Hitung total harga
        $totalPrice = 0;
        foreach ($cart->items as $item) {
            if ($item->product) {
                $item->subtotal = $item->quantity * $item->product->price;
                $totalPrice += $item->subtotal;
            }
        }

        return response()->json([
            'message' => 'Produk berhasil dihapus dari keranjang!',
            'items' => $cart->items,
            'total_price' => $totalPrice
        ]);
    }

    /**
     * Kosongkan keranjang
     */
    public function clearCart()
    {
        $user = Auth::user();
        $cart = Cart::where('user_id', $user->id)->first();

        if ($cart) {
            $cart->items()->delete();
        }

        return response()->json([
            'message' => 'Keranjang berhasil dikosongkan',
            'items' => [],
            'total_price' => 0
        ]);
    }
}
