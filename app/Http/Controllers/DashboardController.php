<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index() {
        $activities = Activity::orderBy('id', 'desc')->paginate(5);
//        dd($activities);
        return view('dashboard', compact('activities'));
    }
}
