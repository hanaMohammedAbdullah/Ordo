<?php

namespace App\Http\Controllers\Admin;

use App\Models\Desk;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class DeskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $desks = Desk::latest()->paginate(7);

        return response()->json([
            'Desk' => $desks,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'number' => ['required', 'numeric', 'min:1', 'unique:desks,number'],
        ]);


        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        Desk::create([
            'number' => $request->number
        ]);



        return response()->json([
            'message' => 'Added successfully.',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Desk $desk)
    {

        $validator = Validator::make($request->all(), [
            'number' => ['required', 'numeric', 'min:1', Rule::unique('desks', 'number')->ignore($desk->id)],
        ]);
        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $desk->update([
            'number' => $request->number
        ]);

        return response()->json([
            'message' => 'Updated successfully.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Desk $desk)
    {

        $desk->delete();

        return response()->json([
            'message' => 'Deleted successfully.',
        ]);
    }
}
