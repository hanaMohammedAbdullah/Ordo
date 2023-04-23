<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subCategories = SubCategory::latest()->paginate(7);

        return response()->json([
            'sub_category' => $subCategories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                'string',
                Rule::unique('sub_categories')->where(function ($query) use ($request) {
                    $categoryId = Category::where('name', $request->categoryName)->value('id');
                    return $query->where('category_id', $categoryId);
                })
            ],
            'categoryName' => 'required|string|exists:categories,name',
        ]);

        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the category with the specified name
        $category = Category::where('name', $request->categoryName)->first();


        // Update the subcategory with the new name and category ID
        SubCategory::create([
            'name' => $request->name,
            'category_id' => $category->id
        ]);

        return response()->json([
            'message' => 'Added successfully.',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SubCategory $subcategory)
    {

        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                'string',
                Rule::unique('sub_categories')->where(function ($query) use ($request) {
                    $categoryId = Category::where('name', $request->categoryName)->value('id');
                    return $query->where('category_id', $categoryId);
                })->ignore($subcategory->id)
            ],
            'categoryName' => 'required|string|exists:categories,name',
        ]);

        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the category with the specified name
        $category = Category::where('name', $request->categoryName)->first();


        // Update the subcategory with the new name and category ID
        $subcategory->update([
            'name' => $request->name,
            'category_id' => $category->id
        ]);

        return response()->json([
            'message' => 'Updated successfully.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubCategory $subcategory)
    {

        $subcategory->delete();

        return response()->json([
            'message' => 'Deleted successfully.',
        ]);
    }
}
