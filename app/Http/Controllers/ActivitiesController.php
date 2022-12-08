<?php

namespace App\Http\Controllers;

use App\Models\Activities;
use App\Models\ActivityType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ActivitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activities     = Activities::orderBy('created_at', 'desc')->get();
        $activity_types = DB::table('activity_types')->select('id', 'title')->orderBy('order')->get();

        return Inertia::render('Activities/Index', [
            'activities' => $activities,
            'activity_types' => $activity_types,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            "activity_type_id" => 'required',
            "order_date" => 'required',
            "code" => 'required',
        ]);

        $activity = Activities::create([
            'activity_type_id' => $request->activity_type_id,
            'order_date' => date('Y-m-d H:i:s' , strtotime($request->order_date)),
            'code' => $request->code,
            'message' => $request->message,
        ]);

        return redirect()->route('activities.index')->with('message','Atividade criada com sucesso!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Activities  $activities
     * @return \Illuminate\Http\Response
     */
    public function show(Activities $activities)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Activities  $activities
     * @return \Illuminate\Http\Response
     */
    public function edit(Activities $activities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Activities  $activities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activities $activities)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Activities  $activities
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activities $activities)
    {
        //
    }
}
