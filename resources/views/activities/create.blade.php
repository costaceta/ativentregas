@extends('adminlte::page')

@section('title', 'Histórico de Acesso')

@section('content_header')
    <h1>Cadastrar nova atividade</h1>
    @if(session('status'))
        <div class="alert alert-success mb-1 mt-1">
            {{ session('status') }}
        </div>
    @endif
@stop

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card card-default">
                <div class="card-header">
                    <h3 class="card-title">Nova atividade</h3>
                </div>
                <div class="card-body">
                    <form action="{{ route('activities.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <strong>Tipo de atividade:</strong>
                                <x-adminlte-select name="type">
                                    <x-adminlte-options
                                        :options="['00 - JORNADA DE TRABALHO', '01 - ANALISE DE PDV', '02 - MR EMBALAGENS']"
                                        placeholder="Selecione o tipo de atividade..."
                                    />
                                </x-adminlte-select>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>Data do pedido:</strong>
                                    <input type="text" name="scheduled_date" class="form-control" placeholder="Data da Atividade">
                                    @error('scheduled_date')
                                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>Hora do pedido:</strong>
                                    <input type="text" name="scheduled_time" class="form-control" placeholder="Data do pedido">
                                    @error('scheduled_time')
                                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>Código da atividade/N.F./O.S.:</strong>
                                    <input type="text" name="code" class="form-control" placeholder="Data do pedido">
                                    @error('code')
                                    <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>OBS./Mensagem:</strong>
                                    <x-adminlte-textarea name="msg" placeholder="Insert description..."/>
                                    @error('msg')
                                    <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary ml-3">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

{{--    End new Create--}}

{{--    <div class="container mt-2">--}}
{{--        <div class="row">--}}
{{--            <div class="col-lg-12 margin-tb">--}}
{{--                <div class="pull-left mb-2">--}}
{{--                    <h2>Add Company</h2>--}}
{{--                </div>--}}
{{--                <div class="pull-right">--}}
{{--                    <a class="btn btn-primary" href="{{ route('activities.index') }}"> Back</a>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}

{{--        <form action="{{ route('activities.store') }}" method="POST" enctype="multipart/form-data">--}}
{{--            @csrf--}}
{{--            <div class="row">--}}
{{--                <div class="col-xs-12 col-sm-12 col-md-12">--}}
{{--                    <div class="form-group">--}}
{{--                        <strong>Company Name:</strong>--}}
{{--                        <input type="text" name="name" class="form-control" placeholder="Company Name">--}}
{{--                        @error('name')--}}
{{--                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>--}}
{{--                        @enderror--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <div class="col-xs-12 col-sm-12 col-md-12">--}}
{{--                    <div class="form-group">--}}
{{--                        <strong>Company Email:</strong>--}}
{{--                        <input type="email" name="email" class="form-control" placeholder="Company Email">--}}
{{--                        @error('email')--}}
{{--                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>--}}
{{--                        @enderror--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <div class="col-xs-12 col-sm-12 col-md-12">--}}
{{--                    <div class="form-group">--}}
{{--                        <strong>Company Address:</strong>--}}
{{--                        <input type="text" name="address" class="form-control" placeholder="Company Address">--}}
{{--                        @error('address')--}}
{{--                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>--}}
{{--                        @enderror--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <button type="submit" class="btn btn-primary ml-3">Submit</button>--}}
{{--            </div>--}}
{{--        </form>--}}
{{--    </div>--}}
@stop
