export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: { id: '107' } },
            { params: { id: '203' } },
            { params: { id: '1305' } },
        ]
    }
}

export async function getStaticProps({params}) {
    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await resp.json()

    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props) {
    const {aluno} = props
    return (
        <div>
            <h1>Detalhes do aluno</h1>
            <ul>
                <li>{aluno.id}</li>
                <li>{aluno.nome}</li>
                <li>{aluno.email}</li>
            </ul>
        </div>
    )
}