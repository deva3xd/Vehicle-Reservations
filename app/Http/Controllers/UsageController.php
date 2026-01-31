<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsageRequest;
use App\Models\Usage;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usages = Usage::with(['vehicle'])->get();

        return Inertia::render('Admin/Usages/Index', compact('usages'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $vehicles = Vehicle::all();

        return Inertia::render('Admin/Usages/Create', compact('vehicles'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UsageRequest $request)
    {
        Usage::create($request->validated());

        return redirect(route('admin.usages'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $usage = Usage::with(['vehicle'])->findOrFail($id);
        $vehicles = Vehicle::all();

        return Inertia::render('Admin/Usages/Edit', compact('usage', 'vehicles'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UsageRequest $request, $id)
    { 
        $usage = Usage::findOrFail($id);
        $usage->update($request->validated());

        return redirect(route('admin.usages'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Usage::where('id', $id)->delete();

        return redirect(route('admin.usages'));
    }
}
