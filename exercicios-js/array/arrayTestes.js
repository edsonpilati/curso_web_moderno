let teste = ['Edson', 'Joao', 'Ana', 'Bia']

teste.push('Maria')
console.log(teste);

teste.pop()
console.log(teste);

teste.shift()
console.log(teste);

teste.unshift('Leo')
console.log(teste);


let ages = [3, 10, 15, 17];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.some(checkAdult));

/*function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
} */




