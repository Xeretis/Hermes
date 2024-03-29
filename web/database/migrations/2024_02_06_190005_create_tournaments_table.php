<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tournaments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');

            $table->string('code')->unique();

            $table->dateTime('registration_starts_at');
            $table->dateTime('registration_ends_at');

            $table->dateTime('starts_at');
            $table->dateTime('ended_at')->nullable();

            $table->integer('max_approved_teams')->nullable();
            $table->integer('min_team_size');
            $table->integer('max_team_size');
            $table->jsonb('round_settings');

            $table->boolean('approve_by_default');
            $table->boolean('end_when_matches_concluded');

            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tournaments');
    }
};
