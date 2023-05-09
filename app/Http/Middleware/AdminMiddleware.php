<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class AdminMiddleware
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

        $accessToken = PersonalAccessToken::findToken($token);

        abort_if($accessToken?->expires_at > now() && $accessToken?->tokenable->email != 'admin@Ordo.com', 401, 'Unauthorized');

        $request->merge(['admin' => $accessToken->tokenable]);
        return $next($request);
    }
}
