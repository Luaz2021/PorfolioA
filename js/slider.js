//---------------------SLIDER---------------------------
window.addEventListener('load', function(){
  let opciones = {
    slidesToShow: 1,
    slidesToScroll:1,
    dots: ".puntos",
    rewind: true,
    draggable: true,
    arrows: {
       prev: ".prev",
       next: ".next"
    }
 };
 slider = new Glider(document.querySelector("#lista"),opciones);
});
window.addEventListener('load', function(){
   let opciones = {
     slidesToShow: 1,
     slidesToScroll:1,
     dots: ".puntos-folio",
     rewind: true,
     draggable: true,
     arrows: {
        prev: ".prev-folio",
        next: ".next-folio"
     }
  };
  slider = new Glider(document.querySelector("#lista-folio"),opciones);
 });