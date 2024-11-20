function buscarValor(array, valor) {
    const index = array.indexOf(valor);
    return index !== -1 ? `Valor encontrado na posição ${index}` : 'Valor não encontrado';
}

console.log(buscarValor([1, 2, 3, 4], 3)); // Valor encontrado na posição 2
console.log(buscarValor([1, 2, 3, 4], 5)); // Valor não encontrado