<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'admin',
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => 'password',
            'role_id' => 1
        ]);

        User::create([
            'name' => 'customer',
            'username' => 'customer',
            'email' => 'customer@gmail.com',
            'password' => 'password',
            'role_id' => 4
        ]);
    }
}
