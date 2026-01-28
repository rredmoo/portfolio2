<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    /**
     * Display a list (paginated) of all the projects
     * GET call at /api/projects
     */
    public function index(Request $request)
    {
        $page = $request->query('page', 1); // If there is no filter/query, it will give page 1 by default
        $isFeatured = $request->query('is_featured');
        $cacheKey = "projects_page_{$page}_featured_" . ($isFeatured ?? 'all'); // to identify pages, for example projects_page_1, xxx_2 and so on
        // Cache pages using redis, pageinated with 3 projects per page
        return Cache::remember($cacheKey, 60, function () use ($request) {
            $query = Project::with('skills');

            if ($request->has('is_featured')) {
                $query->where('is_featured', (int) $request->query('is_featured'));
            }

            return $query->paginate(3)->withQueryString();
        });

        #TODO Add filters like isfeatured

        // return Cache::remember('projects_list', 60, function (){
        //     return Project::with('skills')->paginate(perPage: 3);
        // });
    }

    /**
     * Store a newly created resource in storage.
     * Post function to store new projects in the db
     * requests get validation to prevent sql injections and all that 
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['imagePath'] = $request->file('image')->store('projects', 'public');
        }

        $project = Project::create($data);

        if ($request->has('skills')) {
            $project->skills()->sync($request->skills);
        }

        Cache::forget('projects_list');

        return response()->json($project->load('skills'), 201);
    }

    /**
     * Display the specific project with its id
     * /api/projects/{projectid}
     */
    public function show(Project $project)
    {
        return $project->load('skills');
    }

    /**
     * Update the specified resource in storage.
     * PUT function to update a project 
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            if ($project->imagePath) {
                Storage::disk('public')->delete($project->imagePath);
            }
            $data['imagePath'] = $request->file('image')->store('projects', 'public');
        }

        $project->update($data);

        if ($request->has('skills')) {
            $project->skills()->sync($request->skills);
        }
        Cache::forget('projects_list');
        return $project->load('skills');
    }

    /**
     * Remove the specified resource from storage.
     * Deletes a project at /api/projects/projectid
     */
    public function destroy(Project $project)
    {
        $project->delete();
        Cache::forget('projects_list');
        return response()->json(null, 204);
    }
}
