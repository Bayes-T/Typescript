//Desestructuring argumentos

export interface Producto {
    desc: string,
    price: number
}

const telefono:Producto = {
    desc: "Laptop MAC",
    price: 100
}

const tableta:Producto = {
    desc: "tableta",
    price: 100
}

 function calcularISV(productos: Producto[]){

    let total = 0

    productos.forEach( (p,i) => {
        total+= p.price * 0.15
    })
    
    console.log(total)
    return total
    
}


export function calcularISV2(productos: Producto[]):[number, number]{

    let total = 0

    productos.forEach( ({price}) => {
        total+= price * 0.15
    })
    
    console.log([total, total * 0.15])
    return [total, total * 0.15]
    
}


const tienda = [telefono, tableta]


const ISV = calcularISV2(tienda)

//También puedo desesctructurar los resultados

const [totaldes, total15] = calcularISV2(tienda)
//Acá cree las 2 variables de lo que me retornó la función