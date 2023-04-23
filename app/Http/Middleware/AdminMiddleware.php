<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
        $email = $request->getUser();
        $password = $request->getPassword();

        $admin = User::where('email', 'admin@Ordo.com')->first();
        $checkadmin = User::where('email', $email)->first();


        if ($checkadmin?->email != 'admin@Ordo.com' || !Hash::check($password, $admin->password)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        if (!Hash::check($password, $admin->password)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        // if ($request->user()?->cannot('admin')) {
        //     return response()->json([
        //         'message' => 'Unauthorized'
        //     ], 403);
        // }
        return $next($request);
    }
}
