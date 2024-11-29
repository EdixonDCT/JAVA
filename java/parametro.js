// function suma(a,b,...c) {
//     c.push(a,b);
//     sumador = 0;
//     for (const x of c) if(typeof(x) === "number" ) sumador += x;
    
//     return sumador;
// }

// let resultado = suma("dos",9,21,1,5,"cuatro",8,9);
// console.log(resultado);

const arrayA = [1,2,3];
const arrayB = ["a","b","c"];

// const arrayC = arrayA + arrayB;
// const arrayC = arrayA.concat(arrayB)
const arrayC = [...arrayA,...arrayB];

console.log(arrayC);
