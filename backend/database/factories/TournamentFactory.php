<?php

namespace Database\Factories;

use App\Models\Tournament;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class TournamentFactory extends Factory
{
    protected $model = Tournament::class;

    public function definition(): array
    {

        $registrationStartsAt = $this->faker->dateTimeBetween('-2 weeks', '+1 week');
        $registrationEndsAt = $this->faker->dateTimeBetween($registrationStartsAt, '+2 weeks');
        $startsAt = $this->faker->dateTimeBetween($registrationEndsAt, '+2 weeks');

        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->text(),
            'registration_starts_at' => $registrationStartsAt,
            'registration_ends_at' => $registrationEndsAt,
            'starts_at' => $startsAt,
            'ended_at' => Carbon::make($startsAt)->isBefore(now()) ? now() : null,
            'max_team_size' => $this->faker->numberBetween(3, 15),
            'end_when_matches_concluded' => $this->faker->boolean(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }

    public function teamSize(int $maxTeamSize): self
    {
        return $this->state(function (array $attributes) use ($maxTeamSize) {
            return [
                'max_team_size' => $maxTeamSize,
            ];
        });
    }

    public function started(): self
    {
        return $this->state(function (array $attributes) {
            return [
                'registration_starts_at' => $this->faker->dateTimeBetween('-3 weeks', '-2 weeks'),
                'registration_ends_at' => $this->faker->dateTimeBetween('-2 week', '-1 week'),
                'starts_at' => $this->faker->dateTimeBetween('-1 week', '-1 day'),
            ];
        });
    }
}