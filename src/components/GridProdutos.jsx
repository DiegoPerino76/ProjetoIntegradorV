import './GridProdutos.css'

function GridProdutos() {

  const produtos = [
    { nome: 'Mouse Gamer', preco: 120 },
    { nome: 'Teclado Mecânico', preco: 250 },
    { nome: 'Monitor', preco: 900 },
    { nome: 'Headset', preco: 300 },
    { nome: 'Webcam', preco: 150 },
    { nome: 'Notebook', preco: 3500 }
  ]

  return (
    <div className="grid">

      {produtos.map((produto, index) => (
        <div className="cardGrid" key={index}>

          <h2>{produto.nome}</h2>

          <p>R$ {produto.preco}</p>

        </div>
      ))}

    </div>
  )
}

export default GridProdutos