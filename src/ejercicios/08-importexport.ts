//Importaciones y exportaciones

import { calcularISV2, Producto } from "./07-desesctruc-argum";


const carrito: Producto[] = [
    {
        desc: "Telefono 1", 
        price: 100
    },
    {
        desc: "Telefono 2", 
        price: 1000
    }
]

const [total2, isv2] = calcularISV2(carrito)

console.log(total2, isv2)