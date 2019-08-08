Array.prototype.map2 = function(callback) {
     const newArray = []
     for(let i = 0; i < this.length; i++) {
         newArray.push(callback(this[i], i, this))
     }
}

Array.prototype.map3 = function (callback) {
    let newArray = []
    this.forEach(element => {
        newArray.push(callback(element))
    });
 
    return newArray
}

const carrinho = [
    '{"nome" : "Borracha", "preco": 3.45 }',
    '{"nome" : "Caderno", "preco": 13.90 }',
    '{"nome" : "Kit de Lapis", "preco": 3.45 }',
    '{"nome" : "Caneta", "preco": 3.45 }'
]

// Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map2(paraObjeto).map2(apenasPreco));




 
