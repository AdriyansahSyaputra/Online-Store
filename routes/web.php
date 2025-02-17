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