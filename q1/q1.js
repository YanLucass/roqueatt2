function pegar(){
    let num = document.getElementById("number1");

    if(num.value < 0 || num.value > 10){
      alert("Valor inválido.");  
    }
    else{
      alert("Nota armazenada.")
    }    

    
}