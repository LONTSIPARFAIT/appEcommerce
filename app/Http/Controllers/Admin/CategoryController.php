<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function save_categorie(Request $request){
        $request->validate([
            'name' => 'required|max:255',
            'image' => 'required|nullable|max:2048',
        ]);
    }
}
