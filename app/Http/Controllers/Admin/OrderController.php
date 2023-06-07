<?php

namespace App\Http\Controllers\Admin;

use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderCollection;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{

    public function index()
    {
        $orders = Order::with('cart.foods.subCategory')->latest()->paginate(7);

        return OrderCollection::collection($orders);
    }

    public function show(Order $order)
    {
        return new OrderCollection($order);
    }


    public function update(Request $request, Order $order)
    {

        $validator = Validator::make($request->all(), [
            'changeStatus' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


        if (!in_array($request->changeStatus, ['pending', 'accepted', 'rejected'])) {
            return response()->json(['message' => 'please select a valid status'], 422);
        }
        if ($request->changeStatus == 'accepted' || $request->changeStatus == 'rejected') {
            $cart = optional(Cart::where('status', 'waiting')->first())->update(['status' => 'done']);
        }

        $order->update([
            'status' => $request->changeStatus,
        ]);

        return response()->json([
            'message' => 'Status Changed successfully',
        ]);
    }
}
