function numeroPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(numeroPrimo(7)); // true
console.log(numeroPrimo(10)); // false