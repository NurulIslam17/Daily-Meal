<?php

namespace App\Service;

use App\Models\Meal;
use App\Models\User;

class DashboardService
{

    public function dashboardCount()
    {
        $users = User::count();
        $totalMeal = Meal::where('status', 'approved')->selectRaw('SUM(breakfast + lunch + dinner) as total')->value('total');
        $totalCost = Meal::where('status', 'approved')->selectRaw('SUM(breakfast_cost + lunch_cost + dinner_cost) as total_cost')->value('total_cost');
        $paid = Meal::where('status', 'paid')->selectRaw('SUM(breakfast_cost + lunch_cost + dinner_cost) as paid')->value('paid');

        return [
            'users' => $users ?? 0,
            'totalMeal' => $totalMeal ?? 0,
            'totalCost' => $totalCost ?? 0,
            'paid' => $paid ?? 0,
        ];
    }
}
