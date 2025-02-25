<?php

namespace App\Http\Controllers\Client;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index() {

        $products = Product::with('category')->get();

        $categories = Category::withCount('products')->get();

        return Inertia::render('Client/Product', [
            'products' => $products,
            'categories' => $categories
        ]);
    }

    public function detail($slug) {
        $product = Product::where('slug', $slug)->with('category')->firstOrFail();
        return Inertia::render('Client/ProductDetail', ['product' => $product]);
    }
}
