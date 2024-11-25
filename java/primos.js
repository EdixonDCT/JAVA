// // let numero = parseFloat(prompt("Ingrese el numero a evaluar:"));

// // const esPrimo = (a) => {
// //     let primo = true
// //     for (let i = 2; i <= a / 2; i++)
// //     {
// //         if (a % i === 0) primo = false;
// //     }
// //     return primo
// // }

// // let res = esPrimo(numero);
// // let primo = res ? "si" : "no";

// // console.log(`El numero ${a} es primo? ${primo}`);

// // for (let i = 0;i < 10; i++){
// //     if (i === 4) continue;    
// //     console.log(`item ${i}`);}

// const numeros = [1,2,3,4];

// // let a = numeros[0];
// // let b = numeros[1];
// // let c = numeros[2];
// // let d = numeros[3];
// numeros[10] = "Manuel"
// numeros[1] = "Edixon"

// let [primero,segundo,tercero,cuarto,quinto=25] = numeros

// console.log(primero,segundo,tercero,cuarto,quinto);    

// console.log(numeros);

const persona = {
    nombre : "Edixon",
    apellido : "Castillo",
    edad : 19,
    username : "Makenbo_2"
}
// console.log(persona);

let {nombre:a,apellido:b,edad:c,username="EdixonCastle"} = persona;

console.log(a,b,c,username);
