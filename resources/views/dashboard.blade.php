@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content')
    <!-- TODO: Ver uma forma de carregar esses arquivos somente nas mágina -->
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.css' rel='stylesheet' />


    <div class="row">
        <div class="col-md-3 col-sm-3 col-3 pt-2">

            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">
                        Atividades sem endereço
                    </h3>
                </div>

                <div class="card-body">
                    The body of the card
                </div>
            </div>

            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">
                        Metropolitana 1
                    </h3>
                </div>

                <div class="card-body">
                    The body of the card
                </div>
            </div>

            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">
                        Mucuripe
                    </h3>
                </div>

                <div class="card-body">
                    The body of the card
                </div>
            </div>

            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">
                        Centro
                    </h3>
                </div>

                <div class="card-body">
                    The body of the card
                </div>
            </div>

        </div>
        <div class="col-md-6 col-sm-6 col-6">
            <x-mapbox id="mapId" style="left: 0; width: 100%; height: 800px!important;" :center="['long' => -38.5891587, 'lat' => -3.7900979]" :zoom="11" />
        </div>
        <div class="col-md-3 col-sm-3 col-3 pt-2">
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">
                        Allan Formiga
                    </h3>
                </div>

                <div class="card-body">
                    Atividades aqui
                </div>
            </div>
        </div>
    </div>
@stop

