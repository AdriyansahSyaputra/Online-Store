<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Client/Home');
});

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

Route::get('/login', function() {
    return inertia('Auth/Login');
});

Route::get('/register', function() {
    return inertia('Auth/Register');
});

Route::get('/cart', function() {
    return inertia('Client/CartMobile');
});

// Route for admin panel
Route::get('/dashboard', function() {
    return inertia('Admin/Dashboard');
});

Route::get('/dashboard/products', function() {
    return inertia('Admin/Product');
});

Route::get('/dashboard/users', function() {
    return inertia('Admin/User');
});