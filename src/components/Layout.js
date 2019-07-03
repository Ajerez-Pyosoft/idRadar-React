import React from 'react'
import Navbar from './Navbar';
import VerticalNav from '../components/VerticalNav';

function Layout (props) {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="Navigator">                            
                <VerticalNav/>
            </div>            
            {props.children}
        </React.Fragment>
    );
}

export default Layout;