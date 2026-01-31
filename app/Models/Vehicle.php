<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = [
        'jenis',
        'plat',
        'merk',
        'tahun',
        'status',
    ];

    public function booking()
    {
        return $this->hasMany(Booking::class);
    }

    public function usage()
    {
        return $this->hasMany(Usage::class);
    }
}
