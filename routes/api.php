<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\FoodDetailController;
use App\Http\Controllers;

use App\Http\Controllers\Admin\FoodController as AdminFoodController;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\DeskController as AdminDeskController;
use App\Http\Controllers\Admin\SubCategoryController as AdminSubCategoryController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// / Route::middleware(['auth:sanctum'])->group(function () {
Route::post('qr-login', [AuthController::class, 'qrLogin']);
Route::post('login', [\App\Http\Controllers\Admin\AuthController::class, 'login']);

Route::middleware(['accessToken'])->group(function () {

    Route::get('menu/categories', [MenuController::class, 'index']);
    Route::get('menu/categories/{category}', [MenuController::class, 'showFoodsBelongToCategory']);
    Route::get('menu/sub-categories/{subcategory}', [MenuController::class, 'showFoodsBelongToSubCategory']);

    Route::get('menu/food-details', [FoodDetailController::class, 'index']);
    Route::get('menu/food-details/{food}', [FoodDetailController::class, 'show']);

    Route::post('carts', [CartController::class, 'index']);
    Route::post('carts/{food}', [CartController::class, 'store']);

    Route::get('orders', [OrderController::class, 'index']);
    Route::post('orders', [OrderController::class, 'store']);
    Route::delete('orders/{cart}', [OrderController::class, 'destroy']);

    Route::post('feedback/foods/{food}', [FeedbackController::class, 'store']);
});

Route::middleware(['admin'])->prefix('admin')->group(function () {

    Route::resource('categories', AdminCategoryController::class)->except(['create', 'show', 'edit']);
    Route::resource('sub-categories', AdminSubCategoryController::class)->except(['create', 'show', 'edit']);
    Route::resource('foods', AdminFoodController::class)->except(['create', 'show', 'edit']);
    Route::resource('desks', AdminDeskController::class)->except(['create', 'show', 'edit']);
    Route::resource('orders', AdminOrderController::class)->except(['create', 'store', 'show', 'edit', 'destroy']);
});
