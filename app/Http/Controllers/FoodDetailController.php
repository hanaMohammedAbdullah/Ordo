<?php

namespace App\Http\Controllers;

use App\Models\Food;

class FoodDetailController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  Food  $food
     * @return \Illuminate\Http\Response
     */
    public function show(Food $food)
    {
        $foodDetail = Food::where('foods.id', $food->id)
            ->with('feedbacks')
            ->withCount('feedbacks')
            ->withAvg('feedbacks', 'rating', 1)
            ->selectRaw('(select ROUND(avg(`feedbacks`.`rating`),1) from `feedbacks` where `foods`.`id` = `feedbacks`.`food_id`) as feedbacks_avg_rating')
            ->get();

        return response()->json([
            'food detail' => $foodDetail
        ]);
    }
}
