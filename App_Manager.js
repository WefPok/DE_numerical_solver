class App_Manager{
    constructor(x0, y0, X, N) {
        this._x0 = x0;
        this._y0 = y0;
        this._X = X;
        this._N = N;
        this.equation = new Equation(x0, y0, X, N)
        this.error_analyzer = new Error_analyzer(this.equation)
    }
    solution_layout = {
        title:'Exact Solution Graph',
        'xaxis.autorange': true,
        'yaxis.autorange': true,
        height: 600,
        width: 750,
        showlegend: true,
        legend: {
            x: 0,
            xanchor: 'left',
            y: 1,
            bgcolor: 'transparent'
        },
        plot_bgcolor:"#e9ecef",
        xaxis: {
            gridcolor: '#bdbdbd',
            linewidth: 6,
            zerolinecolor: '#969696',
            zerolinewidth: 4,
            showline: true,

            tickfont: {
                family: 'Arial',
                size: 12,
                color: 'rgb(82, 82, 82)'
            },
            title: {
                text: "x-axis",
                standoff: 40
            }
        },
        yaxis: {
            gridcolor: '#bdbdbd',
            linewidth: 6,
            zerolinecolor: '#969696',
            zerolinewidth: 4,
            showline: true,
            tickfont: {
                family: 'Arial',
                size: 12,
                color: 'rgb(82, 82, 82)'
            },
            title: {
                text: "y-axis",
                standoff: 40
            }
        }
    }
    error_layout = {
        title:'Error Graph',
        'xaxis.autorange': true,
        'yaxis.autorange': true,
        height: 500,
        width: 610,
        showlegend: true,
        legend: {"orientation": "h"},
        plot_bgcolor:"#e9ecef",
        xaxis: {
            gridcolor: '#bdbdbd',
            linewidth: 6,
            zerolinecolor: '#969696',
            zerolinewidth: 4,
            showline: true,

            tickfont: {
                family: 'Arial',
                size: 12,
                color: 'rgb(82, 82, 82)'
            },
            title: {
                text: "x-axis",
                standoff: 40
            }
        },
        yaxis: {
            gridcolor: '#bdbdbd',
            linewidth: 6,
            zerolinecolor: '#969696',
            zerolinewidth: 4,
            showline: true,
            tickfont: {
                family: 'Arial',
                size: 12,
                color: 'rgb(82, 82, 82)'
            },
            title: {
                text: "y-axis",
                standoff: 40
            }
        }
    }
    update_Manager(){
        this._x0 = Number(document.getElementById("inputx0").value)
        this._y0 = Number(document.getElementById("inputy0").value)
        this._X = Number(document.getElementById("inputX").value)
        this._N = Number(document.getElementById("inputN").value)
        this.equation = new Equation(this._x0, this._y0, this._X, this._N)
        this.error_analyzer = new Error_analyzer(this.equation)
    }
    redraw_solution(traces){
        this.solution_layout.title = 'Exact and Numerical Solutions'
        Plotly.newPlot('solution_graph', traces, this.solution_layout);
    }

    redraw_error(traces_local, traces_global){
        this.error_layout.title = 'Local Truncation Error'
        Plotly.newPlot('local_error_graph', traces_local, this.error_layout)
        this.error_layout.title = 'Global Truncation Error'
        Plotly.newPlot('global_error_graph', traces_global, this.error_layout)
    }

}