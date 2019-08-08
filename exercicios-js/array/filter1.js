const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.49, fragil: false }
]

const filtrarProdutosCaros = p => p.preco >= 500 
const filtrarProdutosFrageis = p => p.fragil

console.log(produtos.filter(filtrarProdutosCaros).filter(filtrarProdutosFrageis));
