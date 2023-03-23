let numbers = [20];

function imprimir(){
    
    for(i=0;i<=20;i++){
        numbers[i]=i;
        console.log(numbers[i])
    }

    var d = document.createElement("div");
    var quebra = ' ';
    for(i = 0;i<=20;i++){
        var txt = document.createTextNode(numbers[i] + quebra);
        d.appendChild(txt);
        document.getElementById("numbersSide").appendChild(d)
    }

    for(i = 0;i<=20;i++){
        var d = document.createElement("div");
        var txt = document.createTextNode(numbers[i]);
        d.appendChild(txt);
        document.getElementById("numbersBellow").appendChild(d);
    }

  
 }
