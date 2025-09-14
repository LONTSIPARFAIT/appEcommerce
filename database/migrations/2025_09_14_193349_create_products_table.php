<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     *
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->decimal('price',10,2)->default(0);
            $table->decimal('original_price',10,2)->default(0);
            $table->decimal('rating',2,1)->default(4);
            $table->integer('reviewCount')->default(50);
            $table->text('description')->nullable();
            $table->json('features')->nullable();
            $table->json('image')->nullable();
            $table->json('colors')->nullable();
            $table->json('colors')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
