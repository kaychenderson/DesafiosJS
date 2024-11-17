function media2(a, b, c) {
    return (a + b + c)/3;
}

console.log(media2(92, 90, 80));

// OU

function media() {
    const num1 = parseFloat(prompt("Digite a primeiro nota:"));
    const num2 = parseFloat(prompt("Digite a segundo nota:"));
    const num3 = parseFloat(prompt("Digite a terceira nota:"));
    alert(`A media é: ${num1 + num2}`);
}

media();