<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get("/dashboard", [DashboardController::class, 'index'])->name('dashboard');
    Route::get("/meal", [MealController::class, 'index'])->name('meal.index');
    Route::post("/meal-store", [MealController::class, 'store'])->name('meal.store');
    Route::post("/meal-approve/{id}", [MealController::class, 'approve'])->name('meal.approve');
    Route::get("/reports", [ReportController::class, 'index'])->name('reports.index');
    
    
    Route::get("/users", [UserController::class, 'index'])->name('users.index');
    Route::get("/users/edit/{id}", [UserController::class, 'edit'])->name('users.edit');
    Route::post("/users/update/{id}", [UserController::class, 'update'])->name('users.update');

});

require __DIR__ . '/settings.php';
