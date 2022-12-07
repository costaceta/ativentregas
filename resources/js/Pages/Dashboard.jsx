import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

import { Head } from '@inertiajs/inertia-react';

import { cilCalendarCheck } from "@coreui/icons";
import CIcon from '@coreui/icons-react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CBadge
} from '@coreui/react';

import AuthenticatedBase from '@/Layouts/AuthenticatedBaseLayout';

// TODO: Add token to environment variables
mapboxgl.accessToken = 'pk.eyJ1IjoicmNvc3Rhd2ViIiwiYSI6ImNsYTdha2pkYjExa3Azdm44NTd2bngycnYifQ.Jtaq7_aB-ZoYgJfgB8GCqw';

export default function Dashboard(props) {
    const { activities } = props;

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-38.5187);
    const [lat, setLat] = useState(-3.7262);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });
    });

    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize
    //     map.current.on("move", () => {
    //         setLng(map.current.getCenter().lng.toFixed(4));
    //         setLat(map.current.getCenter().lat.toFixed(4));
    //         setZoom(map.current.getZoom().toFixed(2));
    //     });
    // });

    return (
        <AuthenticatedBase
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            { console.log('Activities', props.activities) }

            <CRow className="align-items-start">
                <CCol  lg={3}>
                    {/* TODO: Separar listagem de atividades em um componente! */}
                    {/* <CCard className="mb-2">
                        <CCardHeader>
                            <CIcon
                                className="mr-2"
                                icon={cilCalendarCheck}
                            />
                            <strong>
                                FORA DE ÁREA
                            </strong>
                        </CCardHeader>
                        <CCardBody>
                            <CCard>
                                <CCardHeader>
                                    <CBadge color="primary">1</CBadge> Lorem ipsum dolor
                                </CCardHeader>
                                <CCardBody>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </CCardBody>
                            </CCard>
                        </CCardBody>
                    </CCard> */}

                    <CCard className="mb-2">
                        <CCardHeader>
                            <CIcon
                                className="mr-2"
                                icon={cilCalendarCheck}
                            />
                            <strong>
                               ATIVIDADES SEM ENDEREÇO
                            </strong>
                        </CCardHeader>
                        <CCardBody>
                            { activities && activities.map( activitity => (
                                <CCard className="mb-3">
                                    <CCardHeader>
                                        {/* <CBadge color="primary">1</CBadge>  */}
                                        Lorem ipsum dolor
                                    </CCardHeader>
                                    {/* <CCardBody>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </CCardBody> */}
                                </CCard>
                            ))}
                        </CCardBody>
                    </CCard>
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
                <CCol  lg={6}>
                    {/* TODO: Separar Mapa em um componente! */}
                    <div className="map-wrapper">
                        {/* <div className="sidebarStyle">
                            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                        </div> */}
                        <div
                            ref={mapContainer}
                            className="map-container"
                        />
                    </div>
                </CCol>
                <CCol  lg={3}>
                    Roteiros aqui!
                </CCol>
            </CRow>
        </AuthenticatedBase>
    );
}
