<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ApproverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke()
    {
        $bookings = Booking::whereHas('profile', function ($query) {
            $query->where('user_id', Auth::id());
        })->select('id', 'status')->get();
        
        return Inertia::render('Dashboard', compact('bookings'));
    }
}
