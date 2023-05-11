<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Food extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $table = 'foods';

    protected $fillable = ['sub_category_id', 'name', 'price', 'description', 'flag_of_disable', 'time'];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

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

    public function subCategory(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function carts(): BelongsToMany
    {
        return $this->belongsToMany(Cart::class, 'cart_food')->withPivot(['quantity'])->withTimestamps();
    }

    public function feedbacks(): HasMany
    {
        return $this->hasMany(Feedback::class);
    }
}
