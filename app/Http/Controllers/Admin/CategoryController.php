<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::latest()->paginate(7);

        return response()->json([
            'category' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'unique:categories,name'],
        ]);


        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        Category::create([
            'name' => $request->name
        ]);



        return response()->json([
            'message' => 'Added successfully.',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', Rule::unique('categories', 'name')->ignore($category->id)],
        ]);
        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $category->update([
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Updated successfully.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {

        $category->delete();

        return response()->json([
            'message' => 'Deleted successfully.',
        ]);
    }
}
