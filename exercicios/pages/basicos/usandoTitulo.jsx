import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal="pagina de cadastro"
                secundario="incluir, alterar e excluir coisas"/>

            <Titulo 
                principal="pagina de login"
                secundario="informe seu eamil e senha"
                pequeno={true}/>
        </div>
    )
}