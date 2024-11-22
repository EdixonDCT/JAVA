// function nombre(parametro = 250){
// console.log(parametro);

// }
// nombre(4);

// console.clear();

// const esPrimo = function(numero){

//     let cont = 0;
//     for (let i = 1; i <= numero;i++) 
//     {
//         if (numero % i === 0)
//         {cont++;}
//     }
//     if (cont > 2)
//         { console.log("El número no es primo");}
//     else if(cont === 2)
//         {console.log("El número es primo");}
//     else
//         {"Es el numero 1"}
// }
// let entrada = prompt("Ingresa un numero");
// esPrimo(entrada);

// const anonima = function(valor)
// {
// console.log(valor);
// }
// let respuesta = anonima(25)
// console.log(respuesta);

// const generadora = function* nombre() 
// {
//  yield 1;
//  yield 2;   
// }
// console.log(generadora.next());

// let parametro = "";
// (function () {
//     alert("Si llamarme")
// })()

// const flecha = (a,b,c) => (a > 20)? a * b : b;

// let respuesta = flecha(40,5)

// console.log(respuesta);

// const flecha2 = a => (a > 20)? a * a : a;

// let respuesta2 = flecha2(40)

// console.log(respuesta2);


//Array(Arreglo)

// const a = [1,"Letras",true,false,[1,"john"],"ultimate"]

// console.log(typeof a); //detectar que es en este caso un objeto
// console.log(a); //imprimir todo
// console.log(a.length); //detectar cantidad
// console.log(a[0]); //acceder al primero
// a.push("Edixon");
// a.pop();
// console.log(a[a.length - 1]); //imprimir el ultimo 
// console.log(a[4][1]);

//Objetos

const persona = {
    nombre: "Edixon",
    apellido: "Castillo",
    edad: 19,
    profesion: "Artista",
    saludar: function()
    {
        return(`Hola soy ${this.nombre} ${this.apellido}`);
        console.log("Esto nunca se ejecutara porque acabo en el return MUERTO");
    }
}
console.log(persona.saludar());

persona.pais = ("Colombia");
persona.metodo = (function nombre(){return(`Hola soy ${this.nombre} del pais ${this.pais}`);});

console.log(persona.metodo());

console.log(persona);

console.log(Object.keys(persona));

console.log(Object.keys(persona).indexOf("pais"));

if (Object.keys(persona).indexOf("genero") === -1)
{
    console.log("No fue definido");
    
}
console.log(Object.keys(persona).includes("pais"));
