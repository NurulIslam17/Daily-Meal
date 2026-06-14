<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{

    public function run(): void
    {
        User::factory()->create([
            'name' => 'User A',
            'type' => 'admin',
            'user_type' => 'regular',
            'email' => 'admin@app.com',
            'password' => '12345678',
        ]);
        User::factory()->create([
            'name' => 'User 1',
            'type' => 'user',
            'user_type' => 'regular',
            'email' => 'user1@app.com',
            'password' => '12345678',
        ]);
        User::factory()->create([
            'name' => 'User 2',
            'type' => 'user',
            'email' => 'user2@app.com',
            'password' => '12345678',
        ]);
    }
}
