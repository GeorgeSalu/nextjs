export function getStaticProps() {
    return {
        revalidate: 7,
        props: {
            numero : Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estatico #02s</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}