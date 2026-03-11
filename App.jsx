import { useState } from "react";

function App() {

  const [nome, setNome] = useState("");
  const [lista, setLista] = useState(["João", "Maria", "Carlos"]);

  function adicionar() {
    setLista([...lista, nome]);
    setNome("");
  }

  return (
    <div>

      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button onClick={adicionar}>
        Adicionar
      </button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
