<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Client\CartController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->controller(CartController::class)->group(function () {
    Route::get('/cart', 'getCart');
    Route::post('/cart/add', 'addToCart');
    Route::post('/cart/update', 'updateQuantity');
    Route::post('/cart/remove/{id}', 'removeItem');
    Route::post('/cart/clear', 'clearCart');
});
