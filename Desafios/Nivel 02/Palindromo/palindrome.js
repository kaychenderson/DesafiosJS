function isPalindrome(str) {
    let cleanedStr = "";

    //Limpar a string, mantendo apenas letras e números
    for (let char of str) {
        if (char >= "a" && char <= "z" || char >= "A" && char <= "Z" || char >= "0" && char <= "9") {
            cleanedStr += char.toLowerCase(); // Adiciona a letra em minúscula para ignorar maiúsculas
        }
    }

    //Inverter a string limpa
    let reversedStr = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    //Comparar a string original limpa com a versão invertida
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false