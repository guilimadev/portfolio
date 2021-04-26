import React from 'react';
// import Sidebar from './Sidebar';
import Body from './Body';
import About from './About';

import './styles/Main.css';
import Navbar from './Navbar';


function Main() {
    return (
        <div className="main">
            <Navbar />
            <Body />            
            
        </div>
    )
}
export default Main
