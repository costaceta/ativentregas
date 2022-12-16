import { useState } from "react";

import { useForm } from "@inertiajs/inertia-react";

import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem, CButton, CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormSelect,
    CFormSwitch, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow
} from "@coreui/react";
import { useEffect } from "react";

const CreateOption = ( props ) => {
    const [validated, setValidated] = useState(false);

    const { createOptionModalVisible, setCreateOptionModalVisible, typeID } = props;

    useEffect(() => {
        setData('activity_type_id', typeID)
    }, [typeID])

    const { data, setData, post, processing, reset, errors, transform } = useForm({
        title: "",
        description: "",
        visibility: 0,
        order: "10",
        activity_type_id: 0,
        active: true,
    });

    const createActivityType = (event) => {
        event.preventDefault();

        post(route("activities-options.store"), {
            onSuccess: () => {
                reset();
                setCreateOptionModalVisible(false);
                setData('activity_type_id', typeID)
            },
        } );
    };

    return (
        <CModal
            backdrop="static"
            size="xl"
            visible={createOptionModalVisible}
            onClose={() => setCreateOptionModalVisible(false)}
        >
            <CModalHeader>
                <CModalTitle>Nova opção de atividade</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CForm
                    className="g-3 needs-validation"
                    noValidate
                    validated={validated}
                >
                    <CAccordion activeItemKey={1}>
                        <CAccordionItem itemKey={1}>
                            <CAccordionHeader>
                                CONFIGURAÇÕES PRINCIPAIS
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormInput
                                            type="text"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            label="Título"
                                            feedbackInvalid="Titulo é um campo obrigatório!"
                                            invalid={errors.title && true}
                                            required
                                        />
                                    </CCol>
                                    <CCol className="mb-3" md={12}>
                                        <CFormInput
                                            type="text"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData("description", e.target.value)
                                            }
                                            label="Descrição"
                                            feedbackInvalid="Titulo é um campo obrigatório!"
                                            invalid={errors.description && true}
                                            required
                                        />
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Visibilidade nas plataformas WEB e APP"
                                            value={data.visibility}
                                            onChange={(e) =>
                                                setData(
                                                    "visibility",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="0">
                                                Em todos os dispositivos
                                            </option>
                                            <option value="1">
                                                Apenas no aplicativo WEB
                                            </option>
                                            <option value="2">
                                                Apenas no aplicativo móvel
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Lógica da opção"
                                            value={data.logic}
                                            onChange={(e) =>
                                                setData(
                                                    "logic",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="0">
                                                0 - Tratamento genérico
                                            </option>
                                            <option value="1">
                                                1 - Início da realização da atividade (Ex.: Chegada)
                                            </option>
                                            <option value="2">
                                                2 - Fim da realização da atividade (COM SUCESSO)
                                            </option>
                                            <option value="3">
                                                3 - Fim da realização da atividade (SEM SUCESSO). Anteriormente chamada de: Cancelamento da atividade
                                            </option>
                                            <option value="4">
                                                4 - Adianta o processamento de notificações
                                            </option>
                                            <option value="5">
                                                5 - Marcação de início de intervalo para almoço
                                            </option>
                                            <option value="6">
                                                6 - Marcação de final de intervalo do almoço
                                            </option>
                                            <option value="7">
                                                7 - Tempo em local - Marcação de início.
                                            </option>
                                            <option value="8">
                                                8 - Tempo em local - Marcação de fim.
                                            </option>
                                            <option value="9">
                                                9 - Marcação de serviço
                                            </option>
                                            <option value="10">
                                                10 - A caminho
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormInput
                                            type="text"
                                            label="Ordem"
                                            value={data.order}
                                            onChange={(e) =>
                                                setData("order", e.target.value)
                                            }
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
                            <CAccordionHeader>
                                FORMULÁRIO
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tipo de entrada a ser exibida"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Sem obtenção de dados
                                            </option>
                                            <option value="1">
                                                Exibir entrada de dados mostrando uma janela com um único campo
                                            </option>
                                            <option value="2">
                                                Exibir um formulário na mesma tela
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem campos para identificar o local da atividade?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">
                                                Código, Fantasia, Razão Social,
                                                Telefone
                                            </option>
                                            <option value="2">
                                                Código, Razão Social, Telefone
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem campos para endereço do destino?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">
                                                Logradouro, número, complemento,
                                                bairro, cidade, UF
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem CEP de destino?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">
                                                Sim, depois dos campos de
                                                endereço
                                            </option>
                                            <option value="2">
                                                Sim, antes dos campos de
                                                endereço
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem data hora de faturamento?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem campos para endereço de origem ?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem peso?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem volume?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem código do orçamento?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Tem valor da nota?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>

                        <CAccordionItem itemKey={3}>
                            <CAccordionHeader>EFEITOS NO APP</CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Clique longo na atividade"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não abrir mapa
                                            </option>
                                            <option value="1">
                                                Abrir mapa do próprio aplicativo
                                            </option>
                                            <option value="2">
                                                Abrir google maps com rota até a
                                                atividade
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormCheck
                                            id="flexCheckDefault"
                                            label="Feedback de Visualização ao entrar na atividade (Visualizada"
                                        />
                                        <CFormCheck
                                            id="flexCheckChecked"
                                            label="Som e vibração quando há uma atividade não visualizada (quando em rota)"
                                            defaultChecked
                                        />
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Notificações Android"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Sem notificações
                                            </option>
                                            <option value="1">
                                                Notificar sempre que houver pelo
                                                menos uma atividades não
                                                visualizada.
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Áudio no escopo da atividade"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Desligado</option>
                                            <option value="1">
                                                Inicia a gravação ao abrir a
                                                atividade, finaliza ao sair.
                                                Atribui o audio no campo
                                                especial de audio da atividade
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Bloqueio sequencial"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Participa do bloqueio sequencial
                                                entre atividades
                                            </option>
                                            <option value="1">
                                                Não participa do bloqueio
                                                sequencial entre atividades
                                            </option>
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>

                        <CAccordionItem itemKey={4}>
                            <CAccordionHeader>
                                EFEITOS NO SISTEMA
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <label htmlFor="duracao_estimada_tipoativ">
                                            Duração estimada para realização da
                                            atividade (em minutos)
                                        </label>
                                        <input
                                            type="text"
                                            subtype="int"
                                            className="form-control"
                                            id="duracao_estimada_tipoativ"
                                            placeholder=""
                                        ></input>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Ocultar no(s) relatorio(s)"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não ocultar, mostrar em todos.
                                            </option>
                                            <option value="1">
                                                Apenas no relatório Rendimento
                                                por usuário
                                            </option>
                                            <option value="2">
                                                Apenas em Atividades frequentes
                                            </option>
                                            <option value="3">
                                                Nos relatórios Rendimento por
                                                usuário e Atividades frequentes
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Permite adicionar automaticamente no roteiro após o cadastro?"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Captura de documentos a partir do APP"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">Não</option>
                                            <option value="1">Sim</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Comportamento na virada do dia"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Nunca readicionar a atividade na
                                                virada do dia.
                                            </option>
                                            <option value="1">
                                                Pode ser readicionada em novo
                                                roteiro, na virada do dia, se
                                                não tiver sido concluída.
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Atividade combinada - ao adicionar no roteiro"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">NENHUM</option>
                                            <option value="88">
                                                00 - JORNADA DE TRABALHO
                                            </option>
                                            <option value="52">
                                                01 - ANALISE DE PDV
                                            </option>
                                            <option value="29">
                                                02 - MR EMBALAGENS
                                            </option>
                                            <option value="103">
                                                03 Tipo de atividade Teste
                                                Rafael
                                            </option>
                                            <option value="107">
                                                asdfsdfsadfsa
                                            </option>
                                            <option value="100">
                                                ATENDIMENTO DE LOCACAO
                                            </option>
                                            <option value="32">
                                                ATIVIDADE DE ENTREGA
                                            </option>
                                            <option value="98">
                                                ATIVIDADE PADRÃO{" "}
                                            </option>
                                            <option value="101">
                                                ENTREGA AGUIAR FARMA sfasdfsdf
                                            </option>
                                            <option value="102">
                                                ENTREGAS - TESTE
                                            </option>
                                            <option value="97">
                                                GERADOR DE ATIVIDADES
                                            </option>
                                            <option value="108">
                                                Nova Atividade
                                            </option>
                                            <option value="104">
                                                NOVA ATIVIDADE RAFAEL
                                            </option>
                                            <option value="105">TESTE</option>
                                            <option value="106">
                                                TIPO DE ATIVIDADE NOVA
                                            </option>
                                            <option value="99">VISTORIA</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Restrição ao adicionar a atividade"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Sem restrição
                                            </option>
                                            <option value="1">
                                                Se estiver fora de uma área
                                                próxima, solicitar senha para
                                                adicionar
                                            </option>
                                            <option value="1">
                                                Se estiver fora de uma área
                                                próxima ou intermediária,
                                                solicitar senha para adicionar
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Bloqueio na conclusão do roteiro"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Sem bloqueio
                                            </option>
                                            <option value="1">
                                                A atividade precisa ter pelo
                                                menos uma marcação com uma das
                                                seguintes lógicas: Fim da
                                                realização da atividade, ou
                                                Cancelamento da atividade
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Bloqueio ao despachar o roteiro"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não bloqueia
                                            </option>
                                            <option value="1">
                                                Bloqueia o despacho do roteiro
                                                se nenhuma estimativa de rota
                                                foi gerada (estimativa otimizada
                                                ou estimativa de sequencia
                                                fixada)
                                            </option>
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>

                        <CAccordionItem itemKey={5}>
                            <CAccordionHeader>
                                BLOQUEIOS/DESBLOQUEIOS ENTRE AS OPÇÕES
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Notificações Android"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Ícone e total
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição do peso/volume das atividades disponíveis/no balcão, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Exibir o peso total da área e o
                                                peso total em cada atividade
                                                (unidade em kg, 2 casas
                                                decimais)
                                            </option>
                                            <option value="2">
                                                Exibir o número de volumes total
                                                da área e o número de volumes de
                                                cada atividade
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição da contagem de atividades no roteiro, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Ícone e total
                                            </option>
                                            <option value="2">
                                                Ícone e finalizadas/total
                                            </option>
                                            <option value="3">
                                                Ícone e não finalizadas/total
                                            </option>
                                            <option value="12">
                                                Ícone e finalizadas/total (Com
                                                indicação de conclusão de
                                                roteiro)
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição do peso/volume das atividades no roteiro, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Exibir o peso total (unidade kg,
                                                com 2 casas decimais)
                                            </option>
                                            <option value="2">
                                                Exibir o peso finalizado/peso
                                                total (unidade kg, com 2 casas
                                                decimais)
                                            </option>
                                            <option value="3">
                                                Exibir o peso não
                                                finalizado/peso total (unidade
                                                kg, com 2 casas decimais)
                                            </option>
                                            <option value="4">
                                                Exibir o número total de volumes
                                            </option>
                                            <option value="5">
                                                Exibir o número total de volumes
                                                concluídos/total
                                            </option>
                                            <option value="6">
                                                Exibir o número total de volumes
                                                não concluídos/total
                                            </option>
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>

                        <CAccordionItem itemKey={6}>
                            <CAccordionHeader>
                                ENVIO DE SMS
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Notificações Android"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Ícone e total
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição do peso/volume das atividades disponíveis/no balcão, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Exibir o peso total da área e o
                                                peso total em cada atividade
                                                (unidade em kg, 2 casas
                                                decimais)
                                            </option>
                                            <option value="2">
                                                Exibir o número de volumes total
                                                da área e o número de volumes de
                                                cada atividade
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição da contagem de atividades no roteiro, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Ícone e total
                                            </option>
                                            <option value="2">
                                                Ícone e finalizadas/total
                                            </option>
                                            <option value="3">
                                                Ícone e não finalizadas/total
                                            </option>
                                            <option value="12">
                                                Ícone e finalizadas/total (Com
                                                indicação de conclusão de
                                                roteiro)
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição do peso/volume das atividades no roteiro, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Exibir o peso total (unidade kg,
                                                com 2 casas decimais)
                                            </option>
                                            <option value="2">
                                                Exibir o peso finalizado/peso
                                                total (unidade kg, com 2 casas
                                                decimais)
                                            </option>
                                            <option value="3">
                                                Exibir o peso não
                                                finalizado/peso total (unidade
                                                kg, com 2 casas decimais)
                                            </option>
                                            <option value="4">
                                                Exibir o número total de volumes
                                            </option>
                                            <option value="5">
                                                Exibir o número total de volumes
                                                concluídos/total
                                            </option>
                                            <option value="6">
                                                Exibir o número total de volumes
                                                não concluídos/total
                                            </option>
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>

                        <CAccordionItem itemKey={7}>
                            <CAccordionHeader>
                                CRIAÇÃO DE UMA NOVA ATIVIDADE
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Notificações Android"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Ícone e total
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição do peso/volume das atividades disponíveis/no balcão, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Exibir o peso total da área e o
                                                peso total em cada atividade
                                                (unidade em kg, 2 casas
                                                decimais)
                                            </option>
                                            <option value="2">
                                                Exibir o número de volumes total
                                                da área e o número de volumes de
                                                cada atividade
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição da contagem de atividades no roteiro, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Ícone e total
                                            </option>
                                            <option value="2">
                                                Ícone e finalizadas/total
                                            </option>
                                            <option value="3">
                                                Ícone e não finalizadas/total
                                            </option>
                                            <option value="12">
                                                Ícone e finalizadas/total (Com
                                                indicação de conclusão de
                                                roteiro)
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição do peso/volume das atividades no roteiro, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Exibir o peso total (unidade kg,
                                                com 2 casas decimais)
                                            </option>
                                            <option value="2">
                                                Exibir o peso finalizado/peso
                                                total (unidade kg, com 2 casas
                                                decimais)
                                            </option>
                                            <option value="3">
                                                Exibir o peso não
                                                finalizado/peso total (unidade
                                                kg, com 2 casas decimais)
                                            </option>
                                            <option value="4">
                                                Exibir o número total de volumes
                                            </option>
                                            <option value="5">
                                                Exibir o número total de volumes
                                                concluídos/total
                                            </option>
                                            <option value="6">
                                                Exibir o número total de volumes
                                                não concluídos/total
                                            </option>
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>

                        <CAccordionItem itemKey={8}>
                            <CAccordionHeader>
                            TRATAMENTO NOS RELATÓRIOS
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Notificações Android"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Ícone e total
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição do peso/volume das atividades disponíveis/no balcão, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Exibir o peso total da área e o
                                                peso total em cada atividade
                                                (unidade em kg, 2 casas
                                                decimais)
                                            </option>
                                            <option value="2">
                                                Exibir o número de volumes total
                                                da área e o número de volumes de
                                                cada atividade
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição da contagem de atividades no roteiro, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Ícone e total
                                            </option>
                                            <option value="2">
                                                Ícone e finalizadas/total
                                            </option>
                                            <option value="3">
                                                Ícone e não finalizadas/total
                                            </option>
                                            <option value="12">
                                                Ícone e finalizadas/total (Com
                                                indicação de conclusão de
                                                roteiro)
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Exibição do peso/volume das atividades no roteiro, no painel de operação"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Não exibir
                                            </option>
                                            <option value="1">
                                                Exibir o peso total (unidade kg,
                                                com 2 casas decimais)
                                            </option>
                                            <option value="2">
                                                Exibir o peso finalizado/peso
                                                total (unidade kg, com 2 casas
                                                decimais)
                                            </option>
                                            <option value="3">
                                                Exibir o peso não
                                                finalizado/peso total (unidade
                                                kg, com 2 casas decimais)
                                            </option>
                                            <option value="4">
                                                Exibir o número total de volumes
                                            </option>
                                            <option value="5">
                                                Exibir o número total de volumes
                                                concluídos/total
                                            </option>
                                            <option value="6">
                                                Exibir o número total de volumes
                                                não concluídos/total
                                            </option>
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>

                        <CAccordionItem itemKey={9}>
                            <CAccordionHeader>
                                OUTRAS CONFIGURAÇÕES
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Classe da atividade"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Atividade genérica
                                            </option>
                                            <option value="1">Serviço</option>
                                            <option value="5">
                                                Documentação de cadastro do
                                                agente
                                            </option>
                                            <option value="10">
                                                Documentação de recibos para o
                                                agente
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormCheck
                                            id="flexCheckChecked"
                                            label="Exibir display 3. O Display 3 exibe apenas a última opção escolhida naquela atividade."
                                            defaultChecked
                                        />
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Resumo dos números do usuário no app"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                Sem resumo
                                            </option>
                                            <option value="1">
                                                Listando todos os dias do mês e
                                                resumindo por quinzena
                                            </option>
                                            <option value="2">
                                                Habilita resumo da quilometragem
                                                informada. (Dica: usar no tipo
                                                de atividade quilometragem)
                                            </option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormCheck
                                            id="flexCheckDefault"
                                            label="Adicionar como visualizada na fase de ajuste do roteiro"
                                        />
                                        <CFormCheck
                                            id="flexCheckChecked"
                                            label="Adicionar como visualizada na fase em rota"
                                            defaultChecked
                                        />
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <label htmlFor="duracao_estimada_tipoativ">
                                            Id para integração
                                        </label>
                                        <input
                                            type="text"
                                            subtype="int"
                                            className="form-control"
                                            id="duracao_estimada_tipoativ"
                                            placeholder=""
                                        ></input>
                                    </CCol>

                                    <CCol className="mb-3" md={12}>
                                        <CFormSelect
                                            label="Publicação de link de rastreamento"
                                            aria-label="Default select example"
                                        >
                                            <option value="0">
                                                0 - Não publicar
                                            </option>
                                            <option value="1">
                                                1 - Publicar no módulo
                                                jasaiu.com, exibir a previsão de
                                                chegada desde a criação do link.
                                            </option>
                                            <option value="2">
                                                2 - Publicar no módulo
                                                jasaiu.com, exibir a previsão de
                                                chegada apenas após a marcação
                                                de opção com lógica "a caminho"{" "}
                                            </option>
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>

                        <CAccordionItem itemKey={10}>
                            <CAccordionHeader>
                                CONFIGURAÇÕES IoT
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CRow>
                                    <CCol className="mb-3" md={12}>
                                        <CFormCheck
                                            id="flexCheckChecked"
                                            label="Atividade para IoT"
                                            defaultChecked
                                        />
                                    </CCol>
                                </CRow>
                            </CAccordionBody>
                        </CAccordionItem>
                    </CAccordion>
                </CForm>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setCreateOptionModalVisible(false)}>
                    Fechar
                </CButton>
                <CButton
                    color="primary"
                    onClick={(event) => createActivityType(event)}
                >
                    Cadastrar
                </CButton>
            </CModalFooter>
        </CModal>
    );
};

export default CreateOption;
