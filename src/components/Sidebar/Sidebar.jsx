import React from 'react'
import equipamento from '../../assets/Equipamentos.png';
import manutencao from '../../assets/Manutencao.png';
import relatorio from '../../assets/006-report.png';
import setting from '../../assets/setting.png';
import cadastrar from '../../assets/cadastrar.png';
import cadastrarManutencao from '../../assets/add_manutencao.png';


import './sidebar.css';

export default function Sidebar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav" >
                    <li className="logo">
                        <a href="/" className="nav-link">
                            <span className="link-text logo-text">PMOC</span>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fad"
                                data-icon="angle-double-right"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                            >
                                <g className="fa-group">
                                    <path
                                        fill="currentColor"
                                        d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                        className="fa-secondary"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                        className="fa-primary"
                                    ></path>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/equipamentos" className="nav-link">
                            <img src={equipamento}alt="Icon Equipamentos"/>
                                <span className="link-text">Equipamentos</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/manutencao" className="nav-link">
                            <img src={manutencao} alt="Icon Manutencao"/>
                                <span className="link-text">Manutenção</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/relatorio" className="nav-link">
                            <img src={relatorio} alt="Icon Manutencao"/>
                                <span className="link-text">Relatório</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/cadastro/equipamento" className="nav-link">
                            <img src={cadastrar} alt="Icon Manutencao"/>
                                <span className="link-text">Cadastrar Equipamento</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/cadastro/manutencao" className="nav-link">
                            <img src={cadastrarManutencao} alt="Icon Manutencao"/>
                                <span className="link-text">Cadastrar Manutenção</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/configuracao" className="nav-link">
                            <img src={setting} alt="Icon Manutencao"/>
                                <span className="link-text">Configuração</span>
                        </a>
                    </li>
                   
                </ul>

            </nav>
        </>
    )
}
