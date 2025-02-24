<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->string('id', 50)->primary();
            $table->string('name')->nullable(false);
            $table->string('slug')->nullable(false);
            $table->text('description')->nullable(false);
            $table->decimal('price', 10, 2)->nullable(false);
            $table->integer('stock');
            $table->unsignedBigInteger('category_id')->nullable(false);
            $table->string('image')->nullable(false);
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories');
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
