<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $orders = Order::with('cart.foods.subCategory')->latest()->paginate(7);

        return OrderCollection::collection($orders);

        // $data = $orders->map(function ($order) {
        //     $cart = $order->cart;
        //     $foods = $cart->foods->map(function ($food) {
        //         return [
        //             'food_id' => $food->id,
        //             'name' => $food->name,
        //             'price' => $food->price,
        //             'time' => $food->time,
        //             'sub_category' => $food->subCategory->name,
        //         ];
        //     });
        //     $max_time = $cart->foods->max('time');
        //     $desk_number = $cart->desk->number;
        //     return [
        //         'cart_id' => $cart->id,
        //         'status' => $order->status,
        //         'total_price' => $order->total_price,
        //         'desk_number' => $desk_number,
        //         'preparation_time' => $max_time + 5,
        //         'foods' => $foods,
        //     ];
        // });

        // return response()->json([
        //     'data' => $data,
        // ]);
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
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'quantity' => 'required|numeric|min:1',
            'desk_id' => 'required|numeric|exists:desks,id',
            'food_id' => 'required|numeric|exists:cart_food,food_id',
            'note' => 'string|max:255',
        ]);


        // Return a JSON response with the validation errors if they exist
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $desk_id = $request->desk_id;
        $food_id = $request->food_id;

        // Get the desk's cart
        $cart = Cart::where('desk_id', $desk_id)
            ->where('status', 'waiting')
            ->first();

        if ($cart) {

            $existingfood = $cart->foods()->where('food_id', $food_id)->first();

            if ($existingfood) {

                // $quantity = $existingfood->pivot->quantity + $request->quantity;
                $quantity = $request->quantity;
                $cart->foods()->updateExistingPivot($food_id, [

                    'quantity' => $quantity,
                ]);
            }

            // Calculate the total price
            $total_price = $cart->foods->sum(function ($food) {
                return $food->price * $food->pivot->quantity;
            });
            $checkOrder = Order::where('cart_id', $cart->id)
                ->where('status', 'pending')->first();

            if ($checkOrder) {
                $checkOrder->update([
                    'total_price' => $total_price,
                ]);

                return response()->json([
                    "message" => 'order updated Succesfully'
                ]);
            } else {
                // Create the order
                Order::create([
                    'cart_id' => $cart->id,
                    'note' => $request->note,
                    'total_price' => $total_price,
                ]);

                return response()->json([
                    "message" => 'order Added Succesfully'
                ]);
            }
        } else {
            return response()->json(['message' => 'you can`t update an accepted or rejected order']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
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
        if ($cart->status == 'waiting') {

            $cart->delete();

            return response()->json(['message' => 'Order Canceled successfully.']);
        } else {

            return response()->json(['message' => 'you can`t Cancel accepted order']);
        }
    }
}
