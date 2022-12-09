import React from 'react';
import { Head } from '@inertiajs/inertia-react';

import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";

import {
    CCard, CCardBody, CCardText,
    CCardTitle,
    CRow
} from '@coreui/react';

export default function Index(props) {
    return (
        <>
            <AuthenticatedBase
                auth={props.auth}
                errors={props.errors}
            >
                <Head title="Áreas do Mapa" />
                <CRow>
                    <h5 className="mb-3">Usuários Móveis</h5>

                    <CCard className="text-center">
                        <CCardBody>
                            <CCardTitle>EM BREVE</CCardTitle>
                            <CCardText>Esta página está em desenvolvimento!</CCardText>
                        </CCardBody>
                    </CCard>
                </CRow>
            </AuthenticatedBase>
        </>
    );
}
