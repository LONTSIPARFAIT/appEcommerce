<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function list_categories(){
        $categories = Product::latest()->get();

        return Inertia::render('dashboard/categories/index', [
            'categories' => $categories
        ]);
    }
}
