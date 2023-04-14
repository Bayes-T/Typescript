/*
    ===== Código de TypeScript =====
*/

//Funciones

//El tercer number es opcional, es qué quiero que retorne
function sumar(a:number, b:number):number{
    return (a+b)
}

console.log(sumar(20, 20))

const sumarFlecha = (a:number,b:number):number => {
    return a + b
}

console.log(sumarFlecha(10,10))

//Importante con funciones, así no use la el argumento opcional, si no tengo un valor por default en base, typescript se va a quejar
//Es buena práctica poner primero los obligatorios y después los opcionales.
//Otra solución es multiplicar(1,0(no lo uso), 5), pero es más largo

function multiplicar(numero:number, otroNumero?:number, base:number = 2):number{
    return numero*base
}

const resultado = multiplicar(1,50)

console.log(resultado)