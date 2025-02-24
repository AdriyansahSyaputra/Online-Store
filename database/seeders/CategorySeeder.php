<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name' => 'laptop/computer'
        ]);

        Category::create([
            'name' => 'smartphone'
        ]);

        Category::create([
            'name' => 'headphone'
        ]);

        Category::create([
            'name' => 'tablet'
        ]);

        Category::create([
            'name' => 'television'
        ]);

        Category::create([
            'name' => 'gamepad/console'
        ]);

        Category::create([
            'name' => 'tools'
        ]);

        Category::create([
            'name' => 'smartwatch'
        ]);
    }
}
