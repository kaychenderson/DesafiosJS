function contarCharUnicos(str) {
    // Cria um objeto para armazenar caracteres únicos
    const charContador = {};
    let contUnicos = 0;

    // Itera sobre cada caractere da string
    for (let char of str) {
        // Se o caractere não estiver no objeto, ele é único
        if (!charContador[char]) {
            charContador[char] = true; // Marca o caractere como encontrado
            contUnicos++; // Incrementa a contagem de caracteres únicos
        }
    }

    return uniqueCount;
}

const resultado = contarCharUnicos("javascript");
console.log(resultado);