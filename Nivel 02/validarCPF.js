function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    
    if (cpf.length !== 11) return false;

    // Verificar se todos os dígitos são iguais
    const todosIguais = cpf.split('').every((d) => d === cpf[0]);
    if (todosIguais) return false;

    const calcularDigito = (base) => {
        let soma = 0;
        for (let i = 0; i < base; i++) {
            soma += cpf[i] * (base + 1 - i);
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const digito1 = calcularDigito(9);
    const digito2 = calcularDigito(10);

    return digito1 == cpf[9] && digito2 == cpf[10];
}

console.log(validarCPF('123.456.789-09')); // false
console.log(validarCPF('111.444.777-35')); // true
