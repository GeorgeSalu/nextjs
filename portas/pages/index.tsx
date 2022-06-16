import Cartao from "../componentes/Cartao";
import styles from "../styles/Forumlario.module.css"
import Link from "next/link"
import EntradaNumerica from "../componentes/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty hall</h1>
        </Cartao>
        <Cartao >
          <EntradaNumerica text="Qtde portas" 
            value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao >
          <EntradaNumerica text="Qtde portas" 
              value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#28a025">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} >
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
