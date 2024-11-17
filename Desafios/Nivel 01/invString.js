function reverterString(str) {
    return str.split('').reverse().join('');
}

console.log(reverterString("JavaScript")); // Saída: "tpircSavaJ"

// OU

function reverterString() {
    const texto = prompt("Digite uma palavra ou frase:");
    const textoRevertido = texto.split('').reverse().join('');
    alert(`O texto invertido é: ${textoRevertido}`);
}

reverterString();