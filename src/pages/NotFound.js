import React from 'react'
import NotFound from '../images/NotFound.jpg';

function Notfound()  {
    return (
        // <h1 className="Content NotFound">Comming soon :(</h1>
        <div className="Content">
            <img className="img-fluid NotFound" src={NotFound} alt="Comming soon"/>
        </div>
        
    );
}

export default Notfound;