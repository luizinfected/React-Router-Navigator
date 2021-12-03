import React from 'react'
import './Menu.css'
import { Link }from 'react-router-dom'
const Menu = props =>(
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/param/123">Param#1</Link>
                </li>
                <li>
                    <Link to="/param/EsseÉoNovoID">Param#2</Link>
                </li>
                <li>
                    <Link to="/naoexiste"> Nao existe!</Link>
                </li>
            </ul>
        </nav>
    </aside>
    )   

export default Menu