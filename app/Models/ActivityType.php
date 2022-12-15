<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityType extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'visibility',
        'order',
        'message',
        'image',
        'active'
    ];

    public function options()
    {
        return $this->hasMany(ActivityOption::class);
    }
}
