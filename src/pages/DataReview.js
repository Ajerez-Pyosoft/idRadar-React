import React from 'react';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';

import DocumentC from '../Document';

import './styles/DataReview.css';

class DataReview extends React.Component {
        state = {
            loading: true,
            error: null,
            data: [{}],
            dataHeaders: [{}],
        }

        componentDidMount () {
            this.fetchDataInfo();
            this.fetchHeaders();
        }

        fetchDataInfo = async () => {

            const options = {};

            options.headers = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              };
            this.setState({loading: true, error: null})

            try {
                const data1 = await fetch('http://localhost:3000/api/Witsdrillinfos', options).then(res => res.json()); 
                // console.log(data);
                this.setState({loading: false, data: data1})
            } catch (error) {
                this.setState({loading: false, error: error})
            }
        }

        fetchHeaders = async () => {
            const options = {};

            options.headers = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              };
             try{
                const data2 = await DocumentC.witsml.headers();
                //await fetch('http://localhost:3000/api/Witsencabezados', options).then(res => res.json());
                // const data = response.json();

                // console.log(data);
                this.setState({loading: false, dataHeaders: data2})
                // console.log(this.state.dataHeaders);
             } catch(error) {
                this.setState({loading: false, error: error})
             }
        }

        render(){
            if(this.state.loading) {
                return <div className="Content"><PageLoading/></div> 
            }

            if(this.state.error) {
                return <div className="Content"><PageError error={this.state.error}/></div> 
            }

            const drillInfo = this.state.data;
            const headers = this.state.dataHeaders;

        return (
            <React.Fragment>
                <div className="Content">
                    
                    
                    <div className = "ListInfo Box">
                    <h4 className="title"> DATA REVIEW</h4> 
                    {drillInfo.map((test) => {
                        return(
                                <table className="table table-striped table-dark table-bordered" key={test.wdiuid}>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Feature</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Uid</td>
                                            <td>{test.wdiuid}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>UidWell</td>
                                            <td>{test.wdiuidwell}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>UidWellBore</td>
                                            <td>{test.wdiuidwellbore}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Well</td>
                                            <td>{test.wdiwell}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>WellBore</td>
                                            <td>{test.wdiwellbore}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        );                
                    })}
                    </div>
                    

                    <div className = "ListEncabezados Box">
                    <h4 className="title">WITS LIST</h4>
                    <table className="table table-striped table-dark table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Item</th>
                                            <th scope="col">Mnemonic alias</th>
                                            <th scope="col">Mnemonic</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Units</th>
                                            <th scope="col">Null value</th>
                                            <th scope="col">Registration date</th>
                                        </tr>
                                    </thead>
                    {headers.map((test) => {
                        return(<tbody key={test.wieid}>
                                        <tr>
                                            <td>{test.wieid}          </td>
                                            <td>{test.wieitem}         </td>
                                            <td>{test.wiemnemalias}    </td>
                                            <td>{test.wiemnemonic}     </td>
                                            <td>{test.wiedescription}  </td>
                                            <td>{test.wieunit}         </td>
                                            <td>{test.wienullvalue}    </td>
                                            <td>{test.wiefecharegistro}</td>
                                        </tr>    
                            </tbody>
                        );                
                    })}
                    </table>
                </div>    
                </div>            
            </React.Fragment>
        );
    }
}

export default DataReview;