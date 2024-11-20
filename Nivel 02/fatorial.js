function fatorial(n) {
    if (n < 0) return 'Número inválido';
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
console.log(fatorial(-1)); // Número inválido