let nombre = "Edixon";
let apellido = "Castillo";
console.log(nombre.length);
console.log(nombre[2]);
let nCompleto = nombre + " " + apellido;
console.log(nCompleto.toUpperCase());
console.log(nCompleto.includes("David"))
console.log(nCompleto.split(""));
console.log(nCompleto);
console.clear();

/* Webada esa */
let item1 = "Numeral 1";
let item2 = "Numeral 2";
let item3 = "Numeral 3";
let item4 = "numeral 4";
let item5 = "numeral 5";
let lista = `<ul>
<li>${item1}</li>
<li>${item2}</li>
<li>${item3}</li>
<li>${item4}</li>
<li>${item5}</li>
</ul>`;
console.log(lista);
console.clear();

/* Numeros */
let entrada = prompt("Ingresa un numero");
let uno = 5;
let dos = new Number(2);
let tres = "3.5";
console.log(dos);
let flotante = 7.1542;
console.log(flotante.toFixed(1));
console.log(tres);
console.log(typeof tres == "number");
let nuevo = parseFloat(tres);
if (typeof tres == "number"){
    console.log(tres * uno)
}else{
    console.log("no");
}
console.log(entrada);
console.log(typeof entrada);

console.log(typeof tres === "number");
alert(entrada)
confirm("Nice")

