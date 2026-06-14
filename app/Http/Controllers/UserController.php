<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::latest()->get();
        return Inertia::render('users/Index', [
            'users' => $users
        ]);
    }
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('users/Edit', [
            'user' => $user
        ]);
    }
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update([
            'name' => $request['name'],
            'email' => $request['email'],
            'user_type' => $request['user_type'],
        ]);
        return redirect()->route('users.index');
    }
}
