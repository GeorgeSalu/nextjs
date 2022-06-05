export default function Filho(props) {
    return (
        <div>
            <h1>filho</h1>
            <button onClick={props.funcao}>Falar com o pai #01</button>
            <button onClick={() => props.funcao('passi no enem')}>Falar com o pai #02</button>
        </div>
    )
}