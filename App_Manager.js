class App_Manager{
    constructor(x0, y0, X, N) {
        this._x0 = x0;
        this._y0 = y0;
        this._X = X;
        this._N = N;
        this.equation = new Equation(x0, y0, X, N)
    }
    layout = {
        title:'Exact Solution Graph',
        'xaxis.autorange': true,
        'yaxis.autorange': true,
        height: 600,
        width: 800,
        showlegend: true,
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
    }
    redraw_graphs(traces){
        Plotly.newPlot('solution_graph', traces, this.layout);
    }

}