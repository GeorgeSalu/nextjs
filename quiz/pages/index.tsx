import {  useState } from 'react'
import Questionario from '../componentes/Questionario'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, 'Qual é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if(questao.naoRespondida) {
      setQuestao(questao.responderCom(-1))
    }
  }

  function questaoRespondida(questao: QuestaoModel) {

  }

  function irPraProximoPasso() {

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questionario
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
         />
    </div>
  )
}
