"use strict";

mapboxgl.accessToken = mapboxTokenExercise;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-96.734488,32.94886],
    zoom: 10
});

var favoriteRestaurant = {
    address: "221 W Polk St #200, Richardson, TX 75081",

    name: "<h6>Kirin Court</h6>"


};

geocode(favoriteRestaurant.address, mapboxTokenExercise).then(function (results) {
    console.log("results coordinates: " + results);

    var popup = new mapboxgl.Popup()
        .setHTML(favoriteRestaurant.name)
        .addTo(map);


    var markerForRestaurant = {
        color: "pink",
        draggable: true
    };

    var marker = new mapboxgl.Marker(markerForRestaurant)
        .setLngLat(results)
        .setPopup(popup)
        .addTo(map);

});



var restaurantsArray = [
    {
        address: "221 W Polk St #200, Richardson, TX 75081",
        name: "<h5>Kirin Court</h5>"


    },
    {
        address: "6617 Hillcrest Ave, Dallas, TX 75205",
        name: "<h5>Bubba's Cooks Country</h5>"


    },
    {
        address: "2817 Maple Ave, Dallas, TX 75201",
        name: "<h5>Uchi</h5>"

    }];


restaurantsArray.forEach(function (restaurant) {
    console.log(restaurant);

    geocode(restaurant.address, mapboxTokenExercise).then(function (results) {
        var popup = new mapboxgl.Popup()
            .setHTML(restaurant.name);

        var markerForRestaurant = {
            color: "pink",
            draggable: true
        };

        var marker = new mapboxgl.Marker(markerForRestaurant)
            .setLngLat(results)
            .setPopup(popup)
            .addTo(map)
    });


});
