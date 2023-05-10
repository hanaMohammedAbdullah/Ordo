<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    // public function qrLogin(Request $request)
    // {
    //     // Find user by QR code or create a new user
    //     $user = User::where('qrcode', $request->input('qrcode'))->first();

    //     if (!$user) {
    //         $user = new User();
    //         $user->qrcode = $request->input('qrcode');
    //         $user->password = bcrypt(Str::random(32));
    //         $user->save();
    //     }

    //     // Generate a new API token for the user
    //     $token = $user->createToken('API Token', ['expires_at' => Carbon::now()->addMinutes(30)]);
    //     $accessToken = $token->accessToken;
    //     $expiresAt = $token->token->expires_at;

    //     return response()->json([
    //         'message' => 'Successfully authenticated',
    //         'access_token' => $accessToken,
    //         'expires_at' => $expiresAt,
    //     ]);
    // }
    public function qrLogin(Request $request)
    {

        $user = User::where('qrcode', $request->input('qrcode'))->first();

        if (!$user) {
            $user = new User();
            $user->qrcode = $request->input('qrcode');
            $user->password = bcrypt(Str::random(32));
            $user->save();
        }

        // $token = $user?->tokens()->where('name', 'API Token')->first();

        // if (!$token) {

        //     $token = $user->createToken('API Token');
        //     $accessToken = $user->tokens()->where('name', 'API Token')->first();
        //     $accessToken->expires_at = Carbon::now()->addHour(2);
        //     $accessToken->save();
        // } elseif ($token->expires_at < now()) {
        //     $token->delete();
        //     $token = $user->createToken('API Token');
        //     $accessToken = $user->tokens()->where('name', 'API Token')->first();
        //     $accessToken->expires_at = Carbon::now()->addHour(2);
        //     $accessToken->save();
        // }

        // $plainTextToken = $token?->token;
        $personalAccessToken = $user->tokens()->where('name', 'API Token')->first();

        if (!$personalAccessToken) {

            $personalAccessToken = $user->createToken('API Token')->plainTextToken;
            $personalAccessToken = PersonalAccessToken::findToken($personalAccessToken);
            $personalAccessToken->expires_at = Carbon::now()->addHour(2);

            $personalAccessToken->save();
        } elseif ($personalAccessToken->expires_at < now()) {

            $personalAccessToken->delete();

            $personalAccessToken = $user->createToken('API Token')->plainTextToken;
            $personalAccessToken = PersonalAccessToken::findToken($personalAccessToken);
            $personalAccessToken->expires_at = Carbon::now()->addHour(2);

            $personalAccessToken->save();
        }

        $token = $personalAccessToken->token;

        $response = response()->json([
            'message' => 'Successfully authenticated', 'token' => $token,
        ]);

        $response->header('Authorization', 'Bearer ' . $token);

        return $response;
    }
}
