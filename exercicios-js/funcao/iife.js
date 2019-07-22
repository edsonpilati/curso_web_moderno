// IIFE-> immediately invoked function expression

(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo global');
})()

// escopo global
console.log('Será executado na hora!')
console.log('Escopo global');