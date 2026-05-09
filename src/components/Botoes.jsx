import './Botoes.css'

function Botoes() {

  const botoes = [
    { texto: 'Sucesso', tipo: 'sucesso' },
    { texto: 'Erro', tipo: 'erro' },
    { texto: 'Aviso', tipo: 'aviso' }
  ]

  return (
    <div className="containerBotoes">

      {botoes.map((botao, index) => (
        <button
          key={index}
          className={`botao ${botao.tipo}`}
        >
          {botao.texto}
        </button>
      ))}

    </div>
  )
}

export default Botoes