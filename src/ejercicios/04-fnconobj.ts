//Funciones con objetos como argumentos

//Sólo se asegura qué contiene el objeto y qué retorna
interface PersonajeLOR {
    nombre:string,
    pv:number

    mostrarPv: () => void

}

//El objeto personaje tiene la interface PersonajeLOR, por lo tanto debe tener sus características obligadamente.


function curar(personaje:PersonajeLOR, curarhp:number):void {

    personaje.pv += curarhp
    console.log(personaje)
}

//Al crear un nuevo objeto tipo personaje, debo especificar la función en el interface también

const nuevoPersonaje : PersonajeLOR = {
    nombre: "Nicolás",
    pv: 50,

    mostrarPv(){
        console.log(this.pv)
    } 
}

curar( nuevoPersonaje, 20)
