import { IconeSol } from "../icons"

interface BotaoAlternarTemaProps {
  tema: string
  alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === 'dark' ? (
    <div onClick={props.alternarTema} className={`
    
      `}>
      <div>
        {IconeSol}
      </div>
      <div>
        <span>Claro</span>
      </div>
    </div>
  ): (
    <div></div>
  )
}