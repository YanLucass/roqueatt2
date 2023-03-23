var A = 80000
var B = 200000

var cont = 0

var CrescA = 0.03
var CrescB = 0.015

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