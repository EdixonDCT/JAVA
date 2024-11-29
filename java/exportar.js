// export const PI = 3.1416;

export const esPrimo = (a) => {
    let primo = true;
    for (let i = 2; i < a / 2; i++)
    {
        if (a % i == 0) primo = false;
    }
    return primo;
}
export const llenado = (a) => a;