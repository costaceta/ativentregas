import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";
import { CAccordionHeader, CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormCheck, CFormSelect, CRow, CCol, CContainer, CButton } from "@coreui/react";
import { useForm, Head } from '@inertiajs/inertia-react';

const Create = () => {
    const { data, setData, post, processing, reset, errors  } = useForm({
        nome: '',
        nome_usuario: '',
        placa: '',
        telefone: '',
        funcao: '',
    });

    const createUsuarioMovel = (event) => {
        event.preventDefault();
        console.log("DATA", data)

        post(route('usuarios-moveis.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedBase>
            <CContainer xl>
                <CRow>
                    <h3 className="mb-3">Criação de usuários móveis</h3>
                    <CCol lg={12}>
                        <CForm onSubmit={createUsuarioMovel}>

                            <CCard className="mb-2">
                                <CCardHeader>
                                    <h4 className="mb-0">Identificação</h4>
                                </CCardHeader>
                                <CCardBody>
                                    <CCol className="mb-2" lg={12}>
                                        <CFormInput
                                            type="text"
                                            value={data.nome}
                                            onChange={e => setData('nome', e.target.value)}
                                            label="Nome"
                                            text="Escreva aqui seu nome completo."
                                            feedbackInvalid="O nome é um campo obrigatório!"
                                            invalid={ errors.nome && true }
                                            required
                                        />
                                    </CCol>

                                    <CCol className="mb-2" lg={12}>
                                        <CFormCheck inline name="funcaoRadio" type="radio" label="Promotor(a)" defaultChecked/>
                                        <CFormCheck inline name="funcaoRadio" type="radio" label="Vendedor(a)" />
                                        <CFormCheck inline name="funcaoRadio" type="radio" label="Supervisor(a)" />
                                    </CCol>

                                    <CCol className="mb-2" lg={12}>

                                        <CFormInput
                                            type="email"
                                            id="exampleFormControlInput1"
                                            label="Código da Licença"
                                            text="Especifica o código da licença para uso do APP. Para pessoas cadastradas que não precisam de acesso móvel, este campo pode ficar em branco."
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CCol>

                                    <CCol className="mb-2" lg={12}>

                                        <CFormInput
                                            type="email"
                                            id="exampleFormControlInput1"
                                            label="CPF"
                                            text="Não obrigatório. Se for especificado, digite apenas os números."
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CCol>
                                    <CCol className="mb-2" lg={12}>

                                        <CFormInput
                                            type="email"
                                            id="exampleFormControlInput1"
                                            label="Descrição da função"
                                            text="Não obrigatório."
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CCol>
                                    <CCol className="mb-2" lg={12}>
                                        <CFormInput
                                            type="email"
                                            id="exampleFormControlInput1"
                                            label="Código de origem"
                                            text="É o código do vendedor, promotor, supervisor ou entregador na base de dados de origem. Este código pode ser útil para sincronização de dados via integração."
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CCol>
                                </CCardBody>
                            </CCard>

                            <CCard className="mb-2">
                                <CCardHeader>
                                    <h4 className="mb-0">Contatos</h4>
                                </CCardHeader>
                                <CCardBody>
                                    <CFormInput
                                        type="text"
                                        value={data.telefone}
                                        onChange={e => setData('telefone', e.target.value)}
                                        label="Telefone Celular"
                                        feedbackInvalid="O telefone é um campo obrigatório!"
                                        invalid={ errors.nome && true }
                                        text="Os números de telefone móvel devem estar no padrão internacional (código de país, DDD e o número de destino). O código do Brasil é 55. Ex.: +5585999368807"

                                    />
                                </CCardBody>
                            </CCard>

                            <CCard className="mb-2">
                            <CCardHeader>
                                    <h4  className="mb-0">Endereço</h4>
                                </CCardHeader>
                                <CCardBody>
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Logradouro"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Número"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Bairro"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Cidade"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="UF"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CCardBody>
                            </CCard>

                            <CCard className="mb-2">
                                <CCardHeader>
                                    <h4  className="mb-0">Transporte</h4>
                                </CCardHeader>
                                <CCardBody>
                                    <h5>Veículo principal</h5>
                                    <CCol className="mb-2" lg={12}>
                                        <CFormSelect aria-label="Default select example">
                                            <option>Define o tipo padrão do veículo do roteiro para definição da tabela de frete</option>
                                            <option value="1">Motocicleta</option>
                                            <option value="2">Bicicleta</option>
                                            <option value="3">Carro</option>
                                            <option value="4">Caminhão</option>
                                            <option value="5">Reboque</option>
                                        </CFormSelect>
                                    </CCol>

                                    <CCol lg={12}>
                                        <CFormInput
                                            type="text"
                                            value={data.placa}
                                            onChange={ event => setData('placa', event.target.value) }
                                            label="Placa do veículo"
                                            text="Placa do veículo de frete. Esta informação também é útil para sincronização de dados via integração."
                                        />

                                    </CCol>
                                </CCardBody>
                            </CCard>

                            <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                                <CButton type="submit">
                                    Cadastrar
                                </CButton>
                            </div>
                        </CForm>
                    </CCol>
                </CRow>
            </CContainer>
        </AuthenticatedBase>
    );
}

export default Create;