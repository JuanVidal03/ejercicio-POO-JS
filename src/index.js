// importando clases
import Equipo from "./classes/Equipo.js";
import Jugador from "./classes/Jugador.js";

// lista que contiene los equipos
const equipos = [];

// creando instancias de la clase Equipo
const barcelona = new Equipo({nombre: "Futbol Club Barcelona", presidente: "Joan La Porta", ciudad: "Barcelona, España"});
const realMadrid = new Equipo({nombre: "Real Madrid Club de Futbol", presidente: "Florentino Perez", ciudad: "Madrid, España"});
const americaDeCali = new Equipo({nombre: "America de Cali", presidente: "Tulio Gomez", ciudad: "Santiago de Cali, Colombia"});

// pusheando los equipos al array de equipos
equipos.push(barcelona);
equipos.push(realMadrid);
equipos.push(americaDeCali);

// DOM formulario
const nombre = document.querySelector("#nombre");
const seleccionEquipo = document.querySelector("#equipos");
const edad = document.querySelector("#edad");
const nacionalidad = document.querySelector("#nacionalidad");
const estatura = document.querySelector("#estatura");
const nacimiento = document.querySelector("#nacimiento");
const foto = document.querySelector("#foto");
const submit = document.querySelector("#submit");

// generacion de options del select
const anadirEquipo = () => {
    // recorriendo el array con los equipos
    equipos.forEach(equipo => {
        // creadno elemento html
        let optionHtml = document.createElement("option");
        // editando el elemento
        optionHtml.innerHTML = `
            <option value="${equipo.nombre}">${equipo.nombre}</option>
        `;
        // añadiendo cada option al select
        seleccionEquipo.appendChild(optionHtml);
    });
}
// llamado del procedimiento
anadirEquipo();

// DOM app
const app = document.querySelector("#app");

// variable que se usara para crear la instancia del jugador
let jugador;

// crear jugador
const crearJugador = () => {

    // objeto con la información del formulario
    let jugadorObjeto = {
        nombre: nombre.value,
        equipo: seleccionEquipo.value,
        nacionalidad: nacionalidad.value,
        edad: edad.value,
        estatura: estatura.value,
        nacimiento: nacimiento.value,
        foto: foto.value
    }

    // creando instancia
    jugador = new Jugador(jugadorObjeto);
    
    return jugador;
}

// render jugador
const renderJugador = (jugador) => {

    // metodo de la clase jugador
    const renderJugador = jugador.mostrarJugador();

    // render data en el html
    app.innerHTML = `
        <div class="card-jugador">
            <div class="jugador-img">
                <img src="${renderJugador.foto}" alt="foto de ${renderJugador.nombre}">
            </div>
            <div class="jugador-info">
                <h3>Nombre: ${renderJugador.nombre}</h3>
                <h5>Equipo: ${renderJugador.equipo}</h5>
                <h5>Estatura: ${renderJugador.nacimiento}</h5>
                <h5>Edad: ${renderJugador.edad}</h5>
                <h5>Nacionalidad: ${renderJugador.nacionalidad}</h5>
                <h5>Estatura: ${renderJugador.estatura}</h5>
            </div>
        </div>
    `;
}

// evento que muestra la data en el navegador
submit.addEventListener("click", (e) => {
    // evitar que la página se recargue
    e.preventDefault();
    renderJugador(crearJugador());
})