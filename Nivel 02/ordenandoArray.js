function ordenarArray(array, ordem = 'crescente') {
    if (ordem === 'crescente') {
        return array.sort((a, b) => a - b);
    } else if (ordem === 'decrescente') {
        return array.sort((a, b) => b - a);
    } else {
        return 'Ordem inválida';
    }
}

console.log(ordenarArray([5, 2, 9, 1], 'crescente'));  // [1, 2, 5, 9]
console.log(ordenarArray([5, 2, 9, 1], 'decrescente')); // [9, 5, 2, 1]