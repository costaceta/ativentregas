<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UsuarioMovel extends Controller
{
    public function index()
    {
        return Inertia::render('UsuariosMoveis/Index', []);
    }

    public function create()
    {
        return Inertia::render('UsuariosMoveis/Create', []);
    }

}
