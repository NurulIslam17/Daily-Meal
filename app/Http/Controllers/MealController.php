<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class MealController extends Controller
{
    public function index(Request $request)
    {
        $meals = Meal::with('user')
            ->when(
                $request->date,
                function ($query, $date) {
                    $query->whereDate('date', $date);
                },
                function ($query) {
                    $query->whereDate('date', now()->toDateString());
                }
            )
            ->latest()
            ->get();
        return Inertia::render('meal/index', [
            'meals' => $meals
        ]);
    }

    public function store(Request $request)
    {
        Meal::updateOrCreate(
            [
                'user_id' => auth()->id(),
                'date' => now()->toDateString(),
                'status' => 'pending',
            ],
            [
                'breakfast' => $request->breakfast,
                'breakfast_cost' => $request->breakfast_cost,
                'lunch' => $request->lunch,
                'lunch_cost' => $request->lunch_cost,
                'dinner' => $request->dinner,
                'dinner_cost' => $request->dinner_cost
            ]
        );
        return redirect()->route('meal.index');
    }

    public function approve($id)
    {
        Meal::where('id', $id)
            ->update([
                'status' => 'approved',
            ]);

        return redirect()->route('dashboard');
    }
}
