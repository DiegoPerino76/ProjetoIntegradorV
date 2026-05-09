import CardAluno from './components/CardAluno'
import ListaProdutos from './components/ListaProdutos'
import Menu from './components/Menu'
import ListaAlunos from './components/ListaAlunos'
import ListaFilmes from './components/ListaFilmes'
import Titulo from './components/Titulo'
import Usuarios from './components/Usuarios'
import GridProdutos from './components/GridProdutos'

function App() {
  return (
    <div>
      <Menu />
      <Titulo />
      <CardAluno />
      <ListaProdutos />
      <ListaAlunos />
      <ListaFilmes />
      <Usuarios />
      <GridProdutos />
    </div>
  )
}

export default App