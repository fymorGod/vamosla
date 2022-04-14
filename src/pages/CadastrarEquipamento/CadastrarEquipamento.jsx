import React from 'react';
import './cadastrarEquip.css';
import EquipamentosRegistro from '../../assets/equipamento.png';
import condensadora from '../../assets/Condensadora.png';
import evaporadora from '../../assets/AR_ICON.png';
import { NavLink } from 'react-router-dom';

export default function CadastrarEquipamento() {
    return (
        <>
            <main className="cards1">
                <section className="card1">
                    <div className="icon1">
                        <img src={EquipamentosRegistro} alt="Icon Arc"/>
                    </div>
                    <h3>Cadastrar Equipamento</h3>
                    <span>Registrar um Equipamento</span>
                    <NavLink className="btn-equip1" to={"/cadastro/equipamentos/form-equipamento"}>Cadastrar</NavLink>
                </section>

                <section className="card1">
                    <div className="icon1">
                        <img src={condensadora} alt="Icon Arc"/>
                    </div>
                    <h3>Cadastrar Condesadora</h3>
                    <span>Registrar a Condesadora</span>
                    <NavLink className="btn-equip1" to={"/cadastro/equipamentos/form-condesadora"}>Cadastrar</NavLink>
                </section>

                <section className="card1">
                    <div className="icon1">
                        <img src={evaporadora} alt="Icon Arc"/>
                    </div>
                    <h3>Cadastrar Evaporadora</h3>
                    <span>Registrar a Evaporadora</span>
                    <NavLink className="btn-equip1" to={"/cadastro/equipamentos/form-evaporadora"}>Cadastrar</NavLink>
                </section>

            </main>
        </>
    )
}
