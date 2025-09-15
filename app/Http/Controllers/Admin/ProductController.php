<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function list_categories(){
        $categories = Category::latest()->get();

        return Inertia::render('dashboard/categories/index', [
            'categories' => $categories
        ]);
    }
}
