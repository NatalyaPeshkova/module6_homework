function isPrime(x) {
    if (!Number.isInteger(x) || x < 2 || x > 1000 || x !== 0) return "данные неверны"; 

    let k = Math.sqrt(x);
    for (let i = 2; i <= k; i++)
        if (x % i === 0) return "это не простое число";

    return "это простое число";
}

console.log(isPrime(+prompt("Введите любое число не больше 1000")));