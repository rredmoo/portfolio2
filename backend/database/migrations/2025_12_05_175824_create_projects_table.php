<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();                                               # ID
            $table->string('title');                            # Main project title
            $table->string('small_description');                # Small description under the title
            $table->text('description');                        # Main full description of a project
            $table->json('technologies_used')->nullable();      # used technologies, for example react, Lua etc.
            $table->string('link')->nullable();                 # link to projects
            $table->timestamps();                                       # timestamp of when the project was added via admin menu
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
