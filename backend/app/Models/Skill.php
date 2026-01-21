<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'title',
        'category',
        'level',
        'icon'
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
