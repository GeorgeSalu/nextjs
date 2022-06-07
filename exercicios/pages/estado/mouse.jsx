import { useState } from "react"

export default function mouse(props) {

    const [x, alterarX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }
    
    function quandoMover(ev) {
        alterarX(ev.clientX) 
        alterarY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo x: {x}</span>
            <span>Eixo y: {y}</span>
        </div>
    )
}