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

export default function Index(props) {
    const { activities } = props;

    const { data, setData, post, processing, reset, errors  } = useForm({
        activity_type: '',
        order_date: new Date(),
        code: generateActivityCode(),
        message: '',
    });

    const [validated, setValidated] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        // TODO: Validate fiels in front end to

        post(route('activities.store'), { onSuccess: () => reset() });
    };

    return (
        <>
            <AuthenticatedBase
                auth={props.auth}
                errors={props.errors}
            >
                <Head title="Cadastro de Atividades" />
                <CRow>
                    <h3>Cadastro de Atividades</h3>
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
                                    onSubmit={submit}
                                >

                                    {/* TODO: This field must to be a field with search becouse has many items */}
                                    {/* TODO: This field must to came from Activities types Model*/}
                                    <CRow>
                                        <CCol className="mb-3" md={12}>

                                            <CFormSelect
                                                value={data.activity_type}
                                                onChange={ e => setData('activity_type', e.target.value) }
                                                label="Tipo de atividade:"
                                                feedbackInvalid="Tipo de atividade é um campo obrigatório!"
                                                required
                                                invalid={ errors.activity_type && true }
                                            >
                                                <option value="">Selecione um tipo de atividade</option>
                                                <option value="1">00 - JORNADA DE TRABALHO</option>
                                                <option value="2">01 - ANALISE DE PDV</option>
                                                <option value="3">02 - MR EMBALAGENS</option>
                                                <option value="4">ATENDIMENTO DE LOCACAO</option>
                                                <option value="5">ATIVIDADE DE ENTREGA</option>
                                                <option value="6">ATIVIDADE PADRÃO</option>
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
                                        <PrimaryButton className="mt-4" processing={processing}>Criar atividade</PrimaryButton>
                                    </div>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    {/* <CCol sm={12} lg={4}>
                        { activities && activities.map( activity => (
                            <CCard key={activity.id} className="mb-3">
                                <CCardBody>
                                    <p>
                                       ID: #{activity.id}
                                    </p>
                                    <p>
                                        {activity.activity_type}
                                    </p>
                                    <p>
                                        {activity.order_date}
                                    </p>
                                    <p>
                                        {activity.order_time}
                                    </p>
                                    <p>
                                        {activity.code}
                                    </p>
                                </CCardBody>
                            </CCard>
                        ) )  }
                    </CCol> */}
                </CRow>
            </AuthenticatedBase>
        </>
    );
}
