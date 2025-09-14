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

        dd($request->all());

        return to_route('dashboard.categories.index');
    }
}
