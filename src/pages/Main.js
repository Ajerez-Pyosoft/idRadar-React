import React from 'react';
import './styles/Main.css';

import Charts from '../components/Charts';

class Main extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="Maincontainer">
                    
                        
                        <div className="Content">
                            <Charts/>
                        </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Main;