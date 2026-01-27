<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    # structure of a Project model
    protected $fillable = [
        'title',
        'short_description',
        'description',
        'technologies_used',
        'link',
        'is_featured'
    ];

    protected $casts = [
        'technologies_used' => 'array'
    ];

    # many skills for one project
    public function skills(){
        return $this->belongsToMany(Skill::class);
    }
}
