<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:64',
            'small_description' => 'required|string|max:500',
            'description' => 'required|string',
            'technologies_used' => 'nullable|array',
            'link' => 'nullable|url',
            'skills' => 'array',
            'skills.*' => 'integer|exists:skills,id',
        ];
    }
}
