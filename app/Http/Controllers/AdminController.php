<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Driver;
use App\Models\Usage;
use App\Models\Vehicle;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function __invoke()
    {
        $bookings = Booking::select('id', 'status')->get();
        $vehicles = Vehicle::select('id', 'status')->get();

        $count = [
            'booking' => Booking::count(),
            'driver' => Driver::count(),
            'usage' => Usage::count(),
            'vehicle' => Vehicle::count()
        ];

        return Inertia::render('Admin/Dashboard', compact('bookings', 'vehicles', 'count'));
    }
}
