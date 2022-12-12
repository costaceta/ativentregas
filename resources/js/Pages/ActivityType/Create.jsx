import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

import {
    CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CCard, CCardFooter, CCardHeader, CCol, CForm, CFormInput, CFormSelect, CFormSwitch, CRow, CFormCheck
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
                                                        <option value="82">82 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço - observação</option>
                                                        <option value="83">83 - Nome fantasia da loja/endereço de origem - Razão social cliente - Telefone</option>
                                                        <option value="84">84 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço - Telefone</option>
                                                        <option value="90">90 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="91">91 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento, Vendedor</option>
                                                        <option value="92">92 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento, Usuário que cadastrou a atividade</option>
                                                        <option value="100">100 - Código do cliente - Razão social do cliente</option>
                                                        <option value="101">101 - Código do cliente - Nome fantasia do cliente</option>
                                                        <option value="110">110 - Tipo de atividade - Nome fantasia do solicitante do serviço</option>
                                                        <option value="115">115 - Tipo de atividade - Nome fantasia do solicitante do serviço - Telefone</option>
                                                        <option value="150">150 - Valor do pedido</option>
                                                        <option value="200">200 - Captura de imagem 1 da atividade</option>
                                                        <option value="210">210 - Captura de imagem 2 da atividade</option>
                                                        <option value="220">220 - Número da NF - Chave Danf (Ex.: NF 990011 - DANF 23201124530999000149550010001372771277913780)</option>
                                                        <option value="230">230 - logradouro, numero, complemento, bairro, cidade, CEP: XXXXXXXX, data hora solicitação, observação</option>
                                                        <option value="240">240 - Nome do tomador do serviço (código do orcamento), hora da solicitação</option>
                                                        <option value="250">250 - Nome do tomador do serviço (código do orcamento), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="260">260 - Canal de venda, Nome do tomador do serviço (código da atividade), hora da solicitação</option>
                                                        <option value="261">261 - Canal de venda, Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="500">500 - TEMPLATE</option>
                                                    </CFormSelect>

                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Display 2 - no APP" aria-label="Default select example">
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
                                                        <option value="82">82 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço - observação</option>
                                                        <option value="83">83 - Nome fantasia da loja/endereço de origem - Razão social cliente - Telefone</option>
                                                        <option value="84">84 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço - Telefone</option>
                                                        <option value="90">90 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="91">91 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento, Vendedor</option>
                                                        <option value="92">92 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento, Usuário que cadastrou a atividade</option>
                                                        <option value="100">100 - Código do cliente - Razão social do cliente</option>
                                                        <option value="101">101 - Código do cliente - Nome fantasia do cliente</option>
                                                        <option value="110">110 - Tipo de atividade - Nome fantasia do solicitante do serviço</option>
                                                        <option value="115">115 - Tipo de atividade - Nome fantasia do solicitante do serviço - Telefone</option>
                                                        <option value="150">150 - Valor do pedido</option>
                                                        <option value="200">200 - Captura de imagem 1 da atividade</option>
                                                        <option value="210">210 - Captura de imagem 2 da atividade</option>
                                                        <option value="220">220 - Número da NF - Chave Danf (Ex.: NF 990011 - DANF 23201124530999000149550010001372771277913780)</option>
                                                        <option value="230">230 - logradouro, numero, complemento, bairro, cidade, CEP: XXXXXXXX, data hora solicitação, observação</option>
                                                        <option value="240">240 - Nome do tomador do serviço (código do orcamento), hora da solicitação</option>
                                                        <option value="250">250 - Nome do tomador do serviço (código do orcamento), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="260">260 - Canal de venda, Nome do tomador do serviço (código da atividade), hora da solicitação</option>
                                                        <option value="261">261 - Canal de venda, Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="500">500 - TEMPLATE</option>
                                                    </CFormSelect>

                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Display 1 - na WEB" aria-label="Default select example">
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
                                                        <option value="82">82 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço - observação</option>
                                                        <option value="83">83 - Nome fantasia da loja/endereço de origem - Razão social cliente - Telefone</option>
                                                        <option value="84">84 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço - Telefone</option>
                                                        <option value="90">90 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="91">91 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento, Vendedor</option>
                                                        <option value="92">92 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento, Usuário que cadastrou a atividade</option>
                                                        <option value="100">100 - Código do cliente - Razão social do cliente</option>
                                                        <option value="101">101 - Código do cliente - Nome fantasia do cliente</option>
                                                        <option value="110">110 - Tipo de atividade - Nome fantasia do solicitante do serviço</option>
                                                        <option value="115">115 - Tipo de atividade - Nome fantasia do solicitante do serviço - Telefone</option>
                                                        <option value="150">150 - Valor do pedido</option>
                                                        <option value="200">200 - Captura de imagem 1 da atividade</option>
                                                        <option value="210">210 - Captura de imagem 2 da atividade</option>
                                                        <option value="220">220 - Número da NF - Chave Danf (Ex.: NF 990011 - DANF 23201124530999000149550010001372771277913780)</option>
                                                        <option value="230">230 - logradouro, numero, complemento, bairro, cidade, CEP: XXXXXXXX, data hora solicitação, observação</option>
                                                        <option value="240">240 - Nome do tomador do serviço (código do orcamento), hora da solicitação</option>
                                                        <option value="250">250 - Nome do tomador do serviço (código do orcamento), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="260">260 - Canal de venda, Nome do tomador do serviço (código da atividade), hora da solicitação</option>
                                                        <option value="261">261 - Canal de venda, Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="500">500 - TEMPLATE</option>
                                                    </CFormSelect>

                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <CFormSelect label="Display 2 - na WEB" aria-label="Default select example">
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
                                                        <option value="82">82 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço - observação</option>
                                                        <option value="83">83 - Nome fantasia da loja/endereço de origem - Razão social cliente - Telefone</option>
                                                        <option value="84">84 - Nome fantasia da loja/endereço de origem (código da atividade) - Nome do tomador do serviço - Telefone</option>
                                                        <option value="90">90 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="91">91 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento, Vendedor</option>
                                                        <option value="92">92 - Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento, Usuário que cadastrou a atividade</option>
                                                        <option value="100">100 - Código do cliente - Razão social do cliente</option>
                                                        <option value="101">101 - Código do cliente - Nome fantasia do cliente</option>
                                                        <option value="110">110 - Tipo de atividade - Nome fantasia do solicitante do serviço</option>
                                                        <option value="115">115 - Tipo de atividade - Nome fantasia do solicitante do serviço - Telefone</option>
                                                        <option value="150">150 - Valor do pedido</option>
                                                        <option value="200">200 - Captura de imagem 1 da atividade</option>
                                                        <option value="210">210 - Captura de imagem 2 da atividade</option>
                                                        <option value="220">220 - Número da NF - Chave Danf (Ex.: NF 990011 - DANF 23201124530999000149550010001372771277913780)</option>
                                                        <option value="230">230 - logradouro, numero, complemento, bairro, cidade, CEP: XXXXXXXX, data hora solicitação, observação</option>
                                                        <option value="240">240 - Nome do tomador do serviço (código do orcamento), hora da solicitação</option>
                                                        <option value="250">250 - Nome do tomador do serviço (código do orcamento), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="260">260 - Canal de venda, Nome do tomador do serviço (código da atividade), hora da solicitação</option>
                                                        <option value="261">261 - Canal de venda, Nome do tomador do serviço (código da atividade), Hora da Pré-nota, Hora do faturamento</option>
                                                        <option value="500">500 - TEMPLATE</option>
                                                    </CFormSelect>

                                        </CCol>

                                    </CRow>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={4}>
                                <CAccordionHeader>EFEITOS NO APP</CAccordionHeader>
                                <CAccordionBody>
                                    <CRow>
                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Clique longo na atividade" aria-label="Default select example">
                                                        <option value="0">Não abrir mapa</option>
                                                        <option value="1">Abrir mapa do próprio aplicativo</option>
                                                        <option value="2">Abrir google maps com rota até a atividade</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                        <CFormCheck id="flexCheckDefault" label="Feedback de Visualização ao entrar na atividade (Visualizada"/>
                                        <CFormCheck id="flexCheckChecked" label="Som e vibração quando há uma atividade não visualizada (quando em rota)" defaultChecked />


                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Notificações Android" aria-label="Default select example">
                                                        <option value="0">Sem notificações</option>
                                                        <option value="1">Notificar sempre que houver pelo menos uma atividades não visualizada.</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Áudio no escopo da atividade" aria-label="Default select example">
                                                        <option value="0">Desligado</option>
                                                        <option value="1">Inicia a gravação ao abrir a atividade, finaliza ao sair. Atribui o audio no campo especial de audio da atividade</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Bloqueio sequencial" aria-label="Default select example">
                                                        <option value="0">Participa do bloqueio sequencial entre atividades</option>
                                                        <option value="1">Não participa do bloqueio sequencial entre atividades</option>
                                                    </CFormSelect>
                                        </CCol>

                                    </CRow>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={5}>
                                <CAccordionHeader>COMPORTAMENTO NO SISTEMA</CAccordionHeader>
                                <CAccordionBody>
                                       <CRow>
                                        <CCol className="mb-3" md={12}>
                                            <label for="duracao_estimada_tipoativ">Duração estimada para realização da atividade (em minutos)</label>
                                            <input type="text" subtype="int" class="form-control" id="duracao_estimada_tipoativ" placeholder="" required="true"></input>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Ocultar no(s) relatorio(s)" aria-label="Default select example">
                                                        <option value="0">Não ocultar, mostrar em todos.</option>
                                                        <option value="1">Apenas no relatório Rendimento por usuário</option>
                                                        <option value="2">Apenas em Atividades frequentes</option>
                                                        <option value="3">Nos relatórios Rendimento por usuário e Atividades frequentes</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Permite adicionar automaticamente no roteiro após o cadastro?" aria-label="Default select example">
                                                        <option value="0">Não</option>
                                                        <option value="1">Sim</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Captura de documentos a partir do APP" aria-label="Default select example">
                                                        <option value="0">Não</option>
                                                        <option value="1">Sim</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Comportamento na virada do dia" aria-label="Default select example">
                                                        <option value="0">Nunca readicionar a atividade na virada do dia.</option>
                                                        <option value="1">Pode ser readicionada em novo roteiro, na virada do dia, se não tiver sido concluída.</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Atividade combinada - ao adicionar no roteiro" aria-label="Default select example">
                                                        <option value="0">NENHUM</option>
                                                        <option value="88">00 - JORNADA DE TRABALHO</option>
                                                        <option value="52">01 - ANALISE DE PDV</option>
                                                        <option value="29">02 - MR EMBALAGENS</option>
                                                        <option value="103">03 Tipo de atividade Teste Rafael</option>
                                                        <option value="107">asdfsdfsadfsa</option>
                                                        <option value="100">ATENDIMENTO DE LOCACAO</option>
                                                        <option value="32">ATIVIDADE DE ENTREGA</option>
                                                        <option value="98">ATIVIDADE PADRÃO </option>
                                                        <option value="101">ENTREGA AGUIAR FARMA sfasdfsdf</option>
                                                        <option value="102">ENTREGAS - TESTE</option>
                                                        <option value="97">GERADOR DE ATIVIDADES</option>
                                                        <option value="108">Nova Atividade</option>
                                                        <option value="104">NOVA ATIVIDADE RAFAEL</option>
                                                        <option value="105">TESTE</option>
                                                        <option value="106">TIPO DE ATIVIDADE NOVA</option>
                                                        <option value="99">VISTORIA</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Restrição ao adicionar a atividade" aria-label="Default select example">
                                                        <option value="0">Sem restrição</option>
                                                        <option value="1">Se estiver fora de uma área próxima, solicitar senha para adicionar</option>
                                                        <option value="1">Se estiver fora de uma área próxima ou intermediária, solicitar senha para adicionar</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Bloqueio na conclusão do roteiro" aria-label="Default select example">
                                                        <option value="0">Sem bloqueio</option>
                                                        <option value="1">A atividade precisa ter pelo menos uma marcação com uma das seguintes lógicas: Fim da realização da atividade, ou Cancelamento da atividade</option>
                                                    </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Bloqueio ao despachar o roteiro" aria-label="Default select example">
                                                        <option value="0">Não bloqueia</option>
                                                        <option value="1">Bloqueia o despacho do roteiro se nenhuma estimativa de rota foi gerada (estimativa otimizada ou estimativa de sequencia fixada)</option>
                                                    </CFormSelect>
                                        </CCol>

                                       </CRow>
                                    
                                </CAccordionBody>
                            </CAccordionItem>
                            
                            <CAccordionItem itemKey={7}>
                                <CAccordionHeader>PAINEL DE OPERAÇÃO WEB - NÚMEROS</CAccordionHeader>
                                <CAccordionBody>
                                    <CRow>
                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Notificações Android" aria-label="Default select example">
                                                        <option value="0">Não exibir</option>
                                                        <option value="1">Ícone e total</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Exibição do peso/volume das atividades disponíveis/no balcão, no painel de operação" aria-label="Default select example">
                                                        <option value="0">Não exibir</option>
                                                        <option value="1">Exibir o peso total da área e o peso total em cada atividade (unidade em kg, 2 casas decimais)</option>
                                                        <option value="2">Exibir o número de volumes total da área e o número de volumes de cada atividade</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Exibição da contagem de atividades no roteiro, no painel de operação" aria-label="Default select example">
                                                        <option value="0">Não exibir</option>
                                                        <option value="1">Ícone e total</option>
                                                        <option value="2">Ícone e finalizadas/total</option>
                                                        <option value="3">Ícone e não finalizadas/total</option>
                                                        <option value="12">Ícone e finalizadas/total (Com indicação de conclusão de roteiro)</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Exibição do peso/volume das atividades no roteiro, no painel de operação" aria-label="Default select example">
                                                        <option value="0">Não exibir</option>
                                                        <option value="1">Exibir o peso total (unidade kg, com 2 casas decimais)</option>
                                                        <option value="2">Exibir o peso finalizado/peso total (unidade kg, com 2 casas decimais)</option>
                                                        <option value="3">Exibir o peso não finalizado/peso total (unidade kg, com 2 casas decimais)</option>
                                                        <option value="4">Exibir o número total de volumes</option>
                                                        <option value="5">Exibir o número total de volumes concluídos/total</option>
                                                        <option value="6">Exibir o número total de volumes não concluídos/total</option>
                                                </CFormSelect>
                                        </CCol>

                                    </CRow>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={8}>
                                <CAccordionHeader>OUTRAS CONFIGURAÇÕES</CAccordionHeader>
                                <CAccordionBody>
                                    <CRow>
                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Classe da atividade" aria-label="Default select example">
                                                        <option value="0">Atividade genérica</option>
                                                        <option value="1">Serviço</option>
                                                        <option value="5">Documentação de cadastro do agente</option>
                                                        <option value="10">Documentação de recibos para o agente</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormCheck id="flexCheckChecked" label="Exibir display 3. O Display 3 exibe apenas a última opção escolhida naquela atividade." defaultChecked />
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Resumo dos números do usuário no app" aria-label="Default select example">
                                                        <option value="0">Sem resumo</option>
                                                        <option value="1">Listando todos os dias do mês e resumindo por quinzena</option>
                                                        <option value="2">Habilita resumo da quilometragem informada. (Dica: usar no tipo de atividade quilometragem)</option>
                                                </CFormSelect>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormCheck id="flexCheckDefault" label="Adicionar como visualizada na fase de ajuste do roteiro"/>
                                                <CFormCheck id="flexCheckChecked" label="Adicionar como visualizada na fase em rota" defaultChecked />
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                            <label for="duracao_estimada_tipoativ">Id para integração</label>
                                            <input type="text" subtype="int" class="form-control" id="duracao_estimada_tipoativ" placeholder="" required="true"></input>
                                        </CCol>

                                        <CCol className="mb-3" md={12}>
                                                <CFormSelect label="Publicação de link de rastreamento" aria-label="Default select example">
                                                        <option value="0">0 - Não publicar</option>
                                                        <option value="1">1 - Publicar no módulo jasaiu.com, exibir a previsão de chegada desde a criação do link.</option>
                                                        <option value="2">2 - Publicar no módulo jasaiu.com, exibir a previsão de chegada apenas após a marcação de opção com lógica "a caminho" </option>
                                                </CFormSelect>
                                        </CCol>


                                    </CRow>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={9}>
                                <CAccordionHeader>SOLICITAÇÕES PORTAL</CAccordionHeader>
                                <CAccordionBody>
                                      <CRow>
                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo cidade" aria-label="Default select example">
                                                            <option value="0">Obrigatório e iniciado vazio</option>
                                                            <option value="1">Obrigatório e inicializado com a cidade do perfil</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo localização do endereço no mapa" aria-label="Default select example">
                                                            <option value="2">Obrigatório inicia indefinido, e precisa de confirmação no mapa</option>
                                                            <option value="3">Obrigatório, automaticamente preenchido ao deixar o foco de qualquer um dos campos de endereco</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo nome do contato" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo nome do contato" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo tel/e-mail" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                            <option value="3">Obrigatório com código do país</option>
                                                            <option value="4">Opcional com código do país</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo número do pedido / código da atividade" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo volume" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo peso" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo forma de pagamento" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo arquivo anexo" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Campo valor do pedido" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Formulário extra" aria-label="Default select example">
                                                            <option value="0">Sem formulário extra</option>
                                                            <option value="1">BDO</option>
                                                            <option value="2">AWB/HAWB - Conhecimento de Embarque Aéreo</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Companhia Aérea" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Endereço pré definido" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="10">Aeroportos com tag AEROPORTO</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Flight number, ETA, ETD" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Dimensões para cubagem (Altura x Largura x Comprimento)" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                    </CFormSelect>
                                            </CCol>

                                            <CCol className="mb-3" md={12}>
                                                    <CFormSelect label="Telefone extra" aria-label="Default select example">
                                                            <option value="0">Desativado</option>
                                                            <option value="1">Opcional</option>
                                                            <option value="2">Obrigatório</option>
                                                            <option value="3">Obrigatório com código do país</option>
                                                            <option value="4">Opcional com código do país</option>
                                                    </CFormSelect>
                                            </CCol>

                                      </CRow>
                                </CAccordionBody>
                            </CAccordionItem>

                            <CAccordionItem itemKey={10}>
                                <CAccordionHeader>CONFIGURAÇÕES IoT</CAccordionHeader>
                                <CAccordionBody>
                                       <CRow>
                                            <CCol className="mb-3" md={12}>
                                                    <CFormCheck id="flexCheckChecked" label="Atividade para IoT" defaultChecked />
                                            </CCol>
                                       </CRow>
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
