function factorial(n) {
    // Caso base: el factorial de 0 es 1
    if (n === 0) {
        return fac = 1;
    }

    // Caso recursivo: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Ejemplo de uso
console.log(factorial(5)); // 120

const isPalindrome = (str) => {
    let firstChar = str.slice(0, 1);
    let lastChar = str.slice(-1);
    let middleChars = str.slice(1, -1);

    if(str.length < 1) return console.log("Ingresa una palabra");

    if(str.length === 1) return console.log(true);
    
    if(firstChar !== lastChar) return console.log(false);
    
    return isPalindrome(middleChars);
}

isPalindrome("aba");

