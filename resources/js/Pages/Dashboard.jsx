import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

import "mapbox-gl/dist/mapbox-gl.css";

import { Head, Link } from '@inertiajs/inertia-react';

import { cilCalendarCheck } from "@coreui/icons";
import CIcon from '@coreui/icons-react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CBadge,
    CAlert,
    CAlertLink
} from '@coreui/react';

import AuthenticatedBase from '@/Layouts/AuthenticatedBaseLayout';

// TODO: Add token to environment variables
mapboxgl.accessToken = 'pk.eyJ1IjoicmNvc3Rhd2ViIiwiYSI6ImNsYTdha2pkYjExa3Azdm44NTd2bngycnYifQ.Jtaq7_aB-ZoYgJfgB8GCqw';

export default function Dashboard(props) {
    const { activities } = props;

    const mapContainer = useRef(null);

    const [lng, setLng] = useState(-38.5187);
    const [lat, setLat] = useState(-3.7262);
    const [zoom, setZoom] = useState(12);

    const areas = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': "Feature",
                'geometry': {
                    'type': "Polygon",
                    'coordinates': [
                        [
                            [
                                -38.522094521525474,
                                -3.7570221591734736
                            ],
                            [
                                -38.51687997640599,
                                -3.71109583702669
                            ],
                            [
                                -38.62049072072628,
                                -3.685982402880853
                            ],
                            [
                                -38.62389151102167,
                                -3.758153318991873
                            ],
                            [
                                -38.522094521525474,
                                -3.7570221591734736
                            ]
                        ]
                    ]
                },
            },
            {
                'type': "Feature",
                'geometry': {
                    'type': "Polygon",
                    'coordinates': [
                        [
                            [
                                -38.621041606791294,
                                -3.685177681824854
                            ],
                            [
                                -38.712414789004015,
                                -3.6378474613396037
                            ],
                            [
                                -38.72720854231454,
                                -3.7585562443315723
                            ],
                            [
                                -38.62495760031476,
                                -3.757687894834504
                            ],
                            [
                                -38.621041606791294,
                                -3.685177681824854
                            ]
                        ]
                    ]
                },
            },
        ],
    }

    useEffect(() => {
        if(!mapContainer.current) return;
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });

        map.on("load", () => {
            map.addSource("map-areas", {
                type: "geojson",
                data: areas,
            });

            map.addLayer({
                id: "map-areas-outline",
                type: "line",
                source: "map-areas",
                layout: {},
                paint: {
                    "line-color": "#000",
                    "line-width": 3,
                },
            });
        });
    });

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
                            <div class="overflow-auto" style={{ maxHeight: '300px' }}>
                                { activities && activities.map( activitity => (
                                    <CCard className="mb-3">
                                        <CCardHeader>
                                            {/* <CBadge color="primary">1</CBadge>  */}

                                            <strong>#ID { activitity.id } </strong>
                                            Lorem ipsum dolor
                                        </CCardHeader>
                                        {/* <CCardBody>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        </CCardBody> */}
                                    </CCard>
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
                <CCol  lg={6}>
                    {/* TODO: Separar Mapa em um componente! */}
                    <div className="map-wrapper">
                        {/* <div className="sidebarStyle">
                            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                        </div> */}
                        <div
                            ref={mapContainer}
                            style={{ minHeight: 700 }}
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
