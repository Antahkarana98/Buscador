const resultado = document.querySelector('#resultado');

document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos();
    console.log('hola');
})

function mostrarAutos() {
    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, trasmision} = auto;

        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
        	${marca} ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${trasmision}
        `;
    })
}