
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 12;

const busqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: ''
}

//eventos

document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos); // muestra los automoviles al cargar

    // llena las opciones de años
    llenarSelectYear();
})

marca.addEventListener("change", e => {
  busqueda.marca = e.target.value;

  filtrarAuto(); //
})

year.addEventListener("change", e => {
  busqueda.year = parseInt(e.target.value);

  filtrarAuto();
})

minimo.addEventListener("change", e => {
  busqueda.minimo = e.target.value;

  filtrarAuto();
})

maximo.addEventListener("change", e => {
  busqueda.maximo = e.target.value;

  filtrarAuto();
})

puertas.addEventListener("change", e => {
  busqueda.puertas = parseInt(e.target.value);

  filtrarAuto();
})

transmision.addEventListener("change", e => {
  busqueda.transmision = e.target.value;

  filtrarAuto();
})

color.addEventListener("change", e => {
  busqueda.color = e.target.value;

  filtrarAuto();
})

//funciones

function mostrarAutos(autos) {

  limpiarHTML();//eliminar html cuando se filtra

  autos.forEach( auto => {
    const {marca, modelo, year, precio, puertas, color, transmision} = auto;

    const autoHTML = document.createElement('p');

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision}
    `;
    // inserta el html
    resultado.appendChild(autoHTML);
  })
}

function llenarSelectYear() {
  for(let i = max; i >= min; i--) {
    const yearHTML = document.createElement('option');

    yearHTML.value = i;
    yearHTML.textContent = i;

    year.appendChild(yearHTML); //agrega las opciones de año al select
  }
}

function limpiarHTML() {
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
  }
}

function filtrarAuto(){
  //const resultado = autos.filter( auto => auto.marca === marca ); forma simple
  const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor ); // forma con funciones de alto nivel

  if(resultado.length){
    mostrarAutos(resultado);
  }else{
    noResultados();
  }
}

function noResultados() {
  limpiarHTML();

  const noResultados = document.createElement("div");
  noResultados.classList.add("alerta", "error");
  noResultados.textContent = "No hay resultados";

  resultado.appendChild(noResultados);
}

function filtrarMarca(auto) {
  const { marca } = busqueda;

  if (marca){
    return auto.marca === marca;
  }else {
    return auto;
  }
}

function filtrarYear(auto) {
  const { year } = busqueda;

  if (year){
    return auto.year === year;
  }else {
    return auto;
  }
}

function filtrarMinimo(auto) {
  const { minimo } = busqueda;

  if (minimo){
    return auto.precio >= minimo;
  }else {
    return auto;
  }
}

function filtrarMaximo(auto) {
  const { maximo } = busqueda;

  if (maximo){
    return auto.precio <= maximo;
  }else {
    return auto;
  }

}

function filtrarPuertas(auto) {
  const { puertas } = busqueda;

  if (puertas){
    return auto.puertas === puertas;
  }else {
    return auto;
  }
}

function filtrarTransmision(auto) {
  const { transmision } = busqueda;

  if (transmision){
    return auto.transmision === transmision;
  }else {
    return auto;
  }
}

function filtrarColor(auto) {
  const { color } = busqueda;

  if (color){
    return auto.color === color;
  }else {
    return auto;
  }
}
