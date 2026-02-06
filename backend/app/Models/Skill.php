<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'title',
        'category',
        'level',
        'imagePath'
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
