<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [ 'name', 'slug', 'price', 'original_price', 'rating', 'reviewCount', 'description', 'features', 'image', 'images', 'colors', 'sizes', 'is_featured', 'in_stock' ];

    protected $casts =[
        'in_stock'=>'boolean',
        'is_featured'=>'boolean',
    ];
}
