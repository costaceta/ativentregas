import React from "react"

import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";
import { Head } from "@inertiajs/inertia-react";


import { CRow, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CCard, CCardBody } from "@coreui/react";

const Index = () => {
    return (
        <AuthenticatedBase>
            <Head title="Atividades frequentes" />
            <h3 className="mb-3">Atividades frequentes</h3>
            <CCard>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Código</CTableHeaderCell>
                                <CTableHeaderCell scope="col">CPF/CNPJ</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Nome/Nome fantasia</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Razão Social</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Endereço</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Promotor</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Vendedores</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Supervisor</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Rede</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Tags</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Localização no mapa</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableHeaderCell scope="row">8037</CTableHeaderCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>DESTAKAO MAGAZINE</CTableDataCell>
                                <CTableDataCell>DESTAKAO MAGAZINE LTDA ME</CTableDataCell>
                                <CTableDataCell>AV MANDACARU, 319, MANDACARU, JOAO PESSOA-PB</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>SUPERMERCADO 1 A 4 CHECK OUTS</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>Localizar no Mapa  OK! Localizado automaticamente.</CTableDataCell>
                                <CTableDataCell>Edito button</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">3884</CTableHeaderCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>MER STO ANTONIO M.MOURA</CTableDataCell>
                                <CTableDataCell>ANTONIO BERNADINHO DA SILVA</CTableDataCell>
                                <CTableDataCell>R JACIRA DE ALMEIDA, 000, MARCO MOURA, SANTA RITA-PB</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>	SUPERMERCADO 1 A 4 CHECK OUTS</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>Localizar no Mapa  OK! Localizado manualmente.</CTableDataCell>
                                <CTableDataCell>Edit button</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
            
        </AuthenticatedBase>
    )
}

export default Index;