@extends('adminlte::page')

@section('title', 'Histórico de Acesso')

@section('content_header')
    <h1>Cadastro de Atividades</h1>

    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
@stop

@section('content')
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"></h3>
                    <div class="card-tools">
                        <a class="btn btn-success" href="{{ route('activities.create') }}">Criar Atividade</a>
                    </div>
                </div>

                <div class="card-body p-0">
                    <table class="table">
                        <thead>
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>Tipo de atividade</th>
                            <th>Código</th>
                            <th>Mensagem</th>
                            <th>Data</th>
                            <th>Hora</th>
                            <th style="width: 180px">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                            @foreach ($activities as $activity)
                                <tr>
                                    <td>{{ $activity->id }}</td>
                                    <td>{{ $activity->type }}</td>
                                    <td>{{ $activity->code }}</td>
                                    <td>{{ $activity->msg }}</td>
                                    <td>{{ $activity->scheduled_date }}</td>
                                    <td>{{ $activity->scheduled_time }}</td>
                                    <td>
                                        <form action="{{ route('activities.destroy', $activity->id) }}" method="Post">
                                            <a class="btn btn-primary" href="{{ route('activities.edit', $activity->id) }}">Editar</a>
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger">Excluir</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    {!! $activities->links() !!}
                </div>
            </div>
        </div>
    </div>
@stop
