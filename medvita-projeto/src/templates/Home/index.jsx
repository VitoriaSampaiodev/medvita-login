import { useContext } from 'react'
import './style.css'
import { UserContext } from '../../contexts/UserGlobalContext'

export const Home = () => {
    const context = useContext(UserContext);
    const {state} = context;

    return (
       <div>
        <h1>Bem-vinda, {state.name}</h1>
        {
            state.consultas.map(consulta => (
                <div className="consulta">
                    <h2>{consulta.data}</h2>
                    <p>{consulta.status}</p>
                    <p className="medico">{consulta.medico}</p>
                </div>
            ))
        }
       </div>
    )
}