function calcular(){
    let a = parseInt(document.getElementById("number1").value)
    let b = parseInt(document.getElementById("number2").value)
    let c = parseInt(document.getElementById("number3").value)
    let d = parseInt(document.getElementById("number4").value)
    let e = parseInt(document.getElementById("number5").value)

    let soma = a+b+c+d+e;

    let media = soma/5

    alert("Soma: "+ soma + "\nMédia: " + media)
}