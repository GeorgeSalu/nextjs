import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {

    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <div>
            <ContadorDisplay numero={numero} />
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}