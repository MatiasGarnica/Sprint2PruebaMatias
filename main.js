function Enviar(){
    var arrayInput = new Array();
    var arrayName = new Array();
    var inputsValue = document.getElementsByClassName("gasto");
    var inputsName = document.getElementsByClassName("nombre");
    namesValues = [].map.call(inputsValue,function(dataInput){
        arrayInput.push(dataInput.value);
    });
    namesNames = [].map.call(inputsName,function(dataName){
        arrayName.push(dataName.value);    
    });
    
    arrayInput.forEach(function(inputsValuesData){
        arrayName.forEach(function(inputsNamesData){
            document.getElementById("Total").innerHTML = inputsNamesData +": $"+ inputsValuesData 
        })
    })
    for (const x of arrayName){
        html += `<li>${x}</li>`;
    }
    document.getElementById("Total").innerHTML = html;
}


