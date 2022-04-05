import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class LineChart extends Component {

    //Seccion de Botones
    updatemenus = [
        {
            buttons: [
                {
                    args: [],
                    label: 'BOTON 1',
                },
                {
                    args: [],
                    label:'BOTON2',
                },
                {
                    args: [],
                    label:'BOTON3',
                },
                {
                    args: [],
                    label:'BOTON4',
                },
                {
                    args: [],
                    label:'BOTON5',
                },
            ],
            direction: 'left',
            pad: {'r': 10, 't': 10},
            showactive: true,
            type: 'buttons',
            x: 0.21,
            xanchor: 'left',
            y: 1.5,
            yanchor: 'top'
        }
    ]

    //Seccion de Grafica
    state = { //json de descripcion de la grafica
        line1: {
            x: [], //Valores de Inicio
            y: [],
            type: 'scatter',
            name: 'Presion',
            fill: 'tozeroy',
            fillcolor: '#E1F5F7', //Color del fill
            marker: {
                color: '#8FDCDF', //Color de la linea
                line: {
                    color: '#7ACDD0', //Color de la bolita
                    width: 2
                },
            },
        },
        layout: {
            datarevision: 0,
            title: "Presión del Sistema",
            font: { size: 14 },
            autosize: true,
            updatemenus: this.updatemenus,
        },
        config: {
            scrollZoom: true,
            displaylogo: false,
        },
        style: { width: "100%", height: "700px" },
        revision: 0,
    }

    componentDidMount() { //Si carga bien el programa, refrescarla cada 1000 ms
        setInterval(this.refreshGraphic, 200);
    }

    refreshGraphic = () => {  // Accion para refrescar la 
        const { line1, layout } = this.state;
        line1.x.push(this.state.revision + 1);
        line1.y.push((Math.random() * 10) + 120);

        /*
        if (line1.x.length >= 10) {
            line1.x.shift();
            line1.y.shift();
        }
        */

        this.setState({ revision: this.state.revision + 1 });
        layout.datarevision = this.state.revision + 1;
    }

    render() {
        return (
            <div>
                <Plot
                    data={[
                        this.state.line1,
                    ]}
                    layout={this.state.layout}
                    revision={this.state.revision}
                    config={this.state.config}
                    style={this.state.style}
                    useResizeHandler
                    graphDiv="graph"
                />
            </div>
        );
    }

}

export default LineChart