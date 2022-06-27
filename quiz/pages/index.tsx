import {  useState } from 'react'
import Questao from '../componentes/Questao'
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

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questao}
              tempoParaResposta={5} 
              respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado} />
    </div>
  )
}
