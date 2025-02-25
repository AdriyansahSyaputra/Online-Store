<?php

namespace App\Http\Client\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        // Pastikan pengguna sudah login
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

        // Ambil atau buat cart berdasarkan user yang login
        $cart = Cart::firstOrCreate([
            'user_id' => Auth::id(),
        ]);

        // Tambahkan produk ke cart
        $cart->items()->updateOrCreate(
            ['product_id' => $request->product_id],
            ['quantity' => $request->quantity]
        );

        return response()->json([
            'message' => 'Product added to cart successfully',
            'cart' => $cart->load('items.product'), // Load relasi items dan product
        ]);
    }
}
