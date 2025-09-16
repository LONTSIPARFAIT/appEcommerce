<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function get_home_data(){
        // $categories = Category::latest()->get();
        $categories = Category::select('id','name','slug','image','color')->latest()->get();
        $products = Product ::latest()->get();

        return Inertia::render('home', [
            'categories' => $categories,
            'products' => $products,
         ]);
    }
}
