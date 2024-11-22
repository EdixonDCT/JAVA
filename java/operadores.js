// // //suma
// let a = 25;
// let b = 2;
// // let c = "250"
// let c = 7

// // console.log(a + b);
// // console.log(a + c); //contatena

// // if (typeof a === "number" && typeof b === "number")
// // {
// //     console.log(a + b);
// // }

// // //resta
// // console.log(a - b);
// // //multiplicacion
// // console.log(a * b);
// // //division
// // console.log(b / a);
// // //residuo
// // console.log(b % a);

// let resultado = a + (b + (b - a) * a) / c;
// // 25 + (2 + -23* 25) / 7
// // 25 + (2 + -575) / 7
// // 25 + -573 / 7
// // 25 - 573 / 7
// // 25 - 81.86
// // -56.86

// console.log(resultado);

// //Operadores Logicos

// // (<) menor que
// // (>) mayor que
// // (<) menor igual
// // (>) mayor igual
// // (==) igual
// // (===) valor y tipo de datos, estrictamente igual
// // (!=) diferente o negacion
// // (!==) diferente o negacion y tipo de dato, estrictamente diferente

// let a = 10;
// let b = "10";

// console.log(a < b);
// console.log(a > b);
// console.log(a >= b);
// console.log(a === b);
// console.log(a !== b);


// //Incrementados
// let i = 0;
// console.log(i++); //Es un post incremento osea se incrementa luego de ser declarado tambien se llama incremento unario
// console.log(i);
// console.log(--i); //Es un pre decremento osea se decrementa antes de ser

// let i = 0;
// console.log(i = i + 4);

// 

// let a = 5;
// let b = 7;

// console.log(5 > 7 || false); //debe cumplirse solo una de las 2 condiciones porque es or
// console.log(b > a && true); // debe cumplirse ambas condiciones
// console.log(!false && true); //el ! hace que sea alrevez osea el false se vuelve true y viceversa

// if (!false && true){ console.log("prueba");};
// if (!false && !true) console.log("?"); //se puede sin llaves porque solo es una linea de codigo
// console.log("??");
// if (!false && !true){ console.log("Verdadero")} else{console.log("Falso");
// }

// let respuesta = (true) ? "verdadero" : "false"; //terniario if pero mas corto
// console.log(respuesta);

// if (false) 
// {
//     console.log("Respuesta verdadero");
// }
// else
// {
//     console.log("Respuesta falso");
// }

//Switch

// let dia = 2;
// switch (dia) {
//     case 1:
//         console.log("Lunes");
//         break; //si no lo pone hara el siguiente
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Dia no encontrado");
// } 
