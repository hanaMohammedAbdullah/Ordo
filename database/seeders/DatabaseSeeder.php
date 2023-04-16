<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Cart;
use App\Models\Food;
use App\Models\User;
use App\Models\Order;
use App\Models\Rating;
use App\Models\Comment;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Seeder;
use Database\Factories\OrderFactory;
use Database\Factories\RatingFactory;
use Database\Factories\CommentFactory;
use Database\Factories\CartFoodFactory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        SubCategory::factory(5)->create();
        Comment::factory(5)->create();
        Rating::factory(5)->create();
        Order::factory(5)->create();
        Cart::factory(5)->create()->each(function ($cart) {
            $foods = Food::factory(5)->create();
            foreach ($foods as $food) {
                $cart->foods()->attach($food->id, ['quantity' => rand(1, 5)]);
            }
        });

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
