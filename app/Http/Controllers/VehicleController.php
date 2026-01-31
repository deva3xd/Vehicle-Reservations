<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehicleRequest;
use App\Models\Vehicle;
use Inertia\Inertia;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vehicles = Vehicle::all();

        return Inertia::render('Admin/Vehicles/Index', compact('vehicles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Vehicles/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VehicleRequest $request)
    {
        Vehicle::create($request->validated());

        return redirect(route('admin.vehicles'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $vehicle = Vehicle::findOrFail($id);

        return Inertia::render('Admin/Vehicles/Edit', compact('vehicle'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(VehicleRequest $request, $id)
    {
        $vehicle = Vehicle::findOrFail($id);
        $vehicle->update($request->validated());

        return redirect(route('admin.vehicles'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Vehicle::where('id', $id)->delete();

        return redirect(route('admin.vehicles'));
    }
}
