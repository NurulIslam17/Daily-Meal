<?php

namespace App\Console\Commands;

use App\Models\DailyMenu;
use App\Models\Meal;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SendDailyMeal extends Command
{
    protected $signature = 'meal:send';

    protected $description = 'Send request for  daily meal for regular users';

    public function handle()
    {
        $users = DB::table('users')->where('user_type', 'regular')->get();
        $todaysCost = DailyMenu::where('day', Carbon::now()->format('l'))->first();

        foreach ($users as $user) {
            Meal::create([
                'user_id' => $user->id,
                'lunch' => 1,
                'lunch_cost' => $todaysCost->lunch,
                'date' => now(),
            ]);
        }

        return Command::SUCCESS;
    }
}
