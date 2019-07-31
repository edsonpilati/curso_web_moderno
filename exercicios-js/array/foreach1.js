const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice) { //parametro 1: nome, 2: indice, 3: array
    console.log(`${indice + 1}) ${nome}`);    
})
 

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)
