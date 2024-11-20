function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
        default:
            return 'Operação inválida';
    }
}

console.log(calculadora(10, 5, '+')); // 15
console.log(calculadora(10, 5, '/')); // 2
console.log(calculadora(10, 2, '/')); // 5