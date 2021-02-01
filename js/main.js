//variables
const imagenes = ['img/foto(1).JPG', "img/foto(2).JPG", "img/foto(3).JPG"];
let pagina = 1;
const objetoImg = document.querySelector('#imagen');
const botonAvanzar = document.querySelector('#avanzar');
const botonRetroceder = document.querySelector('#retroceder');
const templateCirculo = document.querySelector('#templete-circulo').content.firstElementChild;
const circulo = document.querySelector('#circulo');

//funciones
function cambiarPagina(nuevaPagina){
    pagina = nuevaPagina;

    render();
}
function avanzarFoto(){

    pagina = pagina + 1;
    if (imagenes.length + 1 <= pagina){
        pagina = 1;
    }
    render();
}
function retrocederFoto(){
    pagina = pagina - 1;
    if (0 === pagina){
        pagina = imagenes.length ;
    }
    render();
}
function render(){
    objetoImg.setAttribute('src', imagenes[pagina - 1]);
    //Circulos
    circulo.textContent = '';
    imagenes.forEach(function (imagen, indice){
         const nuevoCirculo = templateCirculo.cloneNode(true);

         nuevoCirculo.addEventListener('click', function (){
             cambiarPagina(indice + 1 );
         });
         if (pagina === indice + 1) {
             nuevoCirculo.setAttribute('checked', true);
         }
        circulo.appendChild(nuevoCirculo);
    });

}

//eventos

botonAvanzar.addEventListener('click', avanzarFoto);
botonRetroceder.addEventListener('click',retrocederFoto);

//inicio
render();