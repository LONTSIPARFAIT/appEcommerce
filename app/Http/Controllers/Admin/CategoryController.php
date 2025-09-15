<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function save_category(Request $request){
        $request->validate([
            'name' => 'string|required|max:255',
            'color' => 'string|required',
            'description' => 'string|nullable',
            'image' => 'required|nullable|max:2048',
        ]);

        //slug
        $slug = Str::slug($request->name);
        $new_categories = [
            'name' => "Beauty & Fragrance",
            'slug' => "beauty-fragrance",
            'image' => "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            'color' => "bg-amber-50",
        ];

        dd($request->all());

        return to_route('dashboard.categories.index');
    }
}
