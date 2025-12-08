<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){

        # basic validation data
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'], 
        ]);

        # Find user by email
        $user = User::where('email', $credentials['email'])->first();

        # 401 if not found or credentials are wrong 
        if(!$user || Hash::check($credentials['password'], $user->password)){
            return response()->json(['message' => 'Wrong credentials'], 401);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => $user,
        ]);
    }

    public function adminme(Request $request){
        return $request->user();
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}
