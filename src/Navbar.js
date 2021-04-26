import React from 'react';
import './styles/Navbar.css';
import './styles/Navitems.css'
import {Link} from 'react-router-dom';


function Navbar() {   

    const navStyle = {
        textDecoration: 'none',        
    }

    return (
    
                <div className="navbar">               
                    <Link className="navitems" style={navStyle} to="/">Home</Link>  
                    <Link className="navitems" style={navStyle} to="/about">About</Link> 
                    <Link className="navitems" style={navStyle} to="/projects">Projects</Link> 
            
        </div>
    )
}

export default Navbar
