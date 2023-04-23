<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class OrderCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //  return parent::toArray($request);
        return [
            'id' => $this->id,
            'cart_id' => $this->cart_id,
            'status' => $this->status,
            'total_price' => $this->total_price,
            'desk_number' => $this->cart->desk->number,
            'preparation_time' => $this->cart->foods->max('time') + 5,
            'foods' => $this->cart->foods->map(function ($food) {
                return [
                    'id' => $food->id,
                    'name' => $food->name,
                    'price' => $food->price,
                    'subcategoryName' => $food->subCategory->name,
                    'categoryName' => $food->subCategory->category->name,
                ];
            }),
        ];
    }
}
