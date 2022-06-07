import { useState } from "react"

export default function contador() {

    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {numero}</div>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}