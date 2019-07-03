import React from 'react';
import {Link} from 'react-router-dom';
import "./styles/Login.css";

import logo from '../images/logoID.png'

class Login extends React.Component {
render() {
    return (
        <div className="Login">
            {/* <div className="Login__Esquina">
                <img src={esquina} alt="Logo"/>
            </div> */}
            <div className="container">
                <div className="Login__Tittle">
                    <h1>Sign up</h1>
                </div>
                <div className="Login__Form">
                    <input type="text"/>
                    <p>___________________________________<br/>
                    User or Email</p>
                    <input type="text"/>
                    <p>___________________________________<br/>
                    Password</p>
                    <input type="checkbox" name="cbLogin" id="cbLogin" className="Login__check" /><label htmlFor="cbLogin"></label><label className="Login__checklabel">I want to keep me login.</label><br/>
                </div>
                <div className="Login__button">
                    <Link  className="button_style" to="/Main">
                        LOG ME IN
                    </Link> 
                </div>
                <div className="Login__logo">
                        <img src={logo} alt="Logo"/>
                        <label className="Login__LogoText">INTELIGENT DRILLING</label>
                </div>
            </div>
        </div>
    );    
}

}
export default Login;
