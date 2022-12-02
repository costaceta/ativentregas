import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import AuthenticatedBase from '@/Layouts/AuthenticatedBaseLayout';
import { CRow, CCol } from '@coreui/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedBase
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <h1>Painel de operação</h1>

            <CRow className="align-items-start">
                <CCol  lg={3}>
                    Listagem de Atividades aqui!
                </CCol>
                <CCol  lg={6}>
                    {/* TODO: Configurar o Mapbox */}
                    Mapa aqui!
                </CCol>
                <CCol  lg={3}>
                    Roteiros aqui!
                </CCol>
            </CRow>
        </AuthenticatedBase>
    );
}
