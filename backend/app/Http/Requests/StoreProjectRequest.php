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
            'title' => 'required|string|max:64',
            'short_description' => 'required|string|max:500',
            'description' => 'required|string',
            'link' => 'nullable|url',
            'is_featured' => 'required|bool',
            'image' => 'nullable|image|mimes:jpg,png,webp|max:2048',
            'skills' => 'array',
            'skills.*' => 'integer|exists:skills,id',
        ];
    }
}
