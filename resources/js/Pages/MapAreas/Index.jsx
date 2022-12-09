import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { Link, Head } from "@inertiajs/inertia-react";

import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";

import {
    CButton,
    CCard,
    CCardFooter,
    CCardBody,
    CCardHeader,
    CCardText,
    CCardTitle,
    CRow,
    CCol,
} from "@coreui/react";

// TODO: Add token to environment variables
mapboxgl.accessToken =
    "pk.eyJ1IjoicmNvc3Rhd2ViIiwiYSI6ImNsYTdha2pkYjExa3Azdm44NTd2bngycnYifQ.Jtaq7_aB-ZoYgJfgB8GCqw";

export default function Index(props) {
    const mapContainer = useRef(null);

    const [lng, setLng] = useState(-38.5187);
    const [lat, setLat] = useState(-3.7262);
    const [zoom, setZoom] = useState(12);
    const [mapAreas, setMapAreas] = useState(['']);

    const [local, setLocal] = useState([
        [
            [
                -38.59939558166275,
                -3.731417028211851
            ],
            [
                -38.56985958511166,
                -3.701943152416078
            ],
            [
                -38.5160889247247,
                -3.712145759295609
            ],
            [
                -38.551304920612125,
                -3.75484427579822
            ],
            [
                -38.569480918489035,
                -3.7631570191955177
            ],
            [
                -38.59939558166275,
                -3.731417028211851
            ]
        ]
    ]);


    const draw = new MapboxDraw({
        displayControlsDefault: false,
        // Select which mapbox-gl-draw control buttons to add to the map.
        controls: {
            polygon: true,
            trash: true
        },
        // Set mapbox-gl-draw to draw by default.
        // The user does not have to click the polygon control button first.
        defaultMode: 'draw_polygon'
    });

    useEffect(() => {
        if(!mapContainer.current) return;
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        map.addControl(draw)

        map.on('draw.create', updateArea);

        map.on("load", () => {
            // Add a data source containing GeoJSON data.
            map.addSource("maine", {
                type: "geojson",
                data: {
                    type: "Feature",
                    geometry: {
                        type: "Polygon",
                        // These coordinates outline Maine.
                        coordinates: local,
                    },
                },
            });

            // Add a new layer to visualize the polygon.
            map.addLayer({
                id: "maine",
                type: "fill",
                source: "maine", // reference the data source
                layout: {},
                paint: {
                    "fill-color": "#0080ff", // blue color fill
                    "fill-opacity": 0.5,
                },
            });
            // Add a black outline around the polygon.
            map.addLayer({
                id: "outline",
                type: "line",
                source: "maine",
                layout: {},
                paint: {
                    "line-color": "#000",
                    "line-width": 3,
                },
            });
        });

        map.on('click', () => {
            // const layerMeta = map.getSource('maine')._data.geometry.coordinates;
            // console.log(layerMeta)

            console.log(map.getStyle().sources)

            // map.removeLayer('maine')
            // map.removeLayer('outline')
            // map.removeSource('maine')
        })

        return () => map.remove();

    }, []);

    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize
    //     map.current.on("move", () => {
    //         console.log('lng', map.current);
    //         setLng(map.current.getCenter().lng.toFixed(4));
    //         setLat(map.current.getCenter().lat.toFixed(4));
    //         setZoom(map.current.getZoom().toFixed(2));
    //     });
    // });

    const updateArea = ({ features }) => {
        console.log("features", features)

        let data = draw.getAll();
        console.log("All", data);
    };

    const clickMap = (data) => {
        console.log("Click Data", data)
        console.log("map", map)
    }

    const onDrawCreate = ({ features }) => {
        let data = draw.getAll();
        const polygonData = data.features[0].geometry.coordinates;
        drawPolygon(polygonData);
    };

    const onDrawUpdate = ({ features }) => {
        let data = draw.getAll();
        map.current.removeLayer('maine').removeSource('maine');
        const polygonData = data.features[0].geometry.coordinates;
        drawPolygon(polygonData);
    };

    const onDrawDelete = ({ features }) => {
        let data = draw.getAll();
        map.current.removeLayer('maine').removeSource('maine');
    };

    const drawPolygon = (points) => {
        map.current.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': points
                    }
                }
            },
            'layout': {},
            'paint': {
                'fill-color': '#088',
                'fill-opacity': 0.3,
            }
        });

        map.current.addLayer({
            id: "maine",
            type: "line",
            source: "maine",
            layout: {},
            paint: {
                "line-color": "#000",
                "line-width": 3,
            },
        });

        map.current.addLayer({
            id: "label",
            type: "symbol",
            source: "maine",
            layout: {
                "text-field": "Label",
            },
            paint: {
                "text-color": "black",
            },
        });
    }

    return (
        <>
            <AuthenticatedBase auth={props.auth} errors={props.errors}>
                <Head title="Áreas do Mapa" />
                <CRow>
                    <h5 className="mb-3">Áreas do Mapa</h5>
                    <CRow>
                        <CCol lg={2}>
                            {mapAreas &&
                                mapAreas.map((mapArea, index) => (
                                    <CCard key={index} className="mb-3">
                                        <CCardHeader>
                                            <strong>
                                                Listagem de áreas do mapa
                                            </strong>
                                        </CCardHeader>
                                        <CCardBody>
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptate ullam quidem, et, voluptas
                                            enim ea cupiditate fuga consequatur
                                            esse quod modi id porro doloremque
                                            qui debitis? Illo natus molestiae
                                            vel.
                                        </CCardBody>
                                    </CCard>
                                ))}
                        </CCol>
                        <CCol style={{ position: "relative" }} lg={10}>
                            <div
                                ref={mapContainer}
                                style={{ minHeight: 700 }}
                            />
                        </CCol>
                    </CRow>
                </CRow>
            </AuthenticatedBase>
        </>
    );
}
