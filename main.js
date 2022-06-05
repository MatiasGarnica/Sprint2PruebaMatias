var arrayInput = [];
var arrayName = [];
let sum = 0;
let total = 0;
let text = "";
var namedelete = "";
let total2 = 0;
let sum2 = 0;

function Enviar(){
    inputsValue = document.getElementById("gasto").value;
    inputsName = document.getElementById("nombre").value;
    arrayInput.push(inputsValue);
    arrayName.push(inputsName);

    Calcular()
} 
function Borrar(){
    namedelete = document.getElementById("nombre").value;
    var indexnamedelete = arrayName.indexOf(namedelete);
    if(indexnamedelete == -1){
    }
    else{
        total -= parseFloat(arrayInput[indexnamedelete]);
        arrayName.splice(indexnamedelete, 1);
        arrayInput.splice(indexnamedelete, 1);
        Calcular2()

    }

}

function Calcular(){
    for(let i = 0; i < arrayName.length; i++){
        sum = parseFloat(arrayInput[i]);
        text += `<button class="gasto-persona" onclick:"Eliminar()"> ${arrayName[i]}: $${arrayInput[i]} </button>`;
        document.getElementById("Lista").innerHTML = text;
    }
    text = ""
    
    total += parseFloat(sum.toFixed(2))

    document.getElementById("Total").innerHTML = "Total: $" + (total.toFixed(2))
    document.getElementById("Division").innerHTML = "A cada uno le toca aportar: $" + ((total / arrayInput.length).toFixed(2))
}

function Calcular2(){
    for(let i = 0; i < arrayName.length; i++){
        sum2 = parseFloat(arrayInput[i]);
        total2 += parseFloat(sum2.toFixed(2))
        text += `<button class="gasto-persona" onclick:"Eliminar()"> ${arrayName[i]}: $${arrayInput[i]} </button>`;
        document.getElementById("Lista").innerHTML = text;
        document.getElementById("Total").innerHTML = "Total: $" + (total2.toFixed(2))
        document.getElementById("Division").innerHTML = "A cada uno le toca aportar: $" + ((total2 / arrayInput.length).toFixed(2))
    }
    text = ""
    total2 = 0

}


