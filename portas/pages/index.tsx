import Cartao from "../componentes/Cartao";
import styles from "../styles/Forumlario.module.css"
import Link from "next/link"

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty hall</h1>
        </Cartao>
        <Cartao ></Cartao>
      </div>
      <div>
        <Cartao ></Cartao>
        <Cartao bgcolor="#28a025">
          <Link href={`/jogo/4/2`} >
            <h2 style={{ flex: "1", margin: "0" }}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
