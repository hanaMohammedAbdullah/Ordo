<?php

namespace App\Http\Controllers\Admin;

use App\Models\Food;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\FoodCollection;
use Illuminate\Support\Facades\Validator;

class FoodController extends Controller
{

    public function index()
    {
        $foods = Food::latest()->paginate(7);

        return  FoodCollection::collection($foods);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'categoryName' => 'required|string|exists:categories,name',
            'subcategoryName' => 'required|string|exists:sub_categories,name',
            'name' => 'required|string|unique:foods,name',
            'price' => 'required|numeric',
            'description' => 'required|string',
            'availability' => 'required',
            'time' => 'required|numeric',
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg,webp',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the category with the specified name
        $category = Category::where('name', $request->categoryName)->firstOrFail();
        $subcategory = SubCategory::where('name', $request->subcategoryName)->where('category_id', $category->id)->firstOrFail();


        $flag_of_disable = ($request->availability === "false") ? true : false;

        $food = $subcategory->foods()->create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'flag_of_disable' => $flag_of_disable,
            'time' => $request->time,
        ]);

        if ($request->image) {

            $food->addMediaFromRequest('image')->usingName($request->name . '-' . now())->toMediaCollection('foodImage');
        }


        return response()->json([
            'message' => 'Added successfully.',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Food $food)
    {
        try {
            $validator = Validator::make($request->all(), [
                'categoryName' => 'required|string|exists:categories,name',
                'subcategoryName' => 'required|string|exists:sub_categories,name',
                'name' => ['required', 'string', Rule::unique('foods', 'name')->ignore($food->id)],
                'price' => 'required|numeric',
                'description' => 'required|string',
                'availability' => 'required',
                'time' => 'required|numeric',
                'image' => 'image|mimes:jpg,png,jpeg,gif,svg,webp',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $category = Category::where('name', $request->categoryName)->firstOrFail();
            $subcategory = SubCategory::where('name', $request->subcategoryName)->where('category_id', $category->id)->firstOrFail();

            $flag_of_disable = ($request->availability === "false") ? true : false;

            $food->update([
                'name' => $request->name,
                'price' => $request->price,
                'description' => $request->description,
                'flag_of_disable' => $flag_of_disable,
                'time' => $request->time,
                'sub_category_id' => $subcategory->id
            ]);

            if ($request->image) {
                $food->clearMediaCollection('foodImage');
                $food->addMediaFromRequest('image')->usingName($request->name . '-' . now())->toMediaCollection('foodImage');
            }

            return response()->json([
                'message' => 'Updated successfully.',
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Category or subcategory not found.'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Food $food)
    {

        $food->delete();

        return response()->json([
            'message' => 'Deleted successfully.',
        ]);
    }
}
