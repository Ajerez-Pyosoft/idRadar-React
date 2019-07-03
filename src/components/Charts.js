import React from 'react';
import {Scatter , Radar, Bar} from 'react-chartjs-2';

import './styles/Charts.css';

class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Loss', 'Influx', 'RopO', 'Pipe Move', 'Npt', 'Tight'],
                datasets: [{
                     label: 'idRadar',
                     data: [25, 50, 13, 74, 0, 10],
                     backgroundColor: [ 'rgba(255, 99, 132, 0.6)',
                                   'rgba(54, 162, 235, 0.6)',
                                   'rgba(75, 192, 192, 0.6)' 
                ],   
                }],
            },
            RadarData: {
                labels: ['Loss', 'Influx', 'RopO', 'Pipe Move', 'Npt', 'Tight'],
                datasets: [{
                     label: 'idRadar',
                     data: [25, 50, 13, 74, 0, 10],
                     backgroundColor: [ 'rgba(54, 162, 235, 0.6)'
                        ],   
                    }, {
                        label: 'idRadar second',
                        data: [30, 50, 24, 80, 60, 18],
                        backgroundColor: [ 'rgba(255, 99, 132, 0.6)',
                   ],   
                   }
            
                ],
            },
            ScatterData: {
                // labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
                datasets: [{
                     label: 'AFE',
                    //  data: [{x: 25, y: 10}, {x: 50, y: 15}, {x: 13, y: 20}, {x: 74, y: 20}, {x:0, y: 15}, {x: 10, y: 10}],
                     data: [{x:'2019-11-24 00:30:00', y:0} , 
                            {x:'2019-11-24 01:30:00', y:20}, 
                            {x:'2019-11-24 02:30:00', y:54}, 
                            {x:'2019-11-24 03:30:00', y:60}, 
                            {x:'2019-11-24 04:30:00', y:110}, 
                            {x:'2019-11-24 05:30:00', y:180}],
                            
                     borderColor : ['rgba(75, 192, 192, 0.6)' 
                                ],
                    lineTension: 0.1,
                    showLine: true,   
                    },
                        {
                            label: 'Real time',
                            //  data: [{x: 25, y: 10}, {x: 50, y: 15}, {x: 13, y: 20}, {x: 74, y: 20}, {x:0, y: 15}, {x: 10, y: 10}],
                             data: [{x:'2019-11-24 00:30:00', y:0} , 
                                    {x:'2019-11-24 01:30:00', y:30}, 
                                    {x:'2019-11-24 02:30:00',y:54}, 
                                    {x:'2019-11-24 03:30:00',y:54}, 
                                    {x:'2019-11-24 04:30:00',y:100}, 
                                    {x:'2019-11-24 05:30:00',y:140}],
                                    
                             borderColor : ['rgba(54, 162, 235, 0.6)' 
                                        ],
                            lineTension: 0.2, 
                            showLine: true,

                    }
                ],
            }
        }
    }

    componentDidMount(){
        this.fetchDrillEncabezados();
    }

    fetchDrillEncabezados = async () => {
        const response = await fetch('http://localhost:3000/api/Witsencabezados');
        const data = await response.json();

        console.log(data);
    }
    
    render () {
        return (
            <React.Fragment>
                <div className="Charts bar">
                    <h4 className="title">BAR RESULTS</h4>
                    <Bar
                        data= {this.state.chartData}
                        options={{ maintainAspectRatio: false
                        }}
                    />
                </div>
                
                <div className="Charts radar">
                <h4 className="title">RADAR RESULTS</h4>
                    <Radar 
                        data= {this.state.RadarData}
                        options= {{
                                scales: {
                                display: false,
                            }
                        }}
                    />
                </div>
                <div className="Charts Scatter">
                <h4 className="title">PROGRESS CURVE RESULTS</h4>
                    <Scatter 
                        data= {this.state.ScatterData}
                        options= {{
                                scales: {
                                    yAxes: [
                                        {
                                            type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                            display: true,
                                            position: "left",
                                            id: "y-axis-1",
                                            ticks : {
                                                reverse : true
                                            },
                                            // grid line settings
                                            gridLines: {
                                                drawOnChartArea: false, // only want the grid lines for one axis to show up
                                            }
                                        
                                        }
                                    ],
                                    xAxes: [
                                        {
                                            type: 'time',
                                            time: { parser: 'YYYY/MM/DD HH:mm:ss'} 
                                        }
                                    ],                                
                            }
                        }}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Charts;