//javascript

function realizarOperacion(){
    let x = Number(document.getElementById('x').value);
    let y = Number(document.getElementById('y').value);
    let operacion = document.getElementById('Operaciones').value;

    switch(operacion){
        case "Suma":
            alert("La suma de ambos numeros es: " + (x+y));
        break;
        case "Resta":
            alert("La resta de ambos numeros es: " + (x-y));
        break;
        case "Multiplicacion":
            alert("La multiplicacion de ambos numeros es: " + (x*y));
        break;
        case "Division":
            if(y===0){
                alert("No se puede dividir entre 0")
                
            }else{
                alert("La division de ambos numeros es: " + (x/y));
            }
        break;
    }
}
