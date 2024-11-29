// // const jeferson = function saray(nombre) {
// //     console.log(nombre);
// // }
// const jeferson = (nombre) => 
// {
//     console.log(nombre);
// }
// // jeferson("Edixon");
// console.log(jeferson);

// const anonima =(...a) => console.log(a);
// anonima();

// anonima()

// function anonima (...a){
//     console.log(a);
// }


// const saray = {
//     nombre: "Saray",
//     apellido: "Estupiñan",
//     edad: 20
// }

// const kevin = {
//     nombre: "Kevin",
//     apellido: "Paez",
//     edad: 19
// }

// console.log(saray);

class Persona
{
    constructor(nombreA,apellidoA,edadA)
    {
        this.nombre = nombreA;
        this.apellido = apellidoA;
        this.edad = edadA;
    }
    //Metodo
    comer()
    {
        console.log(`${this.nombre} Estan comiendo alas 9:30`);
    }
}

const saray = new Persona("Saray","Estupiñan",20);
console.log(saray);
const kevin = new Persona("Kevin","Paez",19)
console.log(kevin);
saray.comer();
kevin.comer();