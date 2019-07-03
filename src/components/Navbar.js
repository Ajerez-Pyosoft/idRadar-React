import React from 'react'
import {Link} from 'react-router-dom';
import './styles/Navbar.css';

import Logo from '../images/logoID.png'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <div className="Navbar__logo">
                                <img className="img-fluid" src={Logo} alt="Logo"/>
                                <label className="Navbar__LogoText ">INTELIGENT DRILLING | IdRadar</label>
                        </div>
                    </Link>   
                </div>
                
            </div>
        );
    }
}

export default Navbar;