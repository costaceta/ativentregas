<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityOption extends Model
{
    use HasFactory;

    public function activity_type()
    {
        return $this->belongsTo(ActivityType::class);
    }
}
