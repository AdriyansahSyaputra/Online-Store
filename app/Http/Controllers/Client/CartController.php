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
    public function getCart()
    {
        $cart = Cart::firstOrCreate(['user_id' => Auth::user()->id]);
        return response()->json($cart->items()->with('product')->get());
    }

    public function addToCart(Request $request)
    {
        $user = Auth::user();
        $cart = Cart::firstOrCreate(['user_id' => $user->id]);

        $cartItem = $cart->items()->updateOrCreate(
            ['product_id' => $request->product_id],
            ['quantity' => DB::raw('quantity + ' . $request->quantity)]
        );

        return response()->json([
            'message' => 'Product added to cart!',
            'cart' => $cart->load('items.product'),
        ]);
    }

    public function updateQuantity(Request $request, $id)
    {
        $cartItem = CartItem::findOrFail($id);
        $cartItem->update(['quantity' => $request->quantity]);

        return response()->json([
            'message' => 'Quantity updated!',
            'cart' => $cartItem->cart->load('items.product'),
        ]);
    }

    public function removeItem($id)
    {
        $cartItem = CartItem::findOrFail($id);
        $cart = $cartItem->cart;
        $cartItem->delete();

        return response()->json([
            'message' => 'Item removed from cart!',
            'cart' => $cart->load('items.product'),
        ]);
    }

    public function clearCart()
    {
        $cart = Cart::where('user_id', Auth::user()->id)->first();
        if ($cart) {
            $cart->items()->delete();
        }

        return response()->json(['message' => 'Cart cleared']);
    }
}
