import MenuLateral from "./ManuLateral"

interface TituloProps {
  titulo: string
  subtitulo: string
}

export default function Titulo(props: TituloProps) {
  return (
    <div>
      <h1 className={`
      
      `} >
        {props.titulo}
      </h1>
      <h2>
        {props.subtitulo}
      </h2>
    </div>
  )
}