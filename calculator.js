// Calculadora básica en JavaScript para operaciones: suma, resta, multiplicación y división

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// Interfaz simple por consola
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Calculadora Básica");
console.log("Operaciones disponibles: suma, resta, multiplicacion, division");

readline.question("Introduce la operación (suma/resta/multiplicacion/division): ", (operacion) => {
    readline.question("Introduce el primer número: ", (num1) => {
        readline.question("Introduce el segundo número: ", (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let resultado;

            switch (operacion.toLowerCase()) {
                case "suma":
                    resultado = sumar(a, b);
                    break;
                case "resta":
                    resultado = restar(a, b);
                    break;
                case "multiplicacion":
                    resultado = multiplicar(a, b);
                    break;
                case "division":
                    resultado = dividir(a, b);
                    break;
                default:
                    resultado = "Operación no válida";
            }

            console.log("Resultado:", resultado);
            readline.close();
        });
    });
});