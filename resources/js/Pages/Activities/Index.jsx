import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/inertia-react';
import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";

import  DatePicker from "react-datepicker";

import { generateActivityCode } from "@/utils/index";

import PrimaryButton from '@/Components/PrimaryButton';
import {
    CRow,
    CCol,
    CCard,
    CCardBody,
    CFormSelect,
    CFormTextarea,
    CFormInput,
    CForm,
    CAlert,
} from '@coreui/react';
import { Inertia } from '@inertiajs/inertia';

export default function Index(props) {
    const { activities, activity_types } = props;
    const [validated, setValidated] = useState(false)

    const { data, setData, post, processing, reset, errors  } = useForm({
        activity_type_id: '',
        order_date: new Date(),
        code: generateActivityCode(),
        message: '',
    });

    const createActivity = (event) => {
        event.preventDefault();
        post(route('activities.store'), { onSuccess: () => reset() });
    };

    return (
        <>
            <AuthenticatedBase
                auth={props.auth}
                errors={props.errors}
            >
                <Head title="Inserir atividade" />
                <CRow>
                    <h3>Inserir atividade</h3>
                    {
                        props.flash.message && (
                            <>
                                <CCol xs={12}>
                                    <CAlert color="success" dismissible>
                                        {props.flash.message}
                                    </CAlert>
                                </CCol>
                            </>
                        )
                    }
                    <CCol sm={12} lg={8}>
                        <CCard>
                            <CCardBody>
                                <CForm
                                    className="g-3 needs-validation"
                                    noValidate
                                    validated={validated}
                                    onSubmit={createActivity}
                                >

                                    {/* TODO: This field must to be a field with search becouse has many items */}
                                    {/* TODO: This field must to came from Activities types Model*/}
                                    <CRow>
                                        <CCol className="mb-3" md={12}>

                                            <CFormSelect
                                                value={data.activity_type}
                                                onChange={ e => setData('activity_type_id', Number(e.target.value)) }
                                                label="Tipo de atividade:"
                                                feedbackInvalid="Tipo de atividade é um campo obrigatório!"
                                                required
                                                invalid={ errors.activity_type_id && true }
                                            >
                                                {/* TODO: Change text vazio */}
                                                <option value="vazio">Selecione um tipo de atividade</option>
                                                { activity_types && activity_types.map( type => (
                                                    <option key={type.id} value={type.id}>{ type.title }</option>
                                                )) }
                                            </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <DatePicker
                                                dateFormat="dd/MM/yyyy HH:mm"
                                                selected={data.order_date}
                                                onChange={(order_date) => setData('order_date', order_date)}
                                                showTimeInput
                                                customInput={<CFormInput label="Data e hora do pedido" />}
                                                feedbackInvalid="Data e hora são campos obrigatórios!"
                                                required
                                                invalid={ errors.order_date && true }
                                            />
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormInput
                                                type="text"
                                                value={data.code}
                                                onChange={e => setData('code', e.target.value)}
                                                label="Código da atividade/N.F./O.S.:"
                                                feedbackInvalid="Código da atividade é um campo obrigatório!"
                                                invalid={ errors.code && true }
                                                required
                                            />
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormTextarea
                                                value={data.message}
                                                onChange={e => setData('message', e.target.value)}
                                                label="OBS./Mensagem:"
                                                rows="3"
                                            ></CFormTextarea>

                                            {/* <InputError message={errors.activity_type} className="mt-2" /> */}
                                        </CCol>

                                    </CRow>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <PrimaryButton className="mt-4" processing={processing}>Inserir</PrimaryButton>
                                    </div>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol sm={12} lg={4}>
                    </CCol>
                </CRow>
            </AuthenticatedBase>
        </>
    );
}
