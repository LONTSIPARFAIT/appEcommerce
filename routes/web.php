<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/detail', function () {
    return Inertia::render('product-details');
})->name('detail');

Route::get('/about', function () {
    return Inertia::render('public/about');
})->name('about');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('dashboard', function () {
        return Inertia::render('dashboard/index');
    });
    Route::get('/dashboard/products', function () {
        return Inertia::render('dashboard/products/index');
    });
    Route::get('/dashboard/categories', function () {
        return Inertia::render('dashboard/categories/index');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
