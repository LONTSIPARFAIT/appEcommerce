<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function list_products(){
        $products = Product::latest()->get();
        $categories = Category::latest()->get();

        return Inertia::render('dashboard/products/index', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }
}
