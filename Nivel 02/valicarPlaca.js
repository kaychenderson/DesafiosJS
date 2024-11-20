function validarPlaca(placa) {
    const regexAntigo = /^[A-Z]{3}-\d{4}$/; // Exemplo: ABC-1234
    const regexMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/; // Exemplo: ABC1D23

    if (regexAntigo.test(placa)) {
        return "Placa válida (Padrão Antigo)";
    } else if (regexMercosul.test(placa)) {
        return "Placa válida (Padrão Mercosul)";
    } else {
        return "Placa inválida";
    }
}

console.log(validarPlaca("ABC-1234")); // Placa válida (Padrão Antigo)
console.log(validarPlaca("ABC1D23")); // Placa válida (Padrão Mercosul)
console.log(validarPlaca("AB12C34")); // Placa inválida