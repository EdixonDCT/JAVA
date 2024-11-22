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

const flecha = (a,b,c) => (a > 20)? a * b : b;

let respuesta = flecha(40,5)

console.log(respuesta);

const flecha2 = a => (a > 20)? a * a : a;

let respuesta2 = flecha2(40)

console.log(respuesta2);
