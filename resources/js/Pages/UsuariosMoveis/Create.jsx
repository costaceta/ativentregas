import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";
import { CAccordionHeader, CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormCheck, CFormSelect, CRow, CCol, CContainer, CButton } from "@coreui/react";
import { Container } from "postcss";

const Create = () => {
    return (
        <AuthenticatedBase>
            <CContainer xl>
                <CRow>
                    <h3 className="mb-3">Criação de usuários móveis</h3>
                    <CCol lg={12}>
                        <CForm>
                            <CCard className="mb-2">
                                <CCardHeader>
                                    <h4 className="mb-0">Contatos</h4>
                                </CCardHeader>
                                <CCardBody>
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Telefone Celular"
                                        text="Os números de telefone móvel devem estar no padrão internacional (código de país, DDD e o número de destino). O código do Brasil é 55. Ex.: +5585999368807"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CCardBody>
                            </CCard>

                            <CCard className="mb-2">
                                <CCardHeader>
                                    <h4  className="mb-0">Identificação</h4>
                                </CCardHeader>
                                <CCardBody>
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Nome"
                                        text="Escreva aqui seu nome completo."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                    <CFormCheck id="flexCheckDefault" label="Promotor(a)" />
                                    <CFormCheck id="flexCheckDefault" label="Vendedor(a)" />
                                    <CFormCheck id="flexCheckDefault" label="Supervisor(a)" />
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Código da Licença"
                                        text="Especifica o código da licença para uso do APP. Para pessoas cadastradas que não precisam de acesso móvel, este campo pode ficar em branco."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="CPF"
                                        text="Não obrigatório. Se for especificado, digite apenas os números."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Descrição da função"
                                        text="Não obrigatório."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Código de origem"
                                        text="É o código do vendedor, promotor, supervisor ou entregador na base de dados de origem. Este código pode ser útil para sincronização de dados via integração."
                                        aria-describedby="exampleFormControlInputHelpInline"
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
                                    <CFormSelect aria-label="Default select example">
                                        <option>Define o tipo padrão do veículo do roteiro para definição da tabela de frete</option>
                                        <option value="1">Motocicleta</option>
                                        <option value="2">Bicicleta</option>
                                        <option value="3">Carro</option>
                                        <option value="4">Caminhão</option>
                                        <option value="5">Reboque</option>
                                    </CFormSelect>
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Placa do veículo"
                                        text="Placa do veículo de frete. Esta informação também é útil para sincronização de dados via integração."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CCardBody>
                            </CCard>

                            <CButton>
                                Cadastrar
                            </CButton>
                        </CForm>
                    </CCol>
                </CRow>
            </CContainer>
        </AuthenticatedBase>
    );
}

export default Create;