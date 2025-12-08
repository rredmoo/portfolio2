<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
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
            'title' => 'sometimes|string|max:255',
            'short_description' => 'sometimes|string|max:500',
            'description' => 'sometimes|string',
            'tech_stack' => 'sometimes|array',
            'link' => 'sometimes|url',
            'is_featured' => 'sometimes|boolean',
            'skills' => 'sometimes|array',
            'skills.*' => 'integer|exists:skills,id',
        ];
    }
}
