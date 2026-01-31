<?php

namespace App\Http\Controllers;

use App\Http\Requests\DriverRequest;
use App\Models\Driver;
use Inertia\Inertia;

class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $drivers = Driver::all();

        return Inertia::render('Admin/Drivers/Index', compact('drivers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Drivers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DriverRequest $request)
    {
        Driver::create($request->validated());

        return redirect(route('admin.drivers'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $driver = Driver::findOrFail($id);

        return Inertia::render('Admin/Drivers/Edit', compact('driver'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DriverRequest $request, $id)
    {
        $driver = Driver::findOrFail($id);
        $driver->update($request->validated());

        return redirect(route('admin.drivers'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Driver::where('id', $id)->delete();

        return redirect(route('admin.drivers'));
    }
}
