<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [ 'name', 'slug', 'price', 'original_price', 'rating', 'reviewCount', 'description', 'features', 'image', 'images', 'colors', 'sizes', 'is_featured', 'in_stock', 'category_id' ];

    protected $casts =[
        'in_stock'=>'boolean',
        'is_featured'=>'boolean',
        'sizes'=>'array',
        'features'=>'array',
        'images'=>'array',
        'colors'=>'array',
        'original_price'=>'decimal:2',
        'price'=>'decimal:2',
        'rating'=>'decimal:1',
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function ScopeSimilar($query, $productId){
        $product = static::firstOrFail($productId);
        //Categoryid
        return $query->where('category_id', $product->category_id)
        ->where('id','!=',$productId);
    }
}
