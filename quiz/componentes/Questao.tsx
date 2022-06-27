import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";

interface QuestaoProps {
  valor: QuestaoModel
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor

  return (
    <div className={styles.questao}>
      questao
    </div>
  )
}