<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Str;
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
    public function save_product(Request $request){
        $request->validate([
            'name' => 'string|required|max:255',
            'category_id' => 'string|required',
            'colors' => 'array|nullable',
            'features' => 'array|nullable',
            'description' => 'string|nullable',
            'image' => 'image|nullable|max:2048',
            'images' => 'nullable|max:2048',
            'images.*' => 'image|max:2048',
        ]);

        //slug
        $slug = Str::slug($request->name);
        $image = '';
        $images = [];

        //images
        if($request->hasFile('image')){
            $image = $request->file('image')->store('products','public');
        }
        
        $images = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $images[] = $image->store('products/images', 'public');
            }

            // $validated['images'] = $images;
        }

        $new_product = [
            'name' => $request->name,
            'slug' => $slug,
            'colors' => $request->colors,
            'image' => $image,
            'description' => $request->description,
            'is_featured' => $request->is_featured,
            'price' => $request->price,
            'original_price' => $request->original_price,
            'features' => $request->featured,
            'images' => $images,
            'category_id' => $request->category_id,
        ];

        // dd($new_product);
        $prod = Product::create($new_product);

        // dd($prod);
        //  return redirect()->route('dashboard.products.index')->with('success', 'Produit ajouté avec succès.');
        return to_route('dashboard.products.index');
    }
}
