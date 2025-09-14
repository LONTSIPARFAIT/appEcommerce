<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'image',
        'description',
        'color',
    ];

    public function products(){
        return $this->hasMany(Product::class);
    }

    // protected $guard=['id', 'timestamps'] ;
}
