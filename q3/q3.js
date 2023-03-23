function analisar(){
    let nome = new String(document.getElementById("nome").value)
    let idade = parseInt(document.getElementById("idade").value)
    let salario = parseFloat(document.getElementById("salario").value)
    let sexo = new String(document.getElementById("sexo").value)
    let estadoCivil = new String(document.getElementById("estado").value)

    if(nome.length<3){
        alert("ERROR: Nome inválido")
    }
    else if(idade<=0 || idade>150){
        alert("ERROR: Idade inválida")
    }
    else if(salario<0){
        alert("ERROR: Salário inválido")
    }
    else if(sexo[0]!== 'F' && sexo[0]!== 'M'){
        alert("ERROR: Sexo inválido")
    }
    else if(estadoCivil[0]!=='S' && estadoCivil[0]!=='C' && estadoCivil[0]!=='D' && estadoCivil[0]!=='V'){
        alert("ERROR: Estado Civil inválido")
    }
    else{
        alert("SUCESS!!")
    }
}