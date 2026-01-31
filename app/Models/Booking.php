<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'profile_id',
        'vehicle_id',
        'driver_id',
        'destinasi',
        'tanggal_mulai',
        'tanggal_selesai',
        'status',
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }
}
