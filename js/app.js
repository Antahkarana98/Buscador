const resultado = document.querySelector('#resultado');

document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(); // muestra los automoviles al cargar
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
