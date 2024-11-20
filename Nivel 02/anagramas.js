function saoAnagramas(str1, str2) {
    const formatar = (str) =>
        str.toLowerCase().replace(/[\s]/g, '').split('').sort().join('');

    return formatar(str1) === formatar(str2);
}

console.log(saoAnagramas("amor", "roma")); // true
console.log(saoAnagramas("iracema", "america")); // true
console.log(saoAnagramas("cachorro", "gato")); // false