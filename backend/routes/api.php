<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SkillsController;

// API routes
// apiResource to create 5 routes at the time: index, store, show, update and destroy
Route::apiResource('projects', ProjectController::class);
Route::apiResource('skills', SkillsController::class);



