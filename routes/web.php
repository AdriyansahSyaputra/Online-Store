<?php

use App\Http\Client\Controllers\CartController;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Client\ProductController;

Route::get('/', function () {
    return inertia('Client/Home');
})->name('home');

Route::get('/about', function () {
    return inertia('Client/About');
});

Route::get('/blogs', function () {
    return inertia('Client/Blog');
});

Route::get('/contact', function () {
    return inertia('Client/Contact');
});

Route::get('/cart', function () {
    return inertia('Client/CartMobile');
});

// Route for admin panel
Route::get('/dashboard', function () {
    return inertia('Admin/Dashboard');
})->middleware(['auth', 'admin'])->name('dashboard');

Route::get('/dashboard/products', function () {
    return inertia('Admin/Product');
});

Route::get('/dashboard/users', function () {
    return inertia('Admin/User');
});

Route::get('/dashboard/orders', function () {
    return inertia('Admin/Order');
});

Route::controller(RegisterController::class)->group(function () {
    Route::get('/register', 'index')->name('register');
    Route::post('/register', 'store');
});

Route::controller(LoginController::class)->group(function () {
    Route::get('/login', 'index')->name('login');
    Route::post('/login', 'login');
    Route::post('/logout', 'logout')->name('logout');
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/product', 'index');
    Route::get('/product/{slug}', 'detail');
});


Route::post('/cart/add', [CartController::class, 'addToCart']);