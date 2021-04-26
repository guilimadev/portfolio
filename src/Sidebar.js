import React from 'react'
import './styles/Sidebar.css'
import perfil from './imgs/perfil.jpg'

function Sidebar() {
    return (
        <div className="sidebar">
            <h1 className = "perfil_nome">Guilherme de Lima Menezes</h1>
            <hr />            
             <img className="perfil_foto" src={perfil} alt="" />
        </div>
    )
}

export default Sidebar
