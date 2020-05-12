import React from 'react';
import {FiLogIn, FiPrinter} from 'react-icons/fi'
import {Link} from 'react-router-dom'; //Comportamento SPA.
import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return(
        <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be The Hero" />

            <form>
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID"/>
                <button className="button">Entrar</button>
                <Link to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro.</Link>
            </form>

           </section>

           <img src={heroesImg} alt="Heroes" />
        </div>
        
    );
}

