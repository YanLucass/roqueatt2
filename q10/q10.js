function exibirIntervalo(){
    let numero1 = parseInt(document.getElementById("number1").value)
    let numero2 = parseInt(document.getElementById("number2").value)
    

    for(i=numero1;i<numero2;i++){
        if(i>numero1 && i<numero2){
            var textOL = document.createTextNode(i);
            var divOL = document.createElement("div");
            
            divOL.appendChild(textOL);
            document.getElementById("interv").appendChild(divOL)
        }
    }
}