<?php

namespace Database\Factories;

use App\Models\SubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Food>
 */
class FoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'sub_category_id' => 1,
            'name' => fake()->randomElement([
                'cheese butter', 'meat burger', 'crispy burger', 'chicken burger', 'meat pizza',
                'chicken pizza', 'mixed pizza', 'chicken shawrma', 'beef kebab', 'chicken kebab',
                'bryani', 'chiken sandwitch', 'meat sandwitch'
            ]),
            'price' => fake()->numberBetween(5, 20),
            'description' => fake()->paragraph(2),
            'flag_of_disable' => fake()->boolean(),
            'rating' => fake()->numberBetween(1, 5),
            'time' => fake()->numberBetween(10, 40),
        ];
    }
}
