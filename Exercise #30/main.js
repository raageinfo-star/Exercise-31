function operate(a,b,colback){
    return colback(a,b);
}
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}
console.log("add",operate(5,5, add));
console.log("sub",operate(10,5,sub));
console.log("mult",operate(5,5,mult));
console.log("divide",operate(10,2,div));