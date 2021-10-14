
function refresh_graph(x0, y0, X, N, methods){
    // Exact solution
    let difference = X-x0
    let step = difference/N
    let constant = getConstant(x0, y0)

    let exact_solution = {
        name: 'Exact Solution',
        mode: 'lines+markers',
        x: [],
        y: [],
        type: 'scatter',
    }

    for (let i = 0; i < N + 1; i++) {
        exact_solution.x.push(x0 + step*i)
        exact_solution.y.push(getY(x0+step*i, constant))
    }


    const x_data = []
    const y_data = []
    let numerical_solution = {
        name: 'Numerical Solution',
        mode: 'lines+markers',
        x: x_data,
        y: y_data,
        type: 'scatter',
    }

    //Updating graph
    var update = {
        'xaxis.autorange': true,
        'yaxis.autorange': true,
        title:'Exact & Numerical solutions graph',
    };
    Plotly.newPlot('solution_graph', [exact_solution], layout);
    Plotly.relayout('solution_graph', update)

}

function euler_method(x0, y0, X, N, x_data, y_data){
    x_data.push(1)
}