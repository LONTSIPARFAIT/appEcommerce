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
        $image = '';

        //images
        if($request->hasFile('image')){
            $image = $request->file('image')->store('categories','public');
        }

        $new_category = [
            'name' => $request->name,
            'slug' => $slug,
            'image' => "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            'color' => $request->color,
        ];

        dd($new_category);

        return to_route('dashboard.categories.index');
    }
}
