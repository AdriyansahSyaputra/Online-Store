<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::all(); // Ambil semua kategori

        $products = [
            [
                'name' => 'Laptop',
                'slug' => 'laptop',
                'description' => 'Laptop lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Smartphone',
                'slug' => 'smartphone',
                'description' => 'Smartphone lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Gaming Laptop',
                'slug' => 'gaming-laptop',
                'description' => 'Gaming Laptop lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Wireless Headphone',
                'slug' => 'wireless-headphone',
                'description' => 'Wireless Headphone lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Tablet Android',
                'slug' => 'tablet-android',
                'description' => 'Tablet Android lorem ipsum dolor amit smit'
            ],
            [
                'name' => '4K Smart TV',
                'slug' => '4k-smart-tv',
                'description' => '4K Smart TV lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'PlayStation 5',
                'slug' => 'playstation-5',
                'description' => 'PlayStation 5 lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Mechanical Keyboard',
                'slug' => 'mechanical-keyboard',
                'description' => 'Mechanical Keyboard lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Smartwatch Series X',
                'slug' => 'smartwatch-series-x',
                'description' => 'Smartwatch Series X lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Drone Camera',
                'slug' => 'drone-camera',
                'description' => 'Drone Camera lorem ipsum dolor amit smit'
            ],
            ['name' => 'Gaming Mouse', 'slug' => 'gaming-mouse', 'description' => 'Gaming Mouse lorem ipsum dolor amit smit'],
            ['name' => 'External Hard Drive', 'slug' => 'external-hard-drive', 'description' => 'External Hard Drive lorem ipsum dolor amit smit'],
            [
                'name' => 'Action Camera',
                'slug' => 'action-camera',
                'description' => 'Action Camera lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'VR Headset',
                'slug' => 'vr-headset',
                'description' => 'VR Headset lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Gaming Chair',
                'slug' => 'gaming-chair',
                'description' => 'Gaming Chair lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Electric Screwdriver',
                'slug' => 'electric-screwdriver',
                'description' => 'Electric Screwdriver lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'USB Microphone',
                'slug' => 'usb-microphone',
                'description' => 'USB Microphone lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Wireless Router',
                'slug' => 'wireless-router',
                'description' => 'Wireless Router lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Portable Projector',
                'slug' => 'portable-projector',
                'description' => 'Portable Projector lorem ipsum dolor amit smit'
            ],
            [
                'name' => 'Noise Cancelling Earbuds',
                'slug' => 'noise-cancelling-earbuds',
                'description' => 'Noise Cancelling Earbuds lorem ipsum dolor amit smit'
            ],
        ];

        foreach ($products as $key => $product) {
            $category = $categories->random();

            Product::create([
                'id' => Product::customIdProduct($category->id),
                'name' => $product['name'],
                'slug' => $product['slug'],
                'description' => $product['description'],
                'price' => 1000000 + ($key * 50000),
                'stock' => 10 + $key,
                'category_id' => $category->id, // Pilih kategori acak
                'image' => 'laptop.png',
            ]);
        }
    }
}
