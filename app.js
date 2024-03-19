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

var greenIcon = L.icon({
   iconUrl: 'img/casa1.png',
   //shadowUrl: 'casa2.png',
   iconSize:     [25, 25], // size of the icon
   iconAnchor:   [30, 25], // point of the icon which will correspond to marker's location

});



for (let i= 0; i < l; i++){
     //popups
     var pop = L.popup({
        closeOnClick: true,
        offset: L.point(400, 10)
     }).setContent('Some text');


     


    //markes
    var marker = L.marker(coords[i], {icon: greenIcon}).addTo(map).on('click',  function() {
      markerOnClick(i); // Passa o índice do marcador clicado para a função
  });
 
     casas[i].addEventListener("click", ()=>{
        map.flyTo(coords[i], 19);
   
     })

}


var modalActive = null;

function markerOnClick(index) {
   var modalId = 'modal' + (index + 1); // Gera o ID do modal com base no índice
   if (modalActive == null){
      modalActive = modalId;
      openModal(modalId);
   }
   else{
      closeModal(modalActive);
      modalActive = modalId;
      openModal(modalId);
   
   }
   
}

window.openModal = function(modalId) {
   document.getElementById(modalId).style.display = 'block';
   document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
}


window.closeModal = function(modalId) {
   document.getElementById(modalId).style.display = 'none';
   document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
}



  // Adicione um evento de clique ao marcador para abrir o modal
