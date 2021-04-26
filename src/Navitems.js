import React from 'react'
import './styles/Navitems.css'


function Navitems(props) {

function Link(){     
    return props.link;
}

    return (
        
        <div className="navitems" onClick={Link}>
           
        </div>
    )
}

export default Navitems
