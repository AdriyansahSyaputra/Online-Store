<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'id',
        'name',
        'slug',
        'description',
        'price',
        'stock',
        'category_id',
        'image',
    ];

    // Membuat custom id sesuai dengan category product
    public static function customIdProduct($categoryId): string
    {
        $category = Category::findOrFail($categoryId);
        if (!$category) {
            return '';
        }

        $initials = strtoupper(substr($category->name, 0, 3));

        return DB::transaction(function () use ($initials, $category) {
            $maxAttempts = 10; // Batas maksimal percobaan
            $attempt = 0;

            while ($attempt < $maxAttempts) {
                // Hitung jumlah produk dengan prefix yang sama
                $count = DB::table('products')
                    ->where('id', 'LIKE', "{$initials}%")
                    ->count();

                // Buat ID baru berdasarkan jumlah produk
                $newNumber = str_pad($count + 1, 3, '0', STR_PAD_LEFT);
                $newId = $initials . $newNumber;

                // Cek apakah ID sudah ada
                if (!DB::table('products')->where('id', $newId)->exists()) {
                    return $newId;
                }

                $attempt++;
            }

            throw new \Exception("Gagal membuat ID unik setelah {$maxAttempts} percobaan.");
        });
    }


    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function cartItem(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }
}
