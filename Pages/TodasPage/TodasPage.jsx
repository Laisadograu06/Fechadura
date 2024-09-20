import '../TodasPage/TodasPage.css'
import Reserva from '../../Components/Sala/Reserva'
import { useState } from 'react'
const  TodasPage =() => {

    const [lista, setLista] = useState([
        {"id": 1, "nome": "A1", status: 1},
        {"id": 2, "nome": "A2", status: 0},
        {"id": 3, "nome": "A3", status: 0},
        {"id": 4, "nome": "A4", status: 1},
    ])

    function escolherSala(id, nome) {
        alert("ID" + id + "Sala: " + nome)
    }
    return(
        <div className="fundo">
            <div className="esquerda-todas">
                <div className="cima">
            <h2> TODAS AS SALAS</h2>
                <button className="button-todas" type="submit">Todas Salas</button>
                <button className="button-todas" type="submit">Minhas Reservas</button>
            </div>
                <div className='baixo'>
            </div>
            </div>
            <div className='salas A'>
                {lista.length > 0 
                &&
                    lista.map((item) => {
                        return(
                            <div key={item.id}>
                                <Reserva nome={item.nome} id={item.id} status={item.status} onClick={() => escolherSala(item.id, item.nome)}/>
                            </div>
                        )
                    })
                }
                
               
            </div>
        </div>
    )

}

export default TodasPage