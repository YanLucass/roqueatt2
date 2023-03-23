function maior(){
    let a = parseInt(document.getElementById("number1").value)
    let b = parseInt(document.getElementById("number2").value)
    let c = parseInt(document.getElementById("number3").value)
    let d = parseInt(document.getElementById("number4").value)
    let e = parseInt(document.getElementById("number5").value)

    let maior = a;

    if(maior<b){
        maior = b;
    }
    if(maior<c){
        maior = c;
    }
    if(maior<d){
        maior = d;
    }
    if(maior<e){
        maior = e;
    }

    alert("O maior número é: "+ maior)
}