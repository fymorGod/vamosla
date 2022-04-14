import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { app } from '../../api/app';
import AR_ICON from '../../assets/AR_ICON.png';
import './home.css'

export default function Home() {
    const [equipamentos, setEquipamentos] = useState([]);
    useEffect(() => {
        app.get('/equipamentos').then(response => {
            console.log(response.data)
            setEquipamentos(response.data)
        })
    }, []);

    return (
        <>
            <main className="cards">
                {
                    equipamentos.map(equipamento => {
                        return (
                            <section className="card" key={equipamento.codigo}>
                                <div className="icon">
                                    <img src={AR_ICON} alt="Icon Arc" />
                                </div>
                                <h3>{equipamento.codigo}</h3>
                                
                                <NavLink className="btn-equip" to={`/equipamentos/${equipamento.id}`}>Abrir Equipamento</NavLink>
                            </section>
                        )
                    })
                }
            </main>
        </>
    )
}
