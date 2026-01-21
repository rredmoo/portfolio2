<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('page', 1);
        $cacheKey = "skills_page_" . $page;

        return Cache::remember($cacheKey, 60, function () {
            return Skill::paginate(6);
        });
        // return Cache::remember('skills_list', 60, function() {
        //     return Skill::all();
        // });
    }

    public function store(StoreSkillRequest $request)
    {
        $data = $request->validated();
        if ($request->hasFile('icon')) {
            $data['icon'] = $request->file('icon')->store('skills', 'public');
        }
        Cache::forget('skills_list');
        return Skill::create($data);
    }

    public function show(Skill $skill)
    {
        return $skill;
    }

    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $data = $request->validated();
        if ($request->hasFile('icon')) {
            $data['icon'] = $request->file('icon')->store('skills', 'public');
        }
        $skill->update($data);
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
