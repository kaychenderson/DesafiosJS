function contarCaracteres(str, char) {
    let contador = 0;
    for (let c of str) {
        if (c === char) contador++;
    }
    return contador;
}

console.log(contarCaracteres("banana", "a")); // 3
console.log(contarCaracteres("paralelepipedo", "p")); // 2