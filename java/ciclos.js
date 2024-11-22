// let n = 0;
// let contador = 0;
// while (contador <= n) {
//     console.log(contador);
//     contador++;
// // }
// do{
//     console.log("?");
// }while(false){}
// for (let i = 1; i <= 20; i++) 
//     {
//         console.log(i * 2);
//     }
let primos = 0;
let i = 1;
while(primos < 10)
{    
    let cont=0
    for(let x = 1; x <= i; x++)
    {
        ix = i % x
        if(ix === 0) cont++;
    }
    if(cont === 2) 
    {
        primos++;
        console.log(`${primos}.${i}`);    
    }
    i++;
}