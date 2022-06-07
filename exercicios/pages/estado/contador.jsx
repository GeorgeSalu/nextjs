import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {

    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <div>
            <NumeroDisplay numero={numero} />
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}