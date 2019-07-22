console.log(soma(2,3));
//console.log(sub(2,3)); dará erro deve ser chamado depois da function expression
//console.log(mult(2,3)); dará erro deve ser chamado depois da named function expression 

//Obs: javascript carrega primeiro todas as funções

// function declaration
function soma(x,y){
    return x + y;
}

// function expression
const sub = function (x, y){
    return x - y;
}
console.log(sub(2,3));

// named function expression
const mult = function mult(x, y){
    return x * y;
}
console.log(mult(2,3));
