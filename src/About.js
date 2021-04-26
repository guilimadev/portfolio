import React from 'react';
import Navbar from './Navbar';
import './styles/About.css';
import './styles/Main.css';
import pixel from './imgs/pixel.png';



function About() {
    return (
        
        <div className="main">
             <Navbar />            
                <div className="about">                   
                    <h4 className="titulo">Guilherme de Lima Menezes, 27</h4> 
                    <img className="pixel" src={pixel} />
                    <h4 className="sobre">Atualmente resido em Natal, Rio Grande do Norte. Sou estudante da UFRN onde também faço parte do time de Voleibol da instituição. Procuro me inserir no ramo de Desenvolvimento Web que é uma área que já me identifico a um bom tempo mas nunca entrei de cabeça o suficiente para tornar ela minha profissão. E agora chegou a hora.
                    <br /><br />Trabalhei durante 3 anos em uma empresa que o meu setor era responsável 
                    por realizar ações que buscavam apoiar o crescimento de Startups no nosso estado. 
                    O fator tecnologico das Startups me fez abrir os olhos para um mundo novo e de várias oportunidades nesse ramo do Desenvolvimento Web.
                    <br /><br />
                    Juntando minha paixão por tecnologia e a busca por novos ares na minha carreira, resolvi entrar de cabeça nos estudos do React.js e toda a stack envolvida no ecossistema. 
                    Sei que a jornada vai ser árdua e longa, mas acompanhe aqui o meu progresso nesse novo desafio.
                    <br /><br />
                    
                    
                    </h4>                   
                </div>
           
           
        </div>
    )
}

export default About
