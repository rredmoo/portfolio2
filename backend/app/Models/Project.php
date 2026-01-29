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
        'link',
        'is_featured',
        'imagePath'
    ];

    # many skills for one project
    public function skills(){
        return $this->belongsToMany(Skill::class);
    }
}
