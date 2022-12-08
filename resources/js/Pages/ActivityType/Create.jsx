import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

import {
    CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CCard, CCardFooter, CCardHeader, CCol, CForm, CFormInput, CFormSelect, CFormSwitch, CRow
} from "@coreui/react";

import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";

export default function Index(props) {
    const { activity_types } = props;

    const [validated, setValidated] = useState(false);

    const { data, setData, post, processing, reset, errors  } = useForm({
        title: '',
        visibility: 0,
        order: '10',
        image: '',
        active: true,
    });

    console.log('activity_types', activity_types);

    const submit = (e) => {
        e.preventDefault();

        console.log('Form submetido', processing)
        post(route('activities-types.store'), { onSuccess: () => reset() });
    };


    return (
        <AuthenticatedBase
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Tipos de atividades" />

            <CRow>
                <div className="d-flex w-100 justify-content-between mb-3">
                    <h3>Novo tipo de atividade</h3>
                </div>
                <CCol sm={12} lg={9}>
                    <CForm
                        className="g-3 needs-validation"
                        noValidate
                        validated={validated}
                    >
                        <CAccordion activeItemKey={1}>
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader>CONFIGURAÇÕES PRINCIPAIS</CAccordionHeader>
                                <CAccordionBody>
                                    <CRow>
                                        <CCol className="mb-3" md={12}>
                                            <CFormInput
                                                type="text"
                                                value={data.title}
                                                onChange={e => setData('title', e.target.value)}
                                                label="Título"
                                                feedbackInvalid="Titulo é um campo obrigatório!"
                                                invalid={ errors.title && true }
                                                required
                                            />
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect
                                                label="Visibilidade nas plataformas WEB e APP"
                                                value={data.visibility}
                                                onChange={e => setData('visibility', e.target.value)}
                                            >
                                                <option value="0">Em todos os dispositivos</option>
                                                <option value="1">Apenas no aplicativo WEB</option>
                                                <option value="2">Apenas no aplicativo móvel</option>
                                            </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormInput
                                                type="text"
                                                label="Ordem"
                                                value={data.order}
                                                onChange={e => setData('order', e.target.value)}
                                            />
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormInput
                                                type="file"
                                                text="Clique no campo ou no ícone para alterar."
                                                label="Ìcone"
                                            />
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSwitch
                                                label="Ativo"
                                                id="formSwitchCheckChecked"
                                                defaultChecked
                                            />
                                        </CCol>
                                    </CRow>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={2}>
                                <CAccordionHeader>CAMPOS DA ATIVIDADE</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={3}>
                                <CAccordionHeader>DISPLAYS</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={4}>
                                <CAccordionHeader>EFEITOS NO APP</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={5}>
                                <CAccordionHeader>COMPORTAMENTO NO SISTEMA</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={6}>
                                <CAccordionHeader>COMPORTAMENTO NO SISTEMA</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={7}>
                                <CAccordionHeader>PAINEL DE OPERAÇÃO WEB - NÚMEROS</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={8}>
                                <CAccordionHeader>OUTRAS CONFIGURAÇÕES</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={9}>
                                <CAccordionHeader>SOLICITAÇÕES PORTAL</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={9}>
                                <CAccordionHeader>SOLICITAÇÕES PORTAL</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={10}>
                                <CAccordionHeader>CONFIGURAÇÕES IoT</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                    does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                    </CForm>
                </CCol>

                <CCol sm={12} lg={3}>
                    <CCard>
                        <CCardHeader>
                            <strong>
                                Ações
                            </strong>
                        </CCardHeader>
                        {/* <CCardBody>This is some text within a card body.</CCardBody> */}
                        <CCardFooter className="bg-white">
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Link
                                    onClick={submit}
                                    className="btn btn-primary"
                                >
                                    Adicionar
                                </Link>
                            </div>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>

        </AuthenticatedBase>
    )
}
