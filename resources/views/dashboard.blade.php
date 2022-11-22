@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content')
    <!-- TODO: Ver uma forma de carregar esses arquivos somente nas mágina -->
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.css' rel='stylesheet' />

    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>

    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css" type="text/css">


    <div class="row">
        <div class="col-md-3 col-sm-3 col-3 pt-2">

            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">
                        Atividades sem endereço
                    </h3>
                </div>

                <div class="card-body">
{{--                    Sem atividades no momento!--}}

                    @foreach ($activities as $activity)
                        <x-adminlte-card
                            title=" {{ $activity->type }}"
                            theme="success"
                            theme-mode="full"
                            icon="fas fa-lg fa-thumbs-up"
                            collapsible="collapsed"
                        >
                           lorem ipsum
                        </x-adminlte-card>
                        <h2></h2>
                    @endforeach
                </div>
            </div>

{{--            <div class="card card-primary">--}}
{{--                <div class="card-header">--}}
{{--                    <h3 class="card-title">--}}
{{--                        Metropolitana 1--}}
{{--                    </h3>--}}
{{--                </div>--}}

{{--                <div class="card-body">--}}
{{--                    The body of the card--}}
{{--                </div>--}}
{{--            </div>--}}

{{--            <div class="card card-primary">--}}
{{--                <div class="card-header">--}}
{{--                    <h3 class="card-title">--}}
{{--                        Mucuripe--}}
{{--                    </h3>--}}
{{--                </div>--}}

{{--                <div class="card-body">--}}
{{--                    The body of the card--}}
{{--                </div>--}}
{{--            </div>--}}

{{--            <div class="card card-primary">--}}
{{--                <div class="card-header">--}}
{{--                    <h3 class="card-title">--}}
{{--                        Centro--}}
{{--                    </h3>--}}
{{--                </div>--}}

{{--                <div class="card-body">--}}
{{--                    The body of the card--}}
{{--                </div>--}}
{{--            </div>--}}

        </div>
        <div class="col-md-6 col-sm-6 col-6">
            <?php
                $icon = '<img src="https://placekitten.com/g/50/50" style="border-radius: 50%" />';
            ?>

                <x-mapbox
                    id="mapId"
                    style="width: 98%; height: 800px"
                    placeholder="Search"
                    :center="[-38.5891587, -3.7900979]"
                    :zoom="11.9"
                    :markers="[
                        ['lat' => -3.7900979, 'long' => -38.5891587], ['lat'=> -3.735440069407368, 'long' => -38.527032979290055]
                     ]"
                />

        </div>
        <div class="col-md-3 col-sm-3 col-3 pt-2">
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">
                        Allan Formiga
                    </h3>
                </div>

                <div class="card-body">
                   Sem atividades no momento!
                </div>
            </div>
        </div>
    </div>
@stop

@section('js')
    <script>


    </script>
@stop
