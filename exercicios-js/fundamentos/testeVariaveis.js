/*function foo() {
    if(1 == 1) {
        var x = 1;
    }
    console.log(x);
}

foo()*/

/*let a = 1; //Acessível globalmente
function bar() {
    console.log(a);
    let b = 2; //Acessível apenas dentro de `bar()` e sub-blocos.
    if(true) {
        let c = 3; //Acessível apenas dentro do bloco `if`
        console.log(b);        
    }
    console.log(c);
}

bar(); //Saída -> 1, 2 e ReferenceErrorException: c is not defined*/

/*var variavel = 0;
var variavel = 10;
console.log(variavel); // Saída -> 10
function funcao() {
  var outra_variavel = 20;
  var outra_variavel = 30;
  console.log(outra_variavel);
}
funcao(); //Saída -> 30*/

let variavel = 0;
let variavel = 10; //TypeError: Identifier 'variavel' has already been declared
function funcao() {
  let outra_variavel = 20;
  let outra_variavel = 30; //SyntaxError: Identifier 'outra_variavel' has already been declared
}