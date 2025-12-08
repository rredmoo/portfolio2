<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;

class SkillsController extends Controller
{
    public function index()
    {
        return Skill::paginate(20);
    }

    public function store(StoreSkillRequest $request)
    {
        return Skill::create($request->validated());
    }

    public function show(Skill $skill)
    {
        return $skill;
    }

    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $skill->update($request->validated());
        return $skill;
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();
        return response()->json(null, 204);
    }
}
