import React from 'react'
import Navbar from './Navbar'
import './styles/Main.css';
import Accordion from './Accordion';

function Projects() {
    return (
        <div className="main">
            <Navbar />
            <h4 style={{color: 'white'}}>Deixarei aqui alguns exemplos que irei fazendo nessa jornada de aprendizado</h4>
            <Accordion />
        </div>
    )
}

export default Projects
