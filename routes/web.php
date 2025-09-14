<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Shop\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'get_home_data'])->name('home');

Route::get('/detail', function () {
    return Inertia::render('product-details');
})->name('detail');

Route::get('/about', function () {
    return Inertia::render('public/about');
})->name('about');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');

    Route::get('dashboard', function () {
        return Inertia::render('dashboard/index');
    })->name('dashboard');
    Route::get('/dashboard/products', function () {
        return Inertia::render('dashboard/products/index');
    })->name('products');
    Route::get('/dashboard/categories', function () {
        return Inertia::render('dashboard/categories/index');
    })->name('dashboard.categories.index');
    Route::post('/dashboard/categories', [CategoryController::class])->name('dashboard.categories');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
