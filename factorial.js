function calcularFactorial(n) {
    if (n === 0 || n === 1) {
    return 1;
}

let factorial = 1;
for (let i = 2; i <= n; i++) {
    factorial *= i;
}

return factorial;
}

var resultado = calcularFactorial(5);
console.log(resultado);