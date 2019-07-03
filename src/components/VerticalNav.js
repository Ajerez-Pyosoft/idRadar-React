import React from 'react';
import './styles/VerticalNav.css';
import {Link} from 'react-router-dom';

class VerticalNav extends React.Component {
    render(){
        return(
            <React.Fragment>
            <nav className ="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul className="nav sidebar-nav">
                <li>
                <Link to="/Main">Home</Link>
                </li>
                <li>
                <Link to="/Witsml">Witsml</Link>
                </li>
                <li>
                    <Link to="/DataReview">Data review</Link>
                </li>
                <li>
                <Link to="/ProgressCurve">Progress curve</Link>
                </li>
                {/* <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-header">Dropdown heading</li>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li> */}
                <li>
                <Link to="/MseHmse">MSE-HMSE vs Rop</Link>
                </li>
                <li>
                <Link to="/RadarChart">Radar Charts</Link>
                </li>
                <li>
                <Link to="/Contact">Contact us</Link>
                </li>
                <li>
                <Link to="www.twitter.com">Follow us</Link>
                </li>
            </ul>
        </nav>
            </React.Fragment>
        );
    }
} 

export default VerticalNav; 