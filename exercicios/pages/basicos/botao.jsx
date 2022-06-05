function acao1() {
    console.log("acao1")
}

export default function botao() {

    function acao2() {
        console.log("acao2")
    }

    return (
        <div>
            <button onClick={acao1}>click #01</button>
            <button onClick={acao2}>click #02</button>
            <button onClick={function() {
                console.log("acao3")
            }}>click #03</button>
        </div>
    )
}