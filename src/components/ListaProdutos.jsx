import './ListaProdutos.css'

function ListaProdutos() {

  const produtos = [
    { nome: 'Mouse', preco: 100 },
    { nome: 'Teclado', preco: 200 },
    { nome: 'Monitor', preco: 900 }
  ]

  return (
    <div>
      {produtos.map((produto, index) => (
        <div className="produto" key={index}>
          <h2>{produto.nome}</h2>
          <p>R$ {produto.preco}</p>
        </div>
      ))}
    </div>
  )
}

export default ListaProdutos