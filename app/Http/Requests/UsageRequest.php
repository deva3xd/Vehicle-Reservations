<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsageRequest extends FormRequest
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
            'vehicle_id' => 'required|exists:vehicles,id',
            'penggunaan_bbm' => 'required|numeric|min:0',
            'jadwal_servis' => 'required|date|after_or_equal:today',
        ];
    }
}
