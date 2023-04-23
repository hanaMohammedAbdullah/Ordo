<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Desk;
use App\Models\Food;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'deskNumber' => 'required|numeric|exists:desks,number',
        ]);


        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $desk_number = $request->deskNumber;
        $desk = Desk::where('number', $desk_number)->first();
        $cart = $desk->cart()
            ->where('status', 'waiting')
            ->first();

        if ($cart) {
            $foods = Food::join('sub_categories', 'foods.sub_category_id', '=', 'sub_categories.id')
                ->join('cart_food', 'foods.id', '=', 'cart_food.food_id')
                ->join('carts', 'carts.id', '=', 'cart_food.cart_id')
                ->leftJoin('media', function ($join) {
                    $join->on('foods.id', '=', 'media.model_id')
                        ->where('media.model_type', '=', 'App\Models\food')
                        ->where('media.collection_name', '=', 'foodImage');
                })
                ->where('carts.status', '=', 'waiting')
                ->where('carts.desk_id', '=', $desk->id)
                ->whereNotIn('cart_food.cart_id', function ($query) {
                    $query->select('cart_id')
                        ->from('orders')
                        ->where('status', '=', 'pending');
                })
                ->select(
                    'foods.id As food_id',
                    'foods.name',
                    'foods.price',
                    'cart_food.quantity',
                    'cart_food.id',
                    'carts.desk_id',
                    'cart_food.cart_id',
                    'sub_categories.name AS sub_category_name',
                    'media.id As media_id',
                    'media.file_name'
                )->get();

            if (count($foods) === 0) {
                $foods = 'Cart is currently empty!';
            }

            //http://localhost:8000/storage/media_id/file_name

            // $foods = Food::with(['subCategory', 'media', 'carts' => function ($query) use ($desk) {
            //     $query
            //         // ->join('carts', 'carts.id', '=', 'cart_food.cart_id')
            //         // ->select('carts.*', 'cart_food.quantity as quantity')
            //         ->where('carts.status', '=', 'waiting')
            //         ->where('carts.desk_id', '=', $desk->id)
            //         ->whereNotIn('cart_food.cart_id', function ($query) {
            //             $query->select('cart_id')
            //                 ->from('orders')
            //                 ->where('status', '=', 'pending');
            //         });
            // }])
            //     ->get(['id', 'name', 'price']);



            // $foods = Food::join('sub_categories', 'foods.sub_category_id', '=', 'sub_categories.id')
            //     ->join('cart_food', 'foods.id', '=', 'cart_food.food_id')
            //     ->join('carts', 'carts.id', '=', 'cart_food.cart_id')
            //     ->leftJoin('media', function ($join) {
            //         $join->on('foods.id', '=', 'media.model_id')
            //             ->where('media.model_type', '=', 'App\Models\food')
            //             ->where('media.collection_name', '=', 'foodImage');
            //     })
            //     ->where('carts.status', '=', 'waiting')
            //     // ->where('carts.desk_id', '=', $deskId)
            //     ->where('cart_food.cart_id', function ($query) use ($desk) {
            //         $query->select('id')
            //             ->from('carts')
            //             ->where('desk_id', $desk->id)
            //             ->where('status', 'waiting');
            //     })
            //     ->whereNotIn('cart_food.cart_id', function ($query) {
            //         $query->select('cart_id')
            //             ->from('orders')
            //             ->where('status', '=', 'pending');
            //     })
            //     ->select('foods.id As food_id', 'foods.name', 'foods.price', 'cart_food.quantity', 'cart_food.id', 'carts.desk_id', 'cart_food.cart_id', 'sub_categories.name AS sub_category_name', 'media.id As media_id', 'media.file_name')
            //     ->get();
        } else {
            $foods = 'Cart is currently empty!';
        }

        return response()->json([
            'cart' => $foods
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Food $food)
    {
        $validator = Validator::make($request->all(), [
            'foodQuantity' => 'required|numeric|min:1',
            'deskNumber' => 'required|numeric|exists:desks,number',
        ]);


        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $desk_number = $request->deskNumber;
        $desk = Desk::where('number', $desk_number)->first();

        if (!$desk) {
            return response()->json([
                "message" => 'desk is not found'
            ]);
        }

        // Check if the desk has an existing cart
        $checkCart = $desk->cart()
            ->where('status', 'waiting')
            ->first();

        if ($checkCart) {
            // Check if the existing cart has an associated order
            $order = Order::where('cart_id', $checkCart->id)
                ->where('status', 'pending')
                ->first();

            if ($order) {

                // return redirect()->route('customer.food.show', $food->category_id)->with([
                //     "message" =>  __('Wait until your current order is delivered'),
                //     "icon" => "warning",
                // ]);

                return response()->json([
                    "message" => 'Wait until your current order is accepted'
                ]);
            } else {
                // If there is no order associated with the cart, use the existing cart
                $cart = $checkCart;
            }
        } else {
            // If there is no existing cart, create a new one
            // $cart = Cart::create([
            //     'desk_id' => $desk_id,
            // ]);

            $cart = $desk->cart()->create();
        }

        // Check if the food already exists in the cart
        $existingfood = $cart->foods()->where('food_id', $food->id)->first();

        if ($existingfood) {
            // If the food already exists in the cart, update the quantity
            $quantity = $existingfood->pivot->quantity + $request->foodQuantity;
            $cart->foods()->updateExistingPivot($food->id, [
                // 'user_id' => $user_id,
                'quantity' => $quantity,
            ]);
        } else {

            // $existingShop = $cart->foods()
            //     ->where('cart_id', $cart->id)
            //     ->where('shop_name', '!=', $request->shopName)
            //     ->first();

            // if ($existingShop) {
            //     return redirect()->route('customer.food.show', $food->category_id)->with([
            //         "message" =>  __('Cannot add food from a different shop'),
            //         "icon" => "warning",
            //     ]);
            // }
            // If the food doesn't exist in the cart, add it to the cart
            $cart->foods()->attach($food->id, [
                // 'user_id' => $user_id,
                'quantity' => $request->foodQuantity,
                // 'shop_name' => $request->shopName,
            ]);
        }

        // return redirect()->route('customer.food.show', $food->category_id)->with([
        //     "message" =>  __('food Added Successfully'),
        //     "icon" => "success",
        // ]);

        return response()->json([
            "message" => 'food Added Succesfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
