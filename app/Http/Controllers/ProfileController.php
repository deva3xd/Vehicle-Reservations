<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\Profile;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $profile = Profile::where('user_id', Auth::id())->first();

        return Inertia::render('Profile', ['profile' => $profile]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProfileRequest $request)
    {
        Profile::updateOrCreate(
            ['user_id' => Auth::id()],
            $request->validated()
        );

        return redirect(route('profile.edit'));
    }
}
