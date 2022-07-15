interface ConteudoProps {
  children?: any
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div>
      <h1 className={`
        flex flex-col mt-7
      `} >
        {props.children}
      </h1>
    </div>
  )
}