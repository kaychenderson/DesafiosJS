function contarPalavras(frase) {
    const palavras = frase.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
    const contador = {};

    for (let palavra of palavras) {
        contador[palavra] = (contador[palavra] || 0) + 1;
    }

    return contador;
}

console.log(contarPalavras("A vida é bela, a vida é curta.")); 
// { a: 2, vida: 2, é: 2, bela: 1, curta: 1 }

console.log(contarPalavras("JavaScript é incrível! JavaScript é desafiador."));
// { javascript: 2, é: 2, incrível: 1, desafiador: 1 }