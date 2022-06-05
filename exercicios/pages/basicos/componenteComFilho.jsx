import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilhos() {
    return (
        <div>
            <Lista >
                <Item conteudo="Item #11"></Item>
                <Item conteudo="Item #12"></Item>
                <Item conteudo="Item #13"></Item>
            </Lista>
        </div>
    )    
}