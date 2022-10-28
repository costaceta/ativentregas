@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Meus ambientes</h1>
@stop

@section('content')
    <p>Listagem de todos os ambientes vinculados.</p>

    <div class="row">
        <div class="col-md-4 col-sm-6 col-12">
            <div class="info-box">
                <div class="info-box-image p-2">
                    <img class="img-fluid" src="https://s3-sa-east-1.amazonaws.com/logos-plataforma/ativmob.png" />
                </div>
                <!-- <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span> -->
                <div class="info-box-content">
                    <span class="info-box-text">ATIVSERVICE - CE</span>
                    <span class="info-box-number mb-4">Ativservice.</span>
                    <button class="btn btn-block btn-primary btn-sm">Acessar</button>
                </div>
            </div>
        </div>
    </div>
@stop

@section('css')
    <style>
        .info-box-image {
            background: #222;
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
@stop
