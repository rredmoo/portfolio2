<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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

        if ($request->hasFile('image')) {
            $data['imagePath'] = $request->file('image')->store('skills', 'public');
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

        if ($request->hasFile('image')) {
            if ($skill->imagePath) {
                Storage::disk('public')->delete($skill->imagePath);
            }
            $data['imagePath'] = $request->file('image')->store('skills', 'public');
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
