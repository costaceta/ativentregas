@extends('adminlte::page')

@section('title', 'Convites')

@section('content_header')
    <h1>Convites</h1>
@stop

@section('content')
    <p>Listagem de todos os convites recebidos.</p>
    <div class="row">
        <div class="col">
            <div class="card">
                <!-- <div class="card-header">
                    <h3 class="card-title">Simple Full Width Table</h3>
                    <div class="card-tools">
                        <ul class="pagination pagination-sm float-right">
                            <li class="page-item"><a class="page-link" href="#">«</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">»</a></li>
                        </ul>
                    </div>
                </div> -->

                <div class="card-body p-0">
                    <table class="table">
                        <thead>
                            <tr>
                                <th style="width: 10px">#</th>
                                <th>Ambiente</th>
                                <th>Tipo de acesso</th>
                                <th>Data hora</th>
                                <th>Status</th>
                                <th style="width: 40px">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>ATIVSERVICE - CE</td>
                                <td>Web</td>
                                <td>28/10/2022 10:28:33</td>
                                <td>ACEITO</td>
                                <td>
                                    <button type="button" class="btn btn-block btn-danger" >
                                        <i class="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@stop