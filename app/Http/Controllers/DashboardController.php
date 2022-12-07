<?php

namespace App\Http\Controllers;

use App\Models\Activities;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $activities = Activities::orderBy('created_at', 'desc')->get();

        return Inertia::render('Dashboard', [
            'activities' => $activities
        ]);
    }
}
