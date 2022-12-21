const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 12;


document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(); // muestra los automoviles al cargar

    // llena las opciones de años
    llenarSelectYear();
})

function mostrarAutos() {
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
