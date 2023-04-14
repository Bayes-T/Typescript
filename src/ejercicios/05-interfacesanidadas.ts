//Creando un objeto con objetos dentro en typescript con interfaces
interface Heroe {
    nombre:string,
    edad:number,
    direccion: Direccion,
    
    mostrarSuperHeroe: () => string
}

interface Direccion {
    calle: string,
    ciudad: string,
    pais: string,
    liga: Liga

}

interface Liga {
    bando: string,
    poder:number
}

const superHeroe:Heroe = {
    nombre: "Superman",
    edad: 30,
    direccion: {
        calle: "Main street",
        ciudad: "NY",
        pais: "USA",
        liga: {
            bando: "Buenos",
            poder: 5
        }
    },

    mostrarSuperHeroe() {
        return (`${this.nombre} tiene ${this.edad} y vive en ${this.direccion.ciudad}, ${this.direccion.calle}, ${this.direccion.pais}, liga ${this.direccion.liga.bando}`)
    }
}

const resultado2 = superHeroe.mostrarSuperHeroe()

console.log(resultado2)