import styles from '../styles/Resultado.module.css'
import { useRouter } from 'next/router'
import Estatitica from '../componentes/Estatistica'

export default function Resultado() {
  const router = useRouter()

  const total = +router.query.total
  const certas = +router.query.certas
  const percentural = Math.round((certas / total) * 100)

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatitica texto="Perguntas" valor={total} />
        <Estatitica texto="Certas" valor={certas} />
        <Estatitica texto="Percentual" valor={`${percentural}%`} />
      </div>
    </div>
  )
}