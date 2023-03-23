function imprimir(){
    for(i =0;i<50;i++){
        if(i%2!==0){
            var txtOL = document.createTextNode(i);
            var divOL = document.createElement("div");
            
            divOL.appendChild(txtOL);
            document.getElementById("numImpar").appendChild(divOL)
        }

    }
}
