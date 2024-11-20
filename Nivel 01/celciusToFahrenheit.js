function converterParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(converterParaFahrenheit(0));  // Saída: 32
console.log(converterParaFahrenheit(25)); // Saída: 77

// OU

function converterCelsius() {
    const celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    const fahrenheit = (celsius * 9 / 5) + 32;
    alert(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}`);
}

converterCelsius();
