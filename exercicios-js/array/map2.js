const carrinho = [
    '{"nome" : "Borracha", "preco": 3.45 }',
    '{"nome" : "Caderno", "preco": 13.90 }',
    '{"nome" : "Kit de Lapis", "preco": 3.45 }',
    '{"nome" : "Caneta", "preco": 3.45 }'
]

// Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map(paraObjeto).map(apenasPreco));




 
