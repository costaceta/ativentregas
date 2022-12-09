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
                                    <CRow>
                                        <CCol className="mb-3" md={12}>
                                            
                                            <CFormSelect label="Código da atividade ?" aria-label="Default select example">
                                                <option value="1">Obrigatório, inicia preenchido com um código padrão</option>
                                                <option value="2">Obrigatório, inicia vazio</option>
                                            </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem campos para identificar o local da atividade?" aria-label="Default select example">
                                                <option value="0">Não</option>
                                                <option value="1">Código, Fantasia, Razão Social, Telefone</option>
                                                <option value="2">Código, Razão Social, Telefone</option>
                                            </CFormSelect>

                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem campos para endereço do destino?" aria-label="Default select example">
                                                    <option value="0">Não</option>
                                                    <option value="1">Logradouro, número, complemento, bairro, cidade, UF</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem CEP de destino?" aria-label="Default select example">
                                                <option value="0">Não</option>
                                                <option value="1">Sim, depois dos campos de endereço</option>
                                                <option value="2">Sim, antes dos campos de endereço</option>
                                            </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem data hora de faturamento?" aria-label="Default select example">
                                                    <option value="0">Não</option>
                                                    <option value="1">Sim</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem campos para endereço de origem ?" aria-label="Default select example">
                                                    <option value="0">Não</option>
                                                    <option value="1">Sim</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem peso?" aria-label="Default select example">
                                                    <option value="0">Não</option>
                                                    <option value="1">Sim</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem volume?" aria-label="Default select example">
                                                    <option value="0">Não</option>
                                                    <option value="1">Sim</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem código do orçamento?" aria-label="Default select example">
                                                    <option value="0">Não</option>
                                                    <option value="1">Sim</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Tem valor da nota?" aria-label="Default select example">
                                                    <option value="0">Não</option>
                                                    <option value="1">Sim</option>
                                                </CFormSelect>
                                        </CCol>

                                        
                                    </CRow>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={3}>
                                <CAccordionHeader>DISPLAYS</CAccordionHeader>
                                <CAccordionBody>
                                    <CRow>
                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Display 1 - no APP" aria-label="Default select example">
                                                        <option value="0">0 - NÃO EXIBIR INFORMAÇÃO</option>
                                                        <option value="1">1 - logradouro, numero, bairro</option>
                                                        <option value="2">2 - logradouro, numero, bairro, cidade/municipio</option>
                                                        <option value="3">3 - logradouro, numero, bairro, (hora)</option>
                                                        <option value="4">4 - logradouro, numero, bairro, cidade/municipio, (hora)</option>
                                                        <option value="5">5 - logradouro, numero, bairro, (data hora)</option>
                                                        <option value="6">6 - logradouro, numero, bairro, cidade/municipio, (data hora)</option>
                                                        <option value="7">7 - logradouro, numero, bairro, (data hora para realização da atividade)</option>
                                                        <option value="8">8 - logradouro, numero, bairro, cidade/municipio, (data hora para realização da atividade)</option>
                                                        <option value="9">9 - logradouro, numero, complemento, bairro, (data hora para realização da atividade)</option>
                                                        <option value="10">10 - Nome do tomador do serviço</option>
                                                        <option value="11">11 - Nome do tomador do serviço, data hora da solicitação</option>
                                                        <option value="12">12 - Nome do tomador do serviço, hora da solicitação</option>
                                                        <option value="13">13 - Nome do tomador do serviço, data hora da solicitação e observações</option>
                                                        <option value="14">14 - Nome do tomador do serviço, hora da solicitação e observações</option>
                                                        <option value="15">15 - Observações</option>
                                                        <option value="16">16 - Tipo atividade (código da atividade), observação</option>
                                                        <option value="33">33 - Nome do tomador do serviço, data hora da solicitação e observações (quebra de linha antes da obs)</option>
                                                        <option value="34">34 - Nome do tomador do serviço, hora da solicitação e observações (quebra de linha antes da obs)</option>
                                                        <option value="35">35 - Nome do tomador do serviço (código da atividade)</option>
                                                        <option value="36">36 - Nome do tomador do serviço (código da atividade), hora da solicitação</option>
                                                        <option value="37">37 - Nome do tomador do serviço (código da atividade), telefone, hora da solicitação</option>
                                                        <option value="38">38 - Tipo atividade, Nome do tomador do serviço (código da atividade), telefone, hora da solicitação</option>
                                                        <option value="40">40 - logradouro, numero, complemento, bairro, observação</option>
                                                        <option value="41">41 - logradouro, numero, complemento, bairro, cidade, data hora solicitação, observação</option>
                                                        <option value="42">42 - logradouro, numero, complemento, bairro, cidade, data hora solicitação, observação, Vols.: #</option>
                                                        <option value="45">45 - Nome do usuário do sistema que cadastrou a atividade - observação</option>
                                                        <option value="46">46 - Nome do usuário do sistema que cadastrou a atividade - Nome do tomador do serviço</option>
                                                        <option value="47">47 - Nome do usuário do sistema que cadastrou a atividade - Nome do tomador do serviço - observação</option>
                                                        <option value="48">48 - Nome do usuário do sistema que cadastrou a atividade - Nome do tomador do serviço (código da atividade) - observação</option>
                                                        <option value="50">50 - Nome do usuário do sistema que cadastrou a atividade</option>
                                                        <option value="60">60 - Razão Social do cliente</option>
                                                        <option value="70">70 - Código da atividade, data hora da solicitação, origem</option>
                                                        <option value="80">80 - Nome fantasia da loja/endereço de origem (código da atividade) - observação</option>
                                                        <option value="81">81 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço</option>
                                                    </CFormSelect>

                                        </CCol>
                                        
                                    </CRow>
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
