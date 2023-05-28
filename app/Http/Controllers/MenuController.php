<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\SubCategory;

class MenuController extends Controller
{

    public function index()
    {
        $categories = Category::with(['subCategories', 'subCategories.foods'])->latest()->get();
        return response()->json([
            'category' => $categories
        ]);
    }


    public function showFoodsBelongToCategory(Category $category)
    {
        $subCategories = $category->subCategories()->with('foods')->latest()->get();
        // send back in the sub category of laravel the food array of the sub category
        return response()->json(
            $subCategories
        );
    }


    public function showFoodsBelongToSubCategory(SubCategory $subcategory)
    {
        $foods = $subcategory->foods()->latest()->get();

        return response()->json([
            'food' => $foods
        ]);
    }
}
