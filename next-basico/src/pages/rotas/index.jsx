import Link from 'next/link'

export default function rotas() {
    return (
        <div>
            <h1>Rotas</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=ana">
                    <li>params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>buscar</li>
                </Link>
                <Link href="/rotas/123/Daniel">
                    <li>daniel</li>
                </Link>
            </ul>
        </div>
    )
}