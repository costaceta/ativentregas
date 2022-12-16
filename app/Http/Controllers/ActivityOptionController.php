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

        dd($request);
        $request->validate([
            "title" => 'required',
        ]);

        $activity = ActivityType::create([
            'title'      => $request->title,
            'visibility' => $request->visibility,
            'order'      => $request->order,
            'image'      => $request->image,
            'active'     => $request->active,
        ]);

        return redirect()->route('activities-types.index')->with('message','Tipo de atividade criada com sucesso!');
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
