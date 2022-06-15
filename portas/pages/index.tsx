import { useState } from "react";
import Porta from "../componentes/Porta";
import { atualizarPortas, criarPortas } from "../functions/porta";
import PortaModel from "../model/porta";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(4,3))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
                    onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }
  
  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}
    </div>
  )
}
