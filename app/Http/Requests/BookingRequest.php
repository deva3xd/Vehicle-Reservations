<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'profile_id' => 'sometimes|exists:profiles,id',
            'vehicle_id' => 'required|exists:vehicles,id',
            'driver_id' => 'required|exists:drivers,id',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date',
            'destinasi' => 'required|string|max:255',
            'status' => 'sometimes|in:menunggu,disetujui,ditolak,selesai',
        ];
    }
}
