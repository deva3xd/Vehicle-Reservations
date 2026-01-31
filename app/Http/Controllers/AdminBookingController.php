<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use App\Models\Driver;
use App\Models\Profile;
use App\Models\Vehicle;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminBookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookings = Booking::with(['profile', 'vehicle', 'driver'])->get();

        return Inertia::render('Admin/Bookings/Index', compact('bookings'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $profiles = Profile::all();
        $vehicles = Vehicle::all();
        $drivers = Driver::all();

        return Inertia::render('Admin/Bookings/Create', compact('vehicles', 'drivers', 'profiles'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BookingRequest $request)
    {
        Booking::create($request->validated());

        return redirect(route('admin.bookings'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $booking = Booking::findOrFail($id);
        $vehicles = Vehicle::all();
        $drivers = Driver::all();
        $profiles = Profile::all();

        return Inertia::render('Admin/Bookings/Edit', compact('booking', 'vehicles', 'drivers', 'profiles'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BookingRequest $request, $id)
    {
        $booking = Booking::findOrFail($id);
        $booking->update($request->validated());

        return redirect(route('admin.bookings'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Booking::where('id', $id)->delete();

        return redirect(route('admin.bookings'));
    }
}
