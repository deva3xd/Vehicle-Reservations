<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usage extends Model
{
    protected $fillable = [
        'vehicle_id',
        'penggunaan_bbm',
        'jadwal_servis',
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
