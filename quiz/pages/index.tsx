import Head from 'next/head'
import Image from 'next/image'
import Questao from '../componentes/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'
import styles from '../styles/Home.module.css'

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'melhor cor?', [
    RespostaModel.errada('verde'),
    RespostaModel.errada('vermelho'),
    RespostaModel.errada('azul'),
    RespostaModel.certa('preta'),
  ])
  return (
    <Questao valor={questaoTeste} />
  )
}
