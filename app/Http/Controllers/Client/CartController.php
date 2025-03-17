<?php

namespace App\Http\Controllers\Client;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function getCart()
    {
        Log::info('Accessing cart', [
            'user_id' => Auth::id(),
            'authenticated' => Auth::check(),
        ]);

        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        $cart = Cart::with('items.product')->firstOrCreate(['user_id' => $user->id]);

        // Hitung total harga
        $totalPrice = 0;
        foreach ($cart->items as $item) {
            $item->subtotal = $item->quantity * $item->product->price;
            $totalPrice += $item->subtotal;
        }

        return response()->json([
            'items' => $cart->items,
            'total_price' => $totalPrice
        ]);
    }

    public function addToCart(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $user = Auth::user();
        $cart = Cart::firstOrCreate(['user_id' => $user->id]);

        $cartItem = $cart->items()->updateOrCreate(
            ['product_id' => $request->product_id],
            ['quantity' => DB::raw('quantity + ' . ($request->quantity ?? 1))]
        );

        // Reload cart with related data
        $cart->load('items.product');

        // Hitung total harga
        $totalPrice = 0;
        foreach ($cart->items as $item) {
            $item->subtotal = $item->quantity * $item->product->price;
            $totalPrice += $item->subtotal;
        }

        return response()->json([
            'message' => 'Produk berhasil ditambahkan ke keranjang!',
            'items' => $cart->items,
            'total_price' => $totalPrice
        ]);
    }

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
            $item->subtotal = $item->quantity * $item->product->price;
            $totalPrice += $item->subtotal;
        }

        return response()->json([
            'message' => 'Jumlah produk berhasil diperbarui!',
            'items' => $cart->items,
            'total_price' => $totalPrice
        ]);
    }

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
            $item->subtotal = $item->quantity * $item->product->price;
            $totalPrice += $item->subtotal;
        }

        return response()->json([
            'message' => 'Produk berhasil dihapus dari keranjang!',
            'items' => $cart->items,
            'total_price' => $totalPrice
        ]);
    }

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
