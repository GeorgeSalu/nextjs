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

    function renderizarLista() {
        const items = []

        for(let i = 0; i < listaAprovados.length; i++) {
            items.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return items
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}