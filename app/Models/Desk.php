<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Desk extends Model
{
    use HasFactory;

    protected $fillable = ['number'];

    public function cart(): HasOne
    {
        return $this->hasOne(Cart::class);
    }
}
