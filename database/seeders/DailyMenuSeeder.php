<?php

namespace Database\Seeders;

use App\Models\DailyMenu;
use Illuminate\Database\Seeder;

class DailyMenuSeeder extends Seeder
{
    public function run(): void
    {
        $menus = [
            [
                'day' => 'Sunday',
                'breakfast' => 5,
                'lunch' => 10,
                'dinner' => 15,
            ],
            [
                'day' => 'Monday',
                'breakfast' => 5,
                'lunch' => 10,
                'dinner' => 15,
            ],
            [
                'day' => 'Tuesday',
                'breakfast' => 5,
                'lunch' => 10,
                'dinner' => 15,
            ],
            [
                'day' => 'Wednesday',
                'breakfast' => 5,
                'lunch' => 10,
                'dinner' => 15,
            ],
            [
                'day' => 'Thursday',
                'breakfast' => 85,
                'lunch' => 120,
                'dinner' => 75,
            ],
            [
                'day' => 'Friday',
                'breakfast' => 75,
                'lunch' => 140,
                'dinner' => 95,
            ],
            [
                'day' => 'Saturday',
                'breakfast' => 5,
                'lunch' => 10,
                'dinner' => 15,
            ],
        ];

        foreach ($menus as $menu) {
            DailyMenu::updateOrCreate(
                ['day' => $menu['day']],
                $menu
            );
        }
    }
}
