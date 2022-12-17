<?php

namespace App\Http\Controllers;

use App\Models\UsuarioMovel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsuarioMovelController extends Controller
{
    public function index()
    {
        return Inertia::render('UsuariosMoveis/Index', []);
    }

    public function create()
    {
        return Inertia::render('UsuariosMoveis/Create', []);
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
            "nome" => 'required',
        ]);

        $usuario_movel = UsuarioMovel::create([
            'nome'          => $request->nome,
            'nome_usuario'  => strtolower($request->nome),
            'telefone'      => $request->telefone,
            'placa'         => $request->placa,
            'funcao'        => 'promotor',
        ]);

        return redirect()->route('usuarios-moveis.index')->with('message','Usuario móvel cadastrado com sucesso!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UsuarioMovel  $usuarioMovel
     * @return \Illuminate\Http\Response
     */
    public function show(UsuarioMovel $usuarioMovel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UsuarioMovel  $usuarioMovel
     * @return \Illuminate\Http\Response
     */
    public function edit(UsuarioMovel $usuarioMovel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UsuarioMovel  $usuarioMovel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UsuarioMovel $usuarioMovel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UsuarioMovel  $usuarioMovel
     * @return \Illuminate\Http\Response
     */
    public function destroy(UsuarioMovel $usuarioMovel)
    {
        //
    }
}
