function maiorNumero(numeros) {
    return Math.max(...numeros);
}

console.log(maiorNumero([10, 5, 20, 8])); // Saída: 20

// OU

function maiorNumero() {
    const numeros = prompt("Digite uma lista de números separados por vírgula:");
    const arrayNumeros = numeros.split(',').map(Number);
    const maior = Math.max(...arrayNumeros);
    alert(`O maior número é: ${maior}`);
}

maiorNumeroInterativo();