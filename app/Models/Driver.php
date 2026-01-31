<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    protected $fillable = [
        'nama',
        'no_hp',
    ];

    public function booking()
    {
        $this->hasMany(Booking::class);
    }
}
