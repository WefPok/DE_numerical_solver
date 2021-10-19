class App_Manager{
    constructor(x0, y0, X, N) {
        this._x0 = x0;
        this._y0 = y0;
        this._X = X;
        this._N = N;
        this.equation = new Equation(x0, y0, X, N)
        this.methods = []
        this.current_exact_trace = {}
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
                text: "x value",
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
                text: "y value",
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
                text: "Error",
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
        this.methods.length = 0

        this.current_exact_trace = this.equation.getSolution()

        if (document.getElementById('method1').checked){
            this.methods.push(new EulerMethod(this.equation, 'Euler', '#E91E1E'))
        }
        if (document.getElementById('method2').checked){
            this.methods.push(new ImprovedEulerMethod(this.equation, 'Improved Euler', '#FFA500'))
        }
        if (document.getElementById('method3').checked){
            this.methods.push(new RungeKuttaMethod(this.equation, 'Runge Kutta', '#5cb85c'))
        }
    }


    redraw_solution(){
        const traces = []
        traces.push(this.current_exact_trace)
        this.methods.forEach(
            function addMethod(Method){
                traces.push(Method.getSolution())
            }
        )
        this.solution_layout.title = 'Exact and Numerical Solutions'
        Plotly.newPlot('solution_graph', traces, this.solution_layout);
    }


    redraw_error(){
        const traces_local = []
        const traces_global = []
        let error

        for (let method of this.methods) {
            traces_local.push(method.getLocalError())
            traces_global.push(method.getMaxError())
        }
        this.error_layout.title = 'Local Truncation Error'
        Plotly.newPlot('local_error_graph', traces_local, this.error_layout)
        this.error_layout.title = 'Max Error'
        Plotly.newPlot('global_error_graph', traces_global, this.error_layout)
    }

}