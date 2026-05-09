import './ListaFilmes.css'

function ListaFilmes() {

  const filmes = [
    {
      nome: 'Batman',
      categoria: 'Ação',
      nota: 9
    },
    {
      nome: 'Vingadores',
      categoria: 'Herói',
      nota: 8
    },
    {
      nome: 'Invocação do Mal',
      categoria: 'Terror',
      nota: 10
    }
  ]

  return (
    <div className="filmes">
      {filmes.map((filme, index) => (
        <div className="cardFilme" key={index}>
          <h2>{filme.nome}</h2>

          <p>Categoria: {filme.categoria}</p>

          <p>Nota: {filme.nota}</p>

          <button>Assistir</button>
        </div>
      ))}
    </div>
  )
}

export default ListaFilmes