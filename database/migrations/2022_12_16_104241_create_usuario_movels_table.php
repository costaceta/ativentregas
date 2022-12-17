<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario_movels', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('nome_usuario')->nullable();
            $table->string('placa')->nullable();
            $table->string('telefone')->nullable();
            $table->string('funcao')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario_movels');
    }
};
