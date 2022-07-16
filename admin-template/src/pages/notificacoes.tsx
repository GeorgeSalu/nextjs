import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppDate";

export default function Notificacoes() {
  const dados =  useAppData()

  return (
    <Layout titulo="Notificacoes" subtitulo="notificacao" >
      <h3>{dados.nome}</h3>
    </Layout>
  )
}
