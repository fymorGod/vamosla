import React from 'react'
import logo from '../../assets/Grupo_Mirante.png';
import './navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="topnav">
                <div className="icon-mirante">
                    <img src={logo} alt=""/>
                </div>
            </div>

        </>
    )
}
