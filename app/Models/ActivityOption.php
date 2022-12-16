<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityOption extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'visibility',
        'order',
        'active',
        'activity_type_id'
    ];

    public function activity_type()
    {
        return $this->belongsTo(ActivityType::class);
    }
}
