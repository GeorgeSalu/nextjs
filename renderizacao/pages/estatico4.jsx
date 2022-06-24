export async function getStaticProps() {
    console.log('[server] gerando props para o componente')
    const resp = await fetch("http://localhost:3000/api/produto")
    const produtos = await resp.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props) {
    console.log('[cliente] renderizando o componente')
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return <li key={produto.id}>{produto.nome} tem preco de {produto.preco}</li>
        })
    }

    return (
        <div>
            <h1>Estatico #04</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}