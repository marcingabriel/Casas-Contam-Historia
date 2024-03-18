var map = L.map('mapid').setView([-19.5814, -42.6474], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

coords = [[-19.58537, -42.64941],[-19.58507, -42.64916]];
rent= ['teste1', 'teste2'];

let l = coords.length;

var casa1 = document.querySelector('#casa1');
var casa2 = document.querySelector('#casa2');

casas = [casa1, casa2];


for (let i= 0; i < l; i++){
     //popups
     var pop = L.popup({
        closeOnClick: true
     }).setContent('Some text');


    //markes
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);

     casas[i].addEventListener("click", ()=>{
        map.flyTo(coords[i], 19);
     })
}