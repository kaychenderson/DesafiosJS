function fibonacciMemo(n, memo = {}) {
    // Verifica se o valor já foi calculado e armazenado no memo
    if (n in memo) return memo[n];
    // Casos base: Fibonacci de 0 é 0, e de 1 é 1
    if (n <= 1) return n;
    // Calcular e armazenar no memo para evitar cálculos duplicados
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Testar a função com memorização
console.log("Com Memorização: ", fibonacciMemo(40));

// Fibonacci Recursivo sem Memorização
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Testar a função sem memorização
console.log("Sem Memorização: ", fibonacci(40));

// Medindo o tempo de execução para comparação
console.time("Fibonacci com Memorização");
console.log(fibonacciMemo(40));
console.timeEnd("Fibonacci com Memorização");

console.time("Fibonacci sem Memorização");
console.log(fibonacci(40));
console.timeEnd("Fibonacci sem Memorização");