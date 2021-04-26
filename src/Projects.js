import React from 'react'
import Navbar from './Navbar'
import './styles/Main.css';
import Accordion from './Accordion';
import coding from './imgs/coding2.gif'

function Projects() {
    return (
        <div className="main">
            <Navbar />
            <h4 style={{color: 'white', maxWidth: '75%'}}>Deixarei aqui alguns exemplos que irei fazendo nessa jornada de aprendizado</h4>
            <img style={{maxWidth: '10%' }} src={coding}></img>
            <Accordion />
        </div>
    )
}

export default Projects
