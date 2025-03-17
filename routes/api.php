<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Client\CartController;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Cart routes
    Route::prefix('cart')->controller(CartController::class)->group(function () {
        Route::get('/', 'getCart');
        Route::post('/add', 'addToCart');
        Route::patch('/update', 'updateQuantity');
        Route::delete('/remove/{id}', 'removeItem');
        Route::post('/clear', 'clearCart');
    });
});
