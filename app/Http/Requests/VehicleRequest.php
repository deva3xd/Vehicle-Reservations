<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VehicleRequest extends FormRequest
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
            'jenis' => 'required|in:mobil,truk',
            'plat' => 'required|string|max:10',
            'merk' => 'required|string|max:255',
            'tahun' => 'required|string|min:4|max:4',
            'status' => 'in:tersedia,dipakai,servis'
        ];
    }
}
