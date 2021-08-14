
//Se utiliza la librería leaflet para acceder a las propriedades de todo este documento.

//creacion objeto de tipo mapa
var mymap = L.map("mapid").setView([29.375893, 32.475586], 7);
//Se establecen los layouts del mapa
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9zYW5jaGV6dmEiLCJhIjoiY2tzYjRsZnl6MDM5NTJubGNsNzJ3YnZrdiJ9.IKGm8k-mVeAA33ihGx7R8A",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoiam9zYW5jaGV6dmEiLCJhIjoiY2tzYjRsZnl6MDM5NTJubGNsNzJ3YnZrdiJ9.IKGm8k-mVeAA33ihGx7R8A",
  }
).addTo(mymap);

//Muestra un popup con las coordenadas en el punto
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Hiciste click en las coordenas " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on("click", onMapClick);

//Creación de polígono del lago amargo y su popup
var lakePolygon = L.polygon([
  [30.364894, 32.238071],
  [30.142453, 32.546524],
  [30.209548, 32.59238],
  [30.433002, 32.382953],
]).addTo(mymap);

var photoBitterLake =
  '<img src="imagenes/bitterlake.jpg" height="200px" width="200px"/>';
lakePolygon.bindPopup(
  "<center>Vacaciones en el lago Amargo </center>" + "</br>" + photoBitterLake
);

//Creación de recorrido del canal y su popup
var latlngs = [
  [31.251556, 32.331275],
  [31.099219, 32.307398],
  [30.804562, 32.318288],
  [30.724867, 32.342944],
  [30.585283, 32.326615],
  [30.413192, 32.361154],
  [30.296428, 32.410575],
  [30.252757, 32.534544],
  [30.172291, 32.569669],
  [30.061419, 32.571518],
  [29.973844, 32.586916],
  [29.943978, 32.577794],
  [29.92719, 32.555366],
];
var canalPolyline = L.polyline(latlngs, { color: "green" }).addTo(mymap);
//Creación del circulo de la ciudad de Suez y su popup
var photoCanal =
  '<img src="imagenes/canaltraffic.jpg" height="200px" width="200px"/>';
canalPolyline.bindPopup(
  "<center>Canal de Suez</center>" + "</br>" + photoCanal
);

var suezCity = L.circle([29.971228, 32.529152], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 6000,
}).addTo(mymap);
var photoSuez =
  '<img src="imagenes/minisuez.jpg" height="200px" width="200px"/>';
suezCity.bindPopup("<center>Ciudad de Suez</center>" + "</br>" + photoSuez);

//Creación del circulo de la ciudad de El Cairo y su popup
var photoCanal =
  '<img src="imagenes/canaltraffic.jpg" height="200px" width="200px"/>';
canalPolyline.bindPopup(
  "<center>Canal de Suez</center>" + "</br>" + photoCanal
);

var elCairoCity = L.circle([30.035811, 31.234131], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 30000,
}).addTo(mymap);
var photoElCairo =
  '<img src="imagenes/elcairo.jpg" height="200px" width="200px"/>';
elCairoCity.bindPopup("<center>El Cairo </center>" + "</br>" + photoElCairo);

//Creación de polígono del sinai y su popup
var sinaiPolygon = L.polygon([
  [29.463514, 34.832153],
  [27.76133, 34.178467],
  [29.773914, 32.67334],
]).addTo(mymap);

var photoSinai = '<img src="imagenes/sinai.png" height="200px" width="200px"/>';
sinaiPolygon.bindPopup(
  "<center>Peninsula del Sinai</center>" + "</br>" + photoSinai
);

//Creación de circulo de Port Said y su popup
var portSaidcircle = L.circle([31.249057, 32.29929], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 10000,
}).addTo(mymap);
var photoPortSaid =
  '<img src="imagenes/portsaid.jpg" height="200px" width="200px"/>';
portSaidcircle.bindPopup(
  "<center>Port Said </center>" + "</br>" + photoPortSaid
);

//Creación de circulo de Al Ismailiya y su popup
var ismailiyaCircle = L.circle([30.600662, 32.280064], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 10000,
}).addTo(mymap);
var photoIsmailiya =
  '<img src="imagenes/ismiliya.jpg" height="200px" width="200px"/>';
ismailiyaCircle.bindPopup(
  "<center>Al Ismailiya </center>" + "</br>" + photoIsmailiya
);

function changeMapStyle(idReceived) {
  let opciones = [
    "mapbox/streets-v11",
    "mapbox/outdoors-v11",
    "mapbox/light-v10",
    "mapbox/dark-v10",
    "mapbox/satellite-v9",
    "mapbox/satellite-streets-v11",
    "mapbox/navigation-day-v1",
    "mapbox/navigation-night-v1"
  ];
  let idOption = opciones[idReceived];

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9zYW5jaGV6dmEiLCJhIjoiY2tzYjRsZnl6MDM5NTJubGNsNzJ3YnZrdiJ9.IKGm8k-mVeAA33ihGx7R8A",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: idOption,
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1Ijoiam9zYW5jaGV6dmEiLCJhIjoiY2tzYjRsZnl6MDM5NTJubGNsNzJ3YnZrdiJ9.IKGm8k-mVeAA33ihGx7R8A",
    }
  ).addTo(mymap);
}
