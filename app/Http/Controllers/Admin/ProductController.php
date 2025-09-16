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
    public function save_category(Request $request){
        $request->validate([
            'name' => 'string|required|max:255',
            'color' => 'string|required',
            'description' => 'string|nullable',
            'image' => 'required|nullable|max:2048',
        ]);

        //slug
        $slug = Str::slug($request->name);
        $image = '';

        //images
        if($request->hasFile('image')){
            $image = $request->file('image')->store('categories','public');
        }

        $new_category = [
            'name' => $request->name,
            'slug' => $slug,
            'image' => $image,
            'color' => $request->color,
        ];

        $cat = Category::create($new_category);

        // dd($cat);

        return to_route('dashboard.categories.index');
    }
}
