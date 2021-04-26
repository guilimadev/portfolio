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

            <div className="middle">
                <ul>
                    <Link style={navStyle} to="/">
                        <li className="navitems">Home </li>
                    </Link>  

                    <Link style={navStyle} to="/about">        
                    <li className="navitems">About </li>
                    </Link> 

                    <Link style={navStyle} to="/">  
                        <li className="navitems">Projects </li>
                    </Link>  
                </ul>               
            </div>            
            
        </div>
    )
}

export default Navbar
