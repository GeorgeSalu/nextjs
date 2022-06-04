export default function repeticao1() {
    const listaAprovados = [
        'joao',
        'maria',
        'ana',
        'bia',
        'carlos',
        'daniel',
        'laura'
    ]

    function renderLista() {
        return listaAprovados.map(function(nome, i) {
            return <li key={i}>{nome}</li>
        })
    }    


    return (
        <ul>
            {renderLista()}
        </ul>
    )
}


function renderizarLista() {
    const items = []

    for(let i = 0; i < listaAprovados.length; i++) {
        items.push(<li key={i}>{listaAprovados[i]}</li>)
    }

    return items
}