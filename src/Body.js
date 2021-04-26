import React from 'react'
import './styles/Body.css'
import perfil from './imgs/perfil.jpg'

function Body() {
    return (
        <div className="body">
            <h1 className="perfil_nome">GUILHERME LIMA</h1>
            <h4 className="subtitle">The journey of a beginner Web Developer</h4>
            <img className="perfil_foto" src={perfil} />
            <h4 className="perfil_texto">Bem vindos ao meu portfolio!<br />            
            <br />
            Sou um iniciante na área de Desenvolvimento Web e deixarei aqui um pouco do meu trabalho nessa caminhada. Atualmente sou estudante 
            de Tecnologia da Informação na UFRN e aluno de milhares tutoriais espalhados pela internet.
            </h4>
        </div>
    )
}

export default Body
