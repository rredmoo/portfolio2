<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SkillsController;

// API routes
// apiResource to create 5 routes at the time: index, store, show, update and destroy
// public routes
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project}', [ProjectController::class, 'show']);

Route::get('/skills', [SkillsController::class, 'index']);
Route::get('/skills/{skill}', [SkillsController::class, 'show']);


// Auth
Route::post('/login', [AuthController::class, 'login']);

// private routes using sanctum
Route::middleware('auth:sanctum')->group(function () {

    // Projects
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::put('/projects/{project}', [ProjectController::class, 'update']);
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);

    // Skills
    Route::post('/skills', [SkillsController::class, 'store']);
    Route::put('/skills/{skill}', [SkillsController::class, 'update']);
    Route::delete('/skills/{skill}', [SkillsController::class, 'destroy']);

    // user
    Route::get('/userme', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
