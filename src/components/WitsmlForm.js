import React from 'react';

import './styles/WitsmlForm.css'

class WitsmlForm extends React.Component {
    render() {
        return(
            <React.Fragment>
                
                <form action="" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Witsml type: </label>
                        <select onChange={this.props.onChange}
                                name="ddlType"
                                className="form-control inputs"
                                value={this.props.formValues.type}>
                            <option value="-1">--Select--</option>
                            <option value="1">Log data</option>
                            <option value="2">Message</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Filter Type: </label>
                        <select onChange={this.props.onChange}
                                name="ddlFilter"
                                className="form-control inputs"
                                value={this.props.formValues.type}>
                            <option value="-1">--Select--</option>
                            <option value="1">By Date</option>
                            <option value="2">By Depth</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>From:</label>
                        <input  onChange={this.props.onChange} 
                                className="form-control inputs"
                                type="text"
                                name="dataFrom"
                                value={this.props.formValues.dateFrom}
                                placeholder="Ej:" />
                    </div>
                    <div className="form-group">
                        <label>To:</label>
                        <input  onChange={this.props.onChange} 
                                className="form-control inputs"
                                type="text"
                                name="dataTo"
                                value={this.props.formValues.dateTo}
                                placeholder="Ej:" />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary" >Create</button>
                    {this.props.error && <p className="text-danger">{this.props.error.message}</p> }
                </form>
            </React.Fragment>
        );
    }
}

export default WitsmlForm;