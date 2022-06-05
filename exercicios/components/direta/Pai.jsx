import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Familia : {props.familia}</h1>
            <Filho nome="pedro" familia={props.familia} />
            <Filho nome="joana" familia={props.familia} />
            <Filho nome="gabriel" familia={props.familia} />
        </div>
    )
}