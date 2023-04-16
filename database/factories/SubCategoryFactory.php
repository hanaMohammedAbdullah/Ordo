<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SubCategory>
 */
class SubCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => Category::factory(),
            'name' => fake()->randomElement([
                'sea food', 'salad', 'fruit', 'soap', 'main course', 'dishes', 'pizza',
                'burger', 'shawrma', 'sandwitch', 'fresh drink', 'coffee'
            ]),
        ];
    }
}
