<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['cart_id', 'status', 'note', 'total_price'];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function setCreatedAtAttribute($value)
    {
        $this->attributes['created_at'] = Carbon::parse($value)->setTimezone('Asia/Baghdad');
    }

    public function setUpdatedAtAttribute($value)
    {
        $this->attributes['updated_at'] = Carbon::parse($value)->setTimezone('Asia/Baghdad');
    }

    public function cart(): BelongsTo
    {
        return $this->belongsTo(Cart::class);
    }
}
