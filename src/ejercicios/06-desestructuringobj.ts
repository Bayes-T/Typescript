//Desestructuring objetos typescript

interface Reproductor {
    volumen:number,
    segundo: number,
    cancion: string,
    detalles: Detalle
}

interface Detalle {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 10,
    segundo: 20,
    cancion: "Let it be",
    detalles: {
        autor: "The Beatles",
        anio: 1970
    }
}

//Ahora quiero desestructurarlo

const autor = "fulano"

//autor detalle va a ser el autor dentro de mi objeto, la puedo renombrar de esa manera si no quiero que choque con otra con el mismo nombre
const {volumen, segundo, cancion, detalles: {autor: autorDetalle}} = reproductor

//También puedo
//const {detalles} = reproductor
//const {autor} = detalles



console.log("El volumen actual es", volumen)
console.log("El segundo actual es",  segundo)
console.log("la cancion actual es", cancion)
console.log("El autor es", autor)


const starWars: string[] = ["Yoda", "Luke", "Anakin"]

const [Yoda, Luke, Anakin] = starWars

console.log(Yoda, Luke, Anakin)