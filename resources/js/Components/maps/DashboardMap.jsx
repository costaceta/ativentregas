import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { map } from 'lodash';

// TODO: Add token to environment variables
mapboxgl.accessToken = 'pk.eyJ1IjoicmNvc3Rhd2ViIiwiYSI6ImNsYTdha2pkYjExa3Azdm44NTd2bngycnYifQ.Jtaq7_aB-ZoYgJfgB8GCqw';

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
        {
            "id": "ef4b5fc7649fa95f217aada4e4e3c133",
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -38.51608631078821,
                            -3.71023415277665
                        ],
                        [
                            -38.45785658451089,
                            -3.696770075409191
                        ],
                        [
                            -38.42448100969361,
                            -3.7825114635559203
                        ],
                        [
                            -38.52389761553246,
                            -3.7570025068172583
                        ],
                        [
                            -38.51608631078821,
                            -3.71023415277665
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        },
        {
            "id": "a77ba90adb147551e4d2a90ffa5f69f1",
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -38.62331876224448,
                            -3.7591142458571056
                        ],
                        [
                            -38.62331876224448,
                            -3.8452017636407874
                        ],
                        [
                            -38.52246744784924,
                            -3.848109975016058
                        ],
                        [
                            -38.5242163145727,
                            -3.7567874373544896
                        ],
                        [
                            -38.62331876224448,
                            -3.7591142458571056
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        },
        {
            "id": "95570bf52c9e6aea1fd773b38ff8de2a",
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -38.52181435973904,
                            -3.755373033029983
                        ],
                        [
                            -38.42009134410711,
                            -3.7802512548065863
                        ],
                        [
                            -38.41809677517236,
                            -3.8588617223365844
                        ],
                        [
                            -38.522811644205945,
                            -3.8469213567413334
                        ],
                        [
                            -38.52181435973904,
                            -3.755373033029983
                        ]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ],
}

function DashboardMap() {

    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);

    // const [lng, setLng] = useState(-38.5187);
    // const [lat, setLat] = useState(-3.7262);
    // const [zoom, setZoom] = useState(12);

    useEffect(() => {
        const initializeMap = ({ mapContainer, setMap }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [-38.5187, -3.7262],
                zoom: 10,
            });

            map.on("load", () => {
                setMap(map);
                map.resize();
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
        }

        if (!map) initializeMap({ mapContainer, setMap });
    }, [map, setMap]);


    return (
        <div className="map-wrapper mb-3">
            <div
                ref={ el => mapContainer.current = el }
                style={{ minHeight: 700 }}
            />
        </div>
     );
}

export default DashboardMap;