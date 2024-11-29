// let numero = parseFloat(prompt("Ingrese el numero a evaluar:"));

// const esPrimo = (a) => {
//     let primo = true
//     for (let i = 2; i <= a / 2; i++)
//     {
//         if (a % i === 0) primo = false;
//     }
//     return primo
// }

// let res = esPrimo(numero);
// let primo = res ? "si" : "no";

// console.log(`El numero ${a} es primo? ${primo}`);

// for (let i = 0;i < 10; i++){
//     if (i === 4) continue;    
//     console.log(`item ${i}`);}


const esAmigo = (a,b) => {
    let NumAmigo1= 0;
    let NumAmigo2 = 0;
    for (let i = 1; i <= a / 2; i++)
    {
            if (a % i === 0) NumAmigo1 = NumAmigo1+i;     
    }
    for (let i = 1; i <= b / 2; i++)
    {
            if (b % i === 0) NumAmigo2 = NumAmigo2+i;
    }
    if (NumAmigo1 == b && NumAmigo2 == a) return true
}

let respueta = esAmigo(220,284);
console.log(respueta);

const esPerfecto = (a) => {
    cont = 0;
    for (let i = 1; i <=a / 2; i++)
    {
        if (a % i === 0) cont += i;
    }
    if (a == cont) return true;
    else return false;
}

let perfecto = esPerfecto(16);
console.log(perfecto);

    