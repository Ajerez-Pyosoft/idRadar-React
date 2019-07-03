import React from 'react';
import Login from '../components/Login';
import './styles/LoginNew.css'

class LoginNew extends React.Component {
    render() {
        return (
            <div>
            <div className="bg-image">
            </div>
                <div className="container">
                <div className="row">
                        <div className="col">
                            <Login/>
                        </div>    
                    </div>
                </div>                
            </div>
        );    
    }
}

export default LoginNew;