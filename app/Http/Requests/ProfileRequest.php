<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
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
            'user_id' => 'sometimes|exists:users,id',
            'nama' => 'sometimes|string|max:255',
            'ttl' => 'sometimes|string|max:255',
            'jk' => 'required|in:laki-laki,perempuan',
            'alamat' => 'sometimes|string|max:255',
            'no_hp' => 'sometimes|string|min:11|max:12',
        ];
    }
}
