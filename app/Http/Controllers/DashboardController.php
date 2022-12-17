<?php

namespace App\Http\Controllers;

use App\Models\Activities;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index()
    {
        // $activities = Activities::orderBy('created_at', 'desc')->get();
        $activities = DB::table('activities')
                            ->join('activity_types', 'activities.activity_type_id', '=', 'activity_types.id')
                            ->select('activities.*', 'activity_types.title as activity_type')
                            ->get();

        // dd($activities);

        return Inertia::render('Dashboard', [
            'activities' => $activities
        ]);
    }
}
