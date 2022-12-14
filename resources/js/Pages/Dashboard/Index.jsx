import { useEffect, useState } from 'react';

import { Head, Link } from '@inertiajs/inertia-react';

import { cilCalendarCheck, cilPlus, cilSearch } from "@coreui/icons";
import CIcon from '@coreui/icons-react';
import {
    CAlert,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CCollapse, CFormInput,
    CInputGroup, CRow, CTooltip
} from '@coreui/react';

import ActivityCardItem from '@/Components/ActivityCardItem';
import DashboardRightSidebar from '@/Components/EntregadoresCardItem';
import DashboardMap from '@/Components/maps/DashboardMap';
import AuthenticatedBase from '@/Layouts/AuthenticatedBaseLayout';
import { useSelector } from 'react-redux';

export default function Dashboard(props) {
    const { activities } = props;

    const showDashboardLeft = useSelector( (state) => state.showDashboardLeft )
    const showDashboardCenter = useSelector( (state) => state.showDashboardCenter )
    const showDashboardRight = useSelector( (state) => state.showDashboardRight )

    const [searchVisible, setSearchVisible] = useState(false)

    useEffect(() => {
        console.log("Atividades", activities);
        console.log("Flash", props.flash);
    }, [])

    return (
        <AuthenticatedBase
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <CRow className="align-items-start">
                { showDashboardLeft && (
                    <CCol>
                        <div className="d-grid gap-2 d-md-flex justify-content-center mb-3">

                            {/* TODO: Separete to a component Dashboard Action */}
                            <CButtonGroup className="" role="group" aria-label="Button group with nested dropdown">
                                <CTooltip content="Inserir uma atividade">
                                    <Link
                                        type="button"
                                        color="primary"
                                        className="btn btn-primary"
                                        as="button"
                                        href={route('activities.index')}
                                    >
                                        <CIcon
                                            icon={cilPlus}
                                        />
                                    </Link>
                                </CTooltip>
                                <CTooltip content="Buscar atividade">
                                    <CButton
                                        type="button"
                                        color="primary"
                                        onClick={ () => setSearchVisible(!searchVisible) }
                                    >
                                        <CIcon
                                            icon={cilSearch}
                                        />
                                    </CButton>
                                </CTooltip>
                            </CButtonGroup>
                        </div>

                        <CCollapse visible={searchVisible}>
                            <CCard className="mb-3">
                                <CCardBody>
                                    {/* TODO: Criar a l??gica da busca */}
                                    <CInputGroup>
                                        <CFormInput
                                            placeholder="Buscar atividade..."
                                            aria-label="Buscar atividade..."
                                            aria-describedby="button-addon2"
                                        />
                                        <CButton type="button" color="secondary" variant="outline" id="button-addon2">
                                            <CIcon
                                                icon={cilSearch}
                                            />
                                        </CButton>
                                    </CInputGroup>
                                </CCardBody>
                            </CCard>
                        </CCollapse>

                        {/* TODO: Separar listagem de atividades em um componente! */}
                        { activities.length > 0 ? (
                            <CCard className="mb-2">
                                <CCardHeader>
                                    <CIcon
                                        className="me-2"
                                        icon={cilCalendarCheck}
                                    />
                                    <strong>
                                        ATIVIDADES SEM ENDERE??O
                                    </strong>
                                </CCardHeader>
                                <CCardBody className="p-2">
                                    { activities && activities.map( activitity => (
                                        <div key={ activitity.id } className="mb-2">
                                            <ActivityCardItem key={ activitity.id } activity={ activitity } />
                                        </div>
                                    ))}
                                </CCardBody>
                            </CCard>
                        ) : (
                            <CAlert color="primary">
                                Cadastre sua primeira atividade <Link className="alert-link" href="/activities">clique aqui</Link>
                            </CAlert>
                        ) }

                    </CCol>
                ) }

                { showDashboardCenter && (
                    <CCol lg={ !showDashboardLeft && !showDashboardRight ? 12 : 6 }>
                        <DashboardMap />
                    </CCol>
                ) }

                { showDashboardRight && (
                    <CCol>
                      <DashboardRightSidebar />
                    </CCol>
                ) }

            </CRow>
        </AuthenticatedBase>
    );
}
