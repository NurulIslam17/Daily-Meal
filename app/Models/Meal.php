<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    protected $fillable = [
        'user_id',
        'breakfast',
        'breakfast_cost',
        'lunch',
        'lunch_cost',
        'dinner',
        'dinner_cost',
        'date',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
