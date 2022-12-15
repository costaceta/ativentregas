import AuthenticatedBase from '@/Layouts/AuthenticatedBaseLayout';
import { CTable,CTableHead, CTableHeaderCell, CTableRow, CTableBody, CTableDataCell, CCard, CCardBody, CButton} from '@coreui/react'
import { Link } from '@inertiajs/inertia-react';

export default function index() {
    return (
        <AuthenticatedBase>
            <div className="d-flex w-100 mb-3">

                <h3>Usuários Móveis</h3>
                <Link
                    className="btn btn-primary ms-3"
                    type="button"
                    href={ route('usuarios-moveis.create') }
                >
                    Cadastrar
                </Link>
            </div>
            <CCard>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Login/Licença</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Placa Veic.</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Telefone</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Função</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Acesso/Vínculo</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Faturando</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Visível nas Telas</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Allan Formiga</CTableDataCell>
                                <CTableDataCell>allanformiga</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>83996525975</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>
                                    <CButton color="light" shape="rounded-pill">Cancelar</CButton>
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                <CTableDataCell>Gerliane Fonteles</CTableDataCell>
                                <CTableDataCell>gerlianefonteles</CTableDataCell>
                                <CTableDataCell>GEN-5</CTableDataCell>
                                <CTableDataCell>85989238086</CTableDataCell>
                                <CTableDataCell>PROMOTOR</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>
                                    <CButton color="light" shape="rounded-pill">Cancelar</CButton>
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                <CTableDataCell>Gerliane Fonteles</CTableDataCell>
                                <CTableDataCell>gerlianefonteles</CTableDataCell>
                                <CTableDataCell>GEN-5</CTableDataCell>
                                <CTableDataCell>85989238086</CTableDataCell>
                                <CTableDataCell>PROMOTOR</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell>
                                    <CButton color="light" shape="rounded-pill">Cancelar</CButton>
                                </CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </AuthenticatedBase>
    )
}