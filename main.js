var arrayInput = [];
var arrayName = [];
let sum = 0;
let total = 0;
let text = "";

function Enviar(){
    inputsValue = document.getElementById("gasto").value;
    inputsName = document.getElementById("nombre").value;
    arrayInput.push(inputsValue);
    arrayName.push(inputsName);

    for(let i = 0; i < arrayName.length; i++){
        sum = parseFloat(arrayInput[i]);
        text += arrayName[i] + ": $" + arrayInput[i] + "<br>";
        document.getElementById("Lista").innerHTML = text;
    }

    
    total += parseFloat(sum.toFixed(2))


    document.getElementById("Total").innerHTML = "Total: $" + total
    document.getElementById("Division").innerHTML = "A cada uno le toca aportar: $" + ((total / arrayInput.length).toFixed(2))

} 



