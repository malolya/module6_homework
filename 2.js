function primeNumber(numb) {
    if (!Number.isInteger(numb) || numb < 2 || numb > 1000) return "неверные данные";

    let q = Math.sqrt(numb);
    for (let i = 2; i <= q; i++)
        if (numb % i === 0) return "не простое число";

    return "простое число";
}

console.log(primeNumber(1001));
console.log(primeNumber(9));