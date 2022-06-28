import {  useEffect, useState } from 'react'
import Questionario from '../componentes/Questionario'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, 'Qual é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState(questaoMock)

  async function carrgarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carrgarQuestoes(id: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${id}`)
    const json = await resp.json()
    console.log(json)
  }

  useEffect(() => {
    carrgarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carrgarQuestoes(idsDasQuestoes[0])
  }, [idsDasQuestoes])

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
