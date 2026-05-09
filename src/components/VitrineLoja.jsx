import './VitrineLoja.css'

function VitrineLoja() {

  const produtos = [
    {
      nome: 'Mouse Gamer',
      preco: 120,
      categoria: 'Periférico'
    },
    {
      nome: 'Teclado RGB',
      preco: 250,
      categoria: 'Periférico'
    },
    {
      nome: 'Monitor 144Hz',
      preco: 1300,
      categoria: 'Monitor'
    },
    {
      nome: 'Headset',
      preco: 350,
      categoria: 'Áudio'
    }
  ]

  return (
    <div className="vitrine">

      {produtos.map((produto, index) => (
        <div className="produtoLoja" key={index}>

          <div className="imagemFake"></div>

          <h2>{produto.nome}</h2>

          <p>{produto.categoria}</p>

          <h3>R$ {produto.preco}</h3>

          <button>Comprar</button>

        </div>
      ))}

    </div>
  )
}

export default VitrineLoja