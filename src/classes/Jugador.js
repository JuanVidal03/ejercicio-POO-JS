
export default class Jugador{

    constructor({nombre, equipo, nacionalidad, edad, estatura, nacimiento, foto}){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.estatura = estatura;
        this.nacimiento = nacimiento;
        this.foto = foto
    }

    // mostrar jugadores
    mostrarJugador(){
        try {

            const jugador = {
                nombre: this.nombre,
                equipo: this.equipo,
                nacionalidad: this.nacionalidad,
                edad: this.edad,
                estatura: this.estatura,
                nacimiento: this.nacimiento,
                foto: this.foto
            }
            
            return jugador;
            
            // encaso de errores
        } catch (error) {
            console.log(`Error al traer el jugador: ${error}`);
        }
    }

}