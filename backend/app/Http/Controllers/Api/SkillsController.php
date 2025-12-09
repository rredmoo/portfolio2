<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use Illuminate\Support\Facades\Cache;

class SkillsController extends Controller
{
    public function index()
    {
        return Cache::remember('skills_list', 60, function() {
            return Skill::all();
        });
    }

    public function store(StoreSkillRequest $request)
    {
        Cache::forget('skills_list');
        return Skill::create($request->validated());
    }

    public function show(Skill $skill)
    {
        return $skill;
    }

    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $skill->update($request->validated());
        Cache::forget('skills_list');
        return $skill;
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();
        Cache::forget('skills_list');
        return response()->json(null, 204);
    }
}
