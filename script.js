const items = {
 
    id: 0,
    nome: 'camiseta',
    img: 'image.jpg',
    quantidade: 0,
    id: 1,
    nome: 'short',
    img: 'image.jpg',
    quantidade: 0,
    id: 2,
    nome: 'sapato',
    img: 'image.jpg',
    quantidade: 0,
 
}

inicializarLoja = () => {
  var containerProdutos = document.getElementById('produtos');
  items.map((val)=>{
    console.log(val.nome);
  })
}

inicializarLoja();

