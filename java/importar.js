// import { PI } from "./exportar.js";

// console.log(PI);

import { esPrimo,llenado } from "./exportar.js";

let numero = parseInt(prompt("Ingrese numero a evaluar"))

let respuesta = esPrimo(numero);
let respuetaLlenado = llenado(numero);

alert(respuesta)
alert(respuetaLlenado)

