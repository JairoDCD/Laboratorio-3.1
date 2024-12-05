// Paso 1: declaracion de variables
let num1, num2;
let operacion;

// Paso 2: funcion para realizar las operaciones
function realizarOperacion(num1, num2, operacion){
    if(operacion === "suma"){
        return num1 + num2;
    }else if(operacion === "resta"){
        return num1 - num2;
    }else if (operacion === "multiplicacion") {
        return num1 * num2;
    }else if (operacion === "division") {
        if (num2 === 0) {
            return "Error no puedes dividir entre 0"
        }else{
            return num1 / num2;
        }
    }else{
        return "Operacion no valida"
    }
}

// paso 3: bucle para realizar multiples operaciones 
while (true) {
    num1 = parseFloat(prompt("Ingrese el primer numero"));
    if(isNaN(num1)){
        console.log("Adios.");
        break;
    }
    num2 = parseFloat(prompt("Ingrese el segundo numero"));
    if(isNaN(num2)){
        console.log("ingrese un numero valido.");
        continue;
    }
    operacion = prompt("Ingrese la operacion a realizar: suma, resta, multiplicacion o division")
    if (operacion === "salir") {
        console.log("Adios.")
        break;
    }
    const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
    console.log(`resultado: ${resultado}`)
}