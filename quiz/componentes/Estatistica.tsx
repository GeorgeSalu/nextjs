import styles from '../styles/Estatitica.module.css'

interface EstatiticaProps {
  valor: any
  texto: string
  corFundo?: string
  corFonte?: string
}

export default function Estatitica(props) {
  return (
    <div className={styles.estatitica}>
      <div className={styles.valor} style={{
        backgroundColor: props.corFundo ?? '#FDD60F',
        color: props.corFonte ?? '#333'
      }}>
        {props.valor}
      </div>
      <div className={styles.texto}>
        {props.texto}
      </div>
    </div>
  )
}