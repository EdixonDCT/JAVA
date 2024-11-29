let palabra = "124 Y tú que habeis sacrificado a tus hermanoes tendras la culpa de todo lo que acontecera 1. CulPa 2.culPa 123"
//let regex = /culpa/; //palabra especifica
// let regex = /CuLpA/i; //la i ignora la consulta sea estricta osea que concuerde
// let regex = "culpa";
// let regex = /culpa/ig; //toma en cuenta todos ejemplo si hay varias "Culpas"
// let regex = /[0-9]/i;
palabra = "2005 vaca";
let regex = /^([0-9]{4,6}).+([a-z]{4,6})$/g // A-Z Mayuscula a-z minusculas \D es para toda las letras y \d encuentra todos los numeros y 0-9 numeros 
//{despues del numero sirve para acomodar cuanto se repite} ^ Si inicia $ si termina y ambas solo funcionara cuando exissta una sola palabra
//la + se usa cuando este el otro en () pq se acomode bien
// y el .+ es para que pueda haber espacio
console.log(regex.test(palabra));
// console.log(regex.exec(palabra));
console.log(palabra.match(regex));

// const buscar = (a,b) =>{
//     if (a.includes(b)) return true; 
//     else return false;
// }
// console.log(buscar(palabra,regex));
