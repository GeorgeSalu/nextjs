export default function jsx4() {
    const subtitulo = "estou no javascript"

    return (
        <div>
            <h1>integracao js e jsx</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.random(13,49)}</h4>
            <h5>{entre(9.6, 1, 10)}</h5>
        </div>
    )
}

function entre(valor, min, max) {
    if(valor >= min && valor <= max) {
        return "sim"
    } else {
        return "nao"
    }
}