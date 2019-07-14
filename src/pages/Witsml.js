import React from 'react';
import WitsmlForm from '../components/WitsmlForm';
import DocumentC from '../Document';

import './styles/Witsml.css';

class Witsml extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            ddlType:'',
            ddlFilter:'',
            dataFrom: '',
            dataTo: '',
        }
    };

    handleChange = e => {
    
        this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
        },
    });

    const txt = document.getElementsByClassName('inputs');
    var i;
    for(i = 0; i < txt.length; i++) {

        if(txt[i].type === "text") {

            if(txt[1].value ===  "1") {
                txt[i].placeholder = "Ej: 2019-05-11 11:30";
            }
            else if(txt[1].value ===  "2") {
                txt[i].placeholder = "Ej: 1000";
            }
        }        
    }
    };

    handleSubmit = async  e => {
        e.preventDefault();
        this.setState({loading: true, error: null});
        
        try {
            const witsEncabezados = await DocumentC.witsml.headers(); 
            const witsRegistros = await DocumentC.witsml.xml(this.state.form);

           console.log(witsEncabezados);
           console.log(witsRegistros);

        } catch (error) {
            this.setState({loading: false, error: error})
        }
        
    }

    render () {
        return (
            <React.Fragment>
                <div className="Container Content">
                    <div className="Box grouper">
                        <h3 className="title" >WITSML</h3>
                        <div className="row">
                            <div className="col dataLog witsml Box">
                                <WitsmlForm onChange={this.handleChange}
                                    formValues={this.state.form}
                                    onSubmit={this.handleSubmit}
                                    error={this.state.error}
                                />                        
                            </div>
                            {/* <div className="col message witsml Box">
                            <h4 className="title">message data</h4>
                                <WitsmlForm onChange={this.handleChange}
                                    formValues={this.state.form}
                                    onSubmit={this.handleSubmit}
                                    error={this.state.error}
                                />                        
                            </div> */}
                        </div> 
                    </div>
                    
                </div>                
            </React.Fragment>
        );
    }
}

export default Witsml;