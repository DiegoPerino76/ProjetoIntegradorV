import './ListaAlunos.css'

function ListaAlunos() {

  const alunos = [
    { nome: 'Diego', nota: 8 },
    { nome: 'Lucas', nota: 5 },
    { nome: 'Maria', nota: 9 },
    { nome: 'João', nota: 4 }
  ]

  return (
    <div>
      {alunos.map((aluno, index) => (
        <div
          key={index}
          className={aluno.nota >= 7 ? 'aprovado' : 'reprovado'}
        >
          <h2>{aluno.nome}</h2>
          <p>Nota: {aluno.nota}</p>
        </div>
      ))}
    </div>
  )
}

export default ListaAlunos