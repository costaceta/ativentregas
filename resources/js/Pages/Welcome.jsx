import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";
import {
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
    CCardImage,
    CButton,
    CImage,
} from '@coreui/react';
// import route from 'vendor/tightenco/ziggy/src/js';


export default function Welcome(props) {
    return (
        <>
            <AuthenticatedBase
                auth={props.auth}
                errors={props.errors}
            >

                <Head title="Ambientes" />
                <CRow>
                    <h1>Meus ambientes</h1>
                    <p>Listagem de todos os ambientes vinculados.</p>
                    <CCard className="mb-3 p-0" style={{ maxWidth: '540px' }}>
                        <CRow className="g-0">
                            <CCol md={4}>
                                <CCardImage
                                    src="data:image/jpeg;base64,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"
                                />
                            </CCol>
                            <CCol md={8}>
                                <CCardBody>
                                    <CCardTitle>ATIVSERVICE - CE</CCardTitle>
                                    <CCardText>
                                        Ativservice.
                                    </CCardText>
                                    <CButton href={route('dashboard')} >Acessar</CButton>
                                </CCardBody>
                            </CCol>
                        </CRow>
                    </CCard>
                </CRow>
            </AuthenticatedBase>
        </>
    );
}
