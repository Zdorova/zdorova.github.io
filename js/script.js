// Creating map options
var mapOptions = {
    center: [44.948186, 34.100409],
    zoom: 12
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{maxZoom: 20});

// Adding layer to the map
map.addLayer(layer);

// Creating a Marker
var markerOptions = {
    title: "Click",
    clickable: true,
    draggable: false
 }

// Creating a marker
var byrger = L.marker([44.944453, 34.098676], markerOptions);
var home = L.marker([44.892568, 34.083149], markerOptions);
var smotrovaya = L.marker([44.940329, 34.119976], markerOptions);
var coffy = L.marker([44.951101, 34.099574], markerOptions);

var horest = L.polygon([    
    [44.904295, 34.082708],
    [44.918484, 34.097367],
    [44.918484, 34.097367],
    [44.915097, 34.106826],
    [44.907668, 34.109021],
    [44.907668, 34.109021],
    [44.902392, 34.124077],
    [44.897190, 34.113726],
    [44.907519, 34.101807],
    [44.903355, 34.087748]
]);

// Adding marker to the map
byrger.addTo(map);
home.addTo(map);
smotrovaya.addTo(map);
coffy.addTo(map);
horest.addTo(map);

// Adding pop-up to the marker
byrger.bindPopup('Самый вкусный бургер');
home.bindPopup('Home, милый home');
smotrovaya.bindPopup('Красивый вид на город');
coffy.bindPopup('Латте за 30');
horest.bindPopup('Лесок-лесочек');