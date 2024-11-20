function ePar(numero) {
    return numero % 2 === 0;
}

console.log(ePar(4)); // Saída: true
console.log(ePar(7)); // Saída: false

// OU

function verificarParOuImpar() {
    const numero = parseInt(prompt("Digite um número:"));
    if (numero % 2 === 0) {
        alert(`O número ${numero} é par.`);
    } else {
        alert(`O número ${numero} é ímpar.`);
    }
}

verificarParOuImpar();