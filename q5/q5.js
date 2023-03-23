function calcular(){
    var A = parseInt(document.getElementById("popA").value)
    var B = parseInt(document.getElementById("popB").value)
    
    var CrescA = parseFloat(document.getElementById("crescA").value)
    var CrescB = parseFloat(document.getElementById("crescB").value)
    
    var cont = 0
    
    while(A<B){
        cont ++;
    
        if(A>B){
            break;
        }
    
        console.log("População do pais A: " + A.toFixed());
        console.log("População do pais B: " + B.toFixed());
        console.log("==========")
    
        A+=A*CrescA;
        B+= B*CrescB;
    }
    
    console.log("País A: " + A.toFixed());
    console.log("País B: " + B.toFixed());
        console.log("===========")
    
    console.log("Quantidade de Anos: "+cont)
    
    alert("Total de anos: "+cont +"\nPopulação do país A: "+A.toFixed()+"\nPopulação do país B: "+ B.toFixed());
    window.location.href = "index.html" 
}