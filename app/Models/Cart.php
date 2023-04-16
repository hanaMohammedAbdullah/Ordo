<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['desk_id', 'status'];

    public function foods(): BelongsToMany
    {
        return $this->belongsToMany(Food::class)->withPivot(['quantity'])->withTimestamps();
    }

    public function order(): HasOne
    {
        return $this->hasOne(Order::class);
    }

    public function desk(): BelongsTo
    {
        return $this->belongsTo(Desk::class);
    }
}
