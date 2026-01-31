<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use App\Models\Driver;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookings = Booking::with(['profile', 'vehicle', 'driver'])->whereHas('profile', function ($query) {
            $query->where('user_id', Auth::id());
        })->get();

        return Inertia::render('Bookings/Index', compact('bookings'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $vehicles = Vehicle::all();
        $drivers = Driver::all();

        return Inertia::render('Bookings/Create', compact('vehicles', 'drivers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BookingRequest $request)
    {
        $profile = Auth::user()->profile;

        Booking::create(array_merge(
            $request->validated(),
            [
                'profile_id' => $profile->id
            ]
        ));

        return redirect(route('bookings'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $booking = Booking::findOrFail($id);
        $vehicles = Vehicle::all();
        $drivers = Driver::all();

        return Inertia::render('Bookings/Edit', compact('booking', 'vehicles', 'drivers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BookingRequest $request, $id)
    {
        $booking = Booking::findOrFail($id);
        $booking->update($request->validated());

        return redirect(route('bookings'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Booking::where('id', $id)->delete();

        return redirect()->back();
    }
}
