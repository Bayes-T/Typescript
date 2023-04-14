//Clases en typescript

class PersonaNormal {
    constructor(
        public nombre:string,
        public edad:number){}
}

class Villano extends PersonaNormal{
    //Crea una propiedad en la clase que se llame alter ego y el primer argumento recibido al crear la instancia va a ser su valor.
    constructor (public alterEgo:string)
    {
        //acá estoy directamente inicializando directamente, le pongo la edad del super y de aquí localmente el alterego
        super("Wario", 15)
    }
}
//Revisar, me toma como nombre wario (primer argumento del super), luego la edad (segundo argumento del super) y como alter ego mario.
//Debe ser que primero toma las variables del super y después de la instacia que estoy creando
const Wario = new Villano("Mario")

console.log(Wario)