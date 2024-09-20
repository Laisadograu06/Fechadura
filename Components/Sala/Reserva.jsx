import React from 'react';
import './Reserva.css';

const Reserva = ({ children, onClick }) => {
    return (
        <button className='botao' onClick={onClick}>
            {children}
        </button>
    );
}

export default Reserva;