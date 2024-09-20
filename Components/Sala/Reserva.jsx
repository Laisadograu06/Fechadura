import React from 'react';
import './Reserva.css';

const Reserva = ({ id, sala, status, onClick }) => {
    return (
        <>
        
        { status == 1 ? 
            <button className='botao' onClick={onClick}>
                ID: {id} - SALA: {sala} - Status: {status}
            </button>
        :
            <button className='botao-off' disabled={true}>  
                ID: {id} - SALA: {sala} - Status: {status}
             </button>
        }


        </>
    );
}

export default Reserva;