<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function get_home_data(){
        $categories = Category::latest()->get();

        Inertia::render('home', [
            'cate'
        ]);
    }
}
