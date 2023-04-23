<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;


class FoodCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'sub_category_id' => $this->sub_category_id,
            'name' => $this->name,
            'price' => $this->price,
            'description' => $this->description,
            'flag_of_disable' => $this->flag_of_disable,
            'time' => $this->time,
            'categoryName' => $this->subCategory->category->name,
            'subcategoryName' => $this->subCategory->name,
            'image_url' => $this->getFirstMediaUrl('foodImage'),
        ];
    }
}
