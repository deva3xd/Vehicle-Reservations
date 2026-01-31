<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ApproverController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsageController;
use App\Http\Controllers\VehicleController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:approver'])->group(function () {
    Route::get('/', ApproverController::class)->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // bookings
    Route::get('/bookings', [BookingController::class, 'index'])->name('bookings');
    Route::get('/bookings/edit/{id}', [BookingController::class, 'edit'])->name('bookings.edit');
    Route::patch('/bookings/edit/{id}', [BookingController::class, 'update'])->name('bookings.update');
    Route::get('/bookings/create', [BookingController::class, 'create'])->name('bookings.create');
    Route::post('/bookings/create', [BookingController::class, 'store'])->name('bookings.store');
    Route::delete('/bookings/{id}', [BookingController::class, 'destroy'])->name('bookings.destroy');
});

Route::prefix('admin')->group(function () {
    Route::middleware(['auth', 'role:admin'])->group(function () {
        Route::get('/', AdminController::class)->name('admin.dashboard');

        // bookings
        Route::get('/bookings', [BookingController::class, 'index'])->name('admin.bookings');
        Route::get('/bookings/edit/{id}', [BookingController::class, 'edit'])->name('admin.bookings.edit');
        Route::patch('/bookings/edit/{id}', [BookingController::class, 'update'])->name('admin.bookings.update');
        Route::get('/bookings/create', [BookingController::class, 'create'])->name('admin.bookings.create');
        Route::post('/bookings/create', [BookingController::class, 'store'])->name('admin.bookings.store');
        Route::delete('/bookings/{id}', [BookingController::class, 'destroy'])->name('admin.bookings.destroy');

        // drivers
        Route::get('/drivers', [DriverController::class, 'index'])->name('admin.drivers');
        Route::get('/drivers/edit/{id}', [DriverController::class, 'edit'])->name('admin.drivers.edit');
        Route::patch('/drivers/edit/{id}', [DriverController::class, 'update'])->name('admin.drivers.update');
        Route::get('/drivers/create', [DriverController::class, 'create'])->name('admin.drivers.create');
        Route::post('/drivers/create', [DriverController::class, 'store'])->name('admin.drivers.store');
        Route::delete('/drivers/{id}', [DriverController::class, 'destroy'])->name('admin.drivers.destroy');
       
        // usages
        Route::get('/usages', [UsageController::class, 'index'])->name('admin.usages');
        Route::get('/usages/edit/{id}', [UsageController::class, 'edit'])->name('admin.usages.edit');
        Route::patch('/usages/edit/{id}', [UsageController::class, 'update'])->name('admin.usages.update');
        Route::get('/usages/create', [UsageController::class, 'create'])->name('admin.usages.create');
        Route::post('/usages/create', [UsageController::class, 'store'])->name('admin.usages.store');
        Route::delete('/usages/{id}', [UsageController::class, 'destroy'])->name('admin.usages.destroy');

        // vehicles
        Route::get('/vehicles', [VehicleController::class, 'index'])->name('admin.vehicles');
        Route::get('/vehicles/edit/{id}', [VehicleController::class, 'edit'])->name('admin.vehicles.edit');
        Route::patch('/vehicles/edit/{id}', [VehicleController::class, 'update'])->name('admin.vehicles.update');
        Route::get('/vehicles/create', [VehicleController::class, 'create'])->name('admin.vehicles.create');
        Route::post('/vehicles/create', [VehicleController::class, 'store'])->name('admin.vehicles.store');
        Route::delete('/vehicles/{id}', [VehicleController::class, 'destroy'])->name('admin.vehicles.destroy');
    });
});

require __DIR__ . '/auth.php';
