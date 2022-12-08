<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    use HasFactory;

    public $timestamps = true;

    protected $fillable = [
        'activity_type_id',
        'order_date',
        'code',
        'message',
    ];

}
