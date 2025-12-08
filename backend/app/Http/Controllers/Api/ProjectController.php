<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a list (paginated) of all the projects
     * GET call at /api/projects
     */
    public function index()
    {
        return Project::with('skills')->paginate(3);
    }

    /**
     * Store a newly created resource in storage.
     * Post function to store new projects in the db
     * requests get validation to prevent sql injections and all that 
     */
    public function store(StoreProjectRequest $request)
    {
        $project = Project::create($request->validated());

        if($request->has('skills')){
            $project->skills()->sync($request->skills);
        }

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
        $project->update($request->validated());

        if($request->has('skills')){
            $project->skills()->sync($request->skills);
        }

        return $project->load('skills');
    }

    /**
     * Remove the specified resource from storage.
     * Deletes a project at /api/projects/projectid
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return response()->json(null, 204);
    }
}
