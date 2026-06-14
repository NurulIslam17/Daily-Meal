<?php

namespace App\Http\Controllers;

use App\Models\DailyMenu;
use App\Models\Meal;
use App\Service\DashboardService;
use Carbon\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{

    protected $dashboRdService;
    public function __construct(DashboardService $dashboRdService)
    {
        $this->dashboRdService = $dashboRdService;
    }
    public function index()
    {
        $meals = Meal::with('user')->where('date', now()->toDateString())->latest()->get();
        $todaysCost = DailyMenu::where('day', Carbon::now()->format('l'))->first();
        $dashboardCount = $this->dashboRdService->dashboardCount();

        return Inertia::render('dashboard', [
            'meals' => $meals,
            'cost' => $todaysCost,
            'count' => $dashboardCount
        ]);
    }
}
