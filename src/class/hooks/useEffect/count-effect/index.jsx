import { useState, useEffect } from "react"

export default function CountEffect(){

    const [count, setCount] = useState(0)

    useEffect(() => {console.log("useEffect ativado pela dependencia count")}, [count])

    return (
        <div>  
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    )
}