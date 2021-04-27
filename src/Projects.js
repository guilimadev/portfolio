import React from 'react'
import Navbar from './Navbar'
import './styles/Main.css';
import AccordionReact from './AccordionReact';
import AccordionFlutter from './AccordionFlutter';
import coding from './imgs/coding2.gif'
import logo from './imgs/logo.png';

function Projects() {
    return (
        <div className="main">
            <Navbar />
            <img style={{maxWidth: '120px', color: 'white' }} src={coding} alt=" "></img>
            <h4 style={{color: 'white', maxWidth: '75%'}}>Exemplos focados em React.js: </h4>            
            <AccordionReact />            
        </div>
    )
}

export default Projects
