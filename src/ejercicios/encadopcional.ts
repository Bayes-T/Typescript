//Encadenamiento opcional 

interface Pasajero{
    nombre: string,
    hijos?: string[]
}

//Creo dos pasajeros constantes
//Puede haber sido una clase, pero trabajamos con interfaces en este caso

const pasajero1:Pasajero = {
    nombre: "Nicolás"
}

const pasajero2:Pasajero = {
    nombre: "Nicolás",
    hijos: ["a", "b"]
}

function imprimeHijos( pasajero:Pasajero): void{
    //es más largo poner if tiene hijos, cuantoshijos va a ser 0, pero es lo mismo
    const cuantosHijos = pasajero.hijos?.length || 0
    console.log(cuantosHijos)
}

imprimeHijos(pasajero1)