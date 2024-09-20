import '../TodasPage/TodasPage.css'
import Reserva from '../../Components/Sala/Reserva'
const  TodasPage =() => {
    return(
        <div className="fundo">
            <div className="esquerda-todas">
                <div className="cima">
            <h2> TODAS AS SALAS</h2>
                <button className="button-todas" type="submit">Todas Salas</button>
                <button className="button-todas" type="submit">Salas Livres</button>
                <button className="button-todas" type="submit">Minhas Reservas</button>
            </div>
                <div className='baixo'>
            </div>
            </div>
            <div>
                <Reserva />
            </div>
        </div>
    )

}

export default TodasPage