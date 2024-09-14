import { useEffect, useState } from "react"
import "./style.css"

export default function ListaUsuarios() {

    const [usuarios, setUsuarios] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        const buscarUsers = async () => {
            try {
                const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
                const dados = await resposta.json()
                setUsuarios(dados)
            } catch (erro) {
                console.log("Erro ao buscar usuarios", erro)
            } finally {
                setCarregando(false)
            }
        }

        buscarUsers()
    }, [])

    if (carregando) {
        return <p>Carregando usuarios...</p>
    }

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <div className="container-card">
                {usuarios.map((usuario) => (
                    <div key={usuario.id} className="card">
                        <li>{usuario.name}</li>
                        <li>{usuario.username}</li>
                        <li>{usuario.email}</li>
                    </div>
                ))}
            </div>
        </div>
    )
}