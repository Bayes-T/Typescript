//arrays, objects and interfaces

let array: string[] = ["Hola", "Buenas"]

let array2: (string | number) [] = [1, "Hola"]

interface Personaje {
    nombre: string,
    hp:number,
    habilidades: string[]
    puebloNatal?: string
}

const personaje:Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: ["saltar", "rodar"]
}

personaje.puebloNatal = "Pueblo Paleta"

console.table(personaje)