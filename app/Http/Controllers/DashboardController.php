<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $meals = Meal::with('user')->where('date', now()->toDateString())->latest()->get();
        return Inertia::render('dashboard', [
            'meals' => $meals
        ]);
    }
}
