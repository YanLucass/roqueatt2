function verificar(){
    let nome = document.getElementById("nome");
    let senha = document.getElementById("senha");

    if(nome.value === senha.value){
        alert("ERROR: Nome e senha precisam ser diferentes!")
    }
    else{
        alert("SUCESS!!!")
    }
}