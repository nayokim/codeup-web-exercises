"use strict";

mapboxgl.accessToken = mapboxTokenExercise;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.6745829,32.9794749],
    zoom: 18
});

