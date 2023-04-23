<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Facades\Validator;

class FeedbackController extends Controller
{

    public function store(Request $request, Food $food)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:100',
            'rating' => 'required|numeric|min:1|max:5',
            'description' => 'string',
        ]);

        $accessToken = PersonalAccessToken::where('token', $request->bearerToken())->first();
        $userId = $accessToken->tokenable_id;

        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $food->feedbacks()->create([
            'user_id' => $userId,
            'username' => $request->username,
            'rating' => $request->rating,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => 'Feedback Added succesfully'
        ]);
    }
}
