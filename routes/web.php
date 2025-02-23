<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;

Route::get('/', function () {
    return inertia('Client/Home');
})->middleware('customer')->name('home');

Route::get('/about', function() {
    return inertia('Client/About');
});

Route::get('/product', function() {
    return inertia('Client/Product');
});

Route::get('/blogs', function() {
    return inertia('Client/Blog');
});

Route::get('/contact', function() {
    return inertia('Client/Contact');
});

Route::get('/cart', function() {
    return inertia('Client/CartMobile');
});

// Route for admin panel
Route::get('/dashboard', function() {
    return inertia('Admin/Dashboard');
})->middleware(['auth', 'admin'])->name('dashboard');

Route::get('/dashboard/products', function() {
    return inertia('Admin/Product');
});

Route::get('/dashboard/users', function() {
    return inertia('Admin/User');
});

Route::get('/dashboard/orders', function() {
    return inertia('Admin/Order');
});

Route::controller(RegisterController::class)->group(function () {
    Route::get('/register', 'index')->name('register');
    Route::post('/register', 'store');
});

Route::controller(LoginController::class)->group(function () {
    Route::get('/login', 'index')->name('login');
    Route::post('/login', 'login');
});