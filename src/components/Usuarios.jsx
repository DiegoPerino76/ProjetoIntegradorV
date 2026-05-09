import './Usuarios.css'

function Usuarios() {

  const usuarios = [
    {
      nome: 'Diego',
      email: 'diego@gmail.com',
      telefone: '14999999999'
    },
    {
      nome: 'Maria',
      email: 'maria@gmail.com',
      telefone: '14988888888'
    },
    {
      nome: 'Lucas',
      email: 'lucas@gmail.com',
      telefone: '14977777777'
    }
  ]

  return (
    <div className="usuarios">

      {usuarios.map((usuario, index) => (
        <div className="cardUsuario" key={index}>

          <h2>{usuario.nome}</h2>

          <p>{usuario.email}</p>

          <p>{usuario.telefone}</p>

        </div>
      ))}

    </div>
  )
}

export default Usuarios