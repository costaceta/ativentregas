import React, { useRef, useEffect, useState, useCallback } from 'react';

import { Head, Link } from '@inertiajs/inertia-react';

import { cilCalendarCheck, cilChevronRight, cilOptions, cilPlus, cilSearch } from "@coreui/icons";
import CIcon from '@coreui/icons-react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CBadge,
    CAlert,
    CAlertLink,
    CButtonGroup,
    CButton,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CDropdownDivider,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CCollapse,
    CInputGroup,
    CFormInput
} from '@coreui/react';

import AuthenticatedBase from '@/Layouts/AuthenticatedBaseLayout';
import { useDispatch, useSelector } from 'react-redux';
import DashboardMap from '@/Components/maps/DashboardMap';
import ActivityCardItem from '@/Components/ActivityCardItem';


export default function Dashboard(props) {
    const { activities } = props;

    const showDashboardLeft = useSelector( (state) => state.showDashboardLeft )
    const showDashboardCenter = useSelector( (state) => state.showDashboardCenter )
    const showDashboardRight = useSelector( (state) => state.showDashboardRight )

    const [visible, setVisible] = useState(false)
    const [searchVisible, setSearchVisible] = useState(false)

    return (
        <AuthenticatedBase
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <CRow className="align-items-start">
                { showDashboardLeft && (
                    <CCol>
                        <div className="d-grid gap-2 d-md-flex justify-content-center mb-3">
                            <CButtonGroup className="" role="group" aria-label="Button group with nested dropdown">
                                <CButton
                                    type="button"
                                    color="primary"
                                    onClick={() => setVisible(!visible)}
                                >
                                    <CIcon
                                        icon={cilPlus}
                                    />
                                </CButton>
                                <CButton
                                    type="button"
                                    color="primary"
                                    onClick={ () => setSearchVisible(!searchVisible) }
                                >
                                    <CIcon
                                        icon={cilSearch}
                                    />
                                </CButton>
                                <CDropdown variant="btn-group">
                                    <CDropdownToggle type="button" color="primary">
                                        Atividades (0)
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">
                                            Cadastrar
                                        </CDropdownItem>
                                        <CDropdownItem href="#">
                                            Busca avançada
                                        </CDropdownItem>
                                        <CDropdownItem href="#">
                                            Cancelar
                                        </CDropdownItem>
                                        <CDropdownItem href="#">
                                            Adiar
                                        </CDropdownItem>
                                        <CDropdownItem href="#">
                                            Pendências
                                        </CDropdownItem>
                                        <CDropdownItem href="#">
                                            Programadas
                                        </CDropdownItem>
                                        <CDropdownItem href="#">
                                            Informar registro do caixa
                                        </CDropdownItem>
                                        <CDropdownItem href="#">
                                            Trazer atividade via integração
                                        </CDropdownItem>
                                        {/* <CDropdownDivider /> */}
                                        {/* <CDropdownItem href="#">Separated link</CDropdownItem> */}
                                    </CDropdownMenu>
                                </CDropdown>
                            </CButtonGroup>

                            <CModal size="xl" visible={visible} onClose={() => setVisible(false)}>
                                <CModalHeader onClose={() => setVisible(false)}>
                                    <CModalTitle>CADASTRO DE ATIVIDADE</CModalTitle>
                                </CModalHeader>
                                <CModalBody>
                                    Aqui vão os campos do cadastro de Atividade
                                </CModalBody>
                                <CModalFooter>
                                    <CButton color="secondary" onClick={() => setVisible(false)}>
                                        Fechar
                                    </CButton>
                                    <CButton color="primary">Salvar</CButton>
                                </CModalFooter>
                            </CModal>
                        </div>

                        <CCollapse visible={searchVisible}>
                            <CCard className="mb-3">
                                <CCardBody>
                                    {/* TODO: Criar a lógica da busca */}
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
                                    ATIVIDADES SEM ENDEREÇO
                                    </strong>
                                </CCardHeader>
                                <CCardBody>
                                    <div className="overflow-auto" style={{ maxHeight: '340px' }}>
                                        { activities && activities.map( activitity => (
                                            <ActivityCardItem key={activitity.id} activity={activitity} />
                                        ))}
                                    </div>
                                </CCardBody>
                            </CCard>
                        ) : (
                            <CAlert color="primary">
                                Cadastre sua primeira atividade <Link className="alert-link" href="/activities">clique aqui</Link>
                            </CAlert>
                        ) }
    {/*
                        <CCard className="mb-2">
                            <CCardHeader>
                                <CIcon
                                    className="mr-2"
                                    icon={cilCalendarCheck}
                                />
                                <strong>
                                    METROPOLITANA 1
                                </strong>
                            </CCardHeader>
                            <CCardBody>
                                <CCard>
                                    <CCardHeader>
                                        <CBadge color="primary">2</CBadge> Lorem ipsum dolor
                                    </CCardHeader>
                                    <CCardBody>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </CCardBody>
                                </CCard>
                            </CCardBody>
                        </CCard>

                        <CCard className="mb-2">
                            <CCardHeader>
                                <CIcon
                                    className="mr-2"
                                    icon={cilCalendarCheck}
                                />
                                <strong>
                                MUCURIPE
                                </strong>
                            </CCardHeader>
                            <CCardBody>
                                <CCard>
                                    <CCardHeader>
                                        <CBadge color="primary">3</CBadge> Lorem ipsum dolor
                                    </CCardHeader>
                                    <CCardBody>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </CCardBody>
                                </CCard>
                            </CCardBody>
                        </CCard>

                        <CCard className="mb-2">
                            <CCardHeader>
                                <CIcon
                                    className="mr-2"
                                    icon={cilCalendarCheck}
                                />
                                <strong>
                                    CENTRO
                                </strong>
                            </CCardHeader>
                            <CCardBody>
                                <CCard>
                                    <CCardHeader>
                                        <CBadge color="primary">4</CBadge> Lorem ipsum dolor
                                    </CCardHeader>
                                    <CCardBody>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </CCardBody>
                                </CCard>
                            </CCardBody>
                        </CCard>

                        <CCard className="mb-2">
                            <CCardHeader>
                                <CIcon
                                    className="mr-2"
                                    icon={cilCalendarCheck}
                                />
                                <strong>
                                    CAUCAIA
                                </strong>
                            </CCardHeader>
                            <CCardBody>
                                <CCard>
                                    <CCardHeader>
                                        <CBadge color="primary">5</CBadge> Lorem ipsum dolor
                                    </CCardHeader>
                                    <CCardBody>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </CCardBody>
                                </CCard>
                            </CCardBody>
                        </CCard> */}
                    </CCol>
                ) }

                { showDashboardCenter && (
                    <CCol  lg={ !showDashboardLeft && !showDashboardRight ? 12 : 6 }>
                        <DashboardMap />
                    </CCol>
                ) }

                { showDashboardRight && (
                    <CCol>
                        Roteiros aqui!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum delectus, sed pariatur voluptatum quia doloremque corrupti exercitationem, officiis officia impedit quae labore cupiditate sit? Hic voluptatem facere tempore quod.
                    </CCol>
                ) }

            </CRow>
        </AuthenticatedBase>
    );
}
