<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioMovel extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'nome_usuario',
        'telefone',
        'placa',
        'funcao',
    ];
}
