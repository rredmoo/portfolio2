<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SkillsController;

// API routes
Route::apiResource('projects', ProjectController::class);
Route::apiResource('skills', SkillsController::class);



