//Genéricos

function queTipoSoy<T>(argumento: T){
    return argumento
}

//Así toma como tipo de argumento lo que le estoy pasando
//Un tipo genérico puede ser cualquier tipo de dato o uno que nosotros le especifiquemos

let soyString = queTipoSoy("Hola")
let soyNumber = queTipoSoy(100)
let soyArray = queTipoSoy([1,2,3,4,5])

let soyExplicito = queTipoSoy<Number>(100)

