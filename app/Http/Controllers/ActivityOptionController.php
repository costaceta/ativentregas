<?php

namespace App\Http\Controllers;

use App\Models\ActivityOption;
use Illuminate\Http\Request;

class ActivityOptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            "title" => 'required|string',
        ]);

        $option = ActivityOption::create([
            'title'             => $request->title,
            'description'       => $request->visibility,
            'visibility'        => $request->visibility,
            'order'             => $request->order,
            'active'            => $request->active,
            'activity_type_id'  => $request->activity_type_id,
        ]);

        return redirect()->route('activities-types.index')->with('message','Opção de atividade criada com sucesso!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ActivityOption  $activityOption
     * @return \Illuminate\Http\Response
     */
    public function show(ActivityOption $activityOption)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ActivityOption  $activityOption
     * @return \Illuminate\Http\Response
     */
    public function edit(ActivityOption $activityOption)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ActivityOption  $activityOption
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ActivityOption $activityOption)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ActivityOption  $activityOption
     * @return \Illuminate\Http\Response
     */
    public function destroy(ActivityOption $activityOption)
    {
        //
    }
}
