<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AccessTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->header('Authorization');

        // Remove the "Bearer " prefix
        $token = substr($token, 7);




        // Check if token was set in the qrLogin method
        // if (!$token && session()->has('plainTextToken')) {
        //     $token = 'Bearer ' . session()->get('plainTextToken');
        // }

        // if (!$token) {
        //     return response()->json([
        //         'message' => 'Unauthorized'
        //     ], 401);
        // }

        $accessToken = PersonalAccessToken::
            // where('tokenable_id', auth()->id())
            where('name', 'API Token')

            ->where('expires_at', '>', now())
            ->where('token', $token)
            ->first();

        if (!$accessToken) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $user = $accessToken->tokenable;
        $request->merge(['user' => $user]);
        return $next($request);
    }
}
