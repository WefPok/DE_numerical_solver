class Error_analyzer {
    // constructor(trace1, trace2) {
    //     this.trace1 = trace1
    //     this.trace2 = trace2
    // }
    constructor(equation) {
        this.equation = equation
    }
    eulerStep(x_prev, y_prev, step){
        return  y_prev + step*this.equation.fxy(x_prev, y_prev)
    }
    improvedEulerStep(x_prev, y_prev, step){
        const k1 = step * this.equation.fxy(x_prev, y_prev)
        const k2 = step * this.equation.fxy(x_prev + step, y_prev + k1)
        return  y_prev + (k1 + k2)/2
    }
    rungeKuttaStep(x_prev, y_prev, step){
        const k1 = step*this.equation.fxy(x_prev, y_prev)
        const k2 = step*this.equation.fxy(x_prev + step/2, y_prev + k1/2)
        const k3 = step*this.equation.fxy(x_prev + step/2, y_prev + k2/2)
        const k4 = step*this.equation.fxy(x_prev + step, y_prev + k3)
        return  y_prev+(1/6)*(k1 + 2*k2 + 2*k3 + k4)
    }
    getEulerError(exact_trace, approximate_trace){
        const step = this.equation.step
        const local_error= [0]
        const global_error= []
        for (let i = 0; i < exact_trace.x.length-1; i++) {
            local_error.push(Math.abs(this.eulerStep(exact_trace.x[i], exact_trace.y[i], step) - exact_trace.y[i+1]))
            global_error.push(Math.abs(exact_trace.y[i] - approximate_trace.y[i]))
        }
        console.log(exact_trace.x, global_error)
        const local_error_trace = {
            name: 'LTE Euler',
                mode: 'lines+markers',
                x: exact_trace.x,
                y: local_error,
                type: 'scatter',
                marker: {
                color: '#E91E1E',
                    size: 7
            },
            line: {
                color: '#E91E1E',
                    width: 3
            }
        }

        const global_error_trace = {
            name: 'GTE Euler',
            mode: 'lines+markers',
            x: exact_trace.x,
            y: global_error,
            type: 'scatter',
            marker: {
                color: '#E91E1E',
                size: 7
            },
            line: {
                color: '#E91E1E',
                width: 3
            }
        }
        return [local_error_trace, global_error_trace]

    }

    getImprovedEulerError(exact_trace, approximate_trace){
        const step = this.equation.step
        const local_error= [0]
        const global_error= []
        for (let i = 0; i < exact_trace.x.length-1; i++) {
            local_error.push(Math.abs(this.improvedEulerStep(exact_trace.x[i], exact_trace.y[i], step) - exact_trace.y[i+1]))
            global_error.push(Math.abs(exact_trace.y[i] - approximate_trace.y[i]))
        }

        const local_error_trace = {
            name: 'LTE Improved Euler',
            mode: 'lines+markers',
            x: exact_trace.x,
            y: local_error,
            type: 'scatter',
            marker: {
                color: '#FFA500',
                size: 7
            },
            line: {
                color: '#FFA500',
                width: 3
            }
        }

        const global_error_trace = {
            name: 'GTE Improved Euler',
            mode: 'lines+markers',
            x: exact_trace.x,
            y: global_error,
            type: 'scatter',
            marker: {
                color: '#FFA500',
                size: 7
            },
            line: {
                color: '#FFA500',
                width: 3
            }
        }
        return [local_error_trace, global_error_trace]
    }

    getRungeKuttaError(exact_trace, approximate_trace){
        const step = this.equation.step
        const local_error= [0]
        const global_error= []
        for (let i = 0; i < exact_trace.x.length-1; i++) {
            local_error.push(Math.abs(this.rungeKuttaStep(exact_trace.x[i], exact_trace.y[i], step) - exact_trace.y[i+1]))
            global_error.push(Math.abs(exact_trace.y[i] - approximate_trace.y[i]))
        }

        const local_error_trace = {
            name: 'LTE Runge Kutta',
            mode: 'lines+markers',
            x: exact_trace.x,
            y: local_error,
            type: 'scatter',
            marker: {
                color: '#5cb85c',
                size: 7
            },
            line: {
                color: '#5cb85c',
                width: 3
            }
        }

        const global_error_trace = {
            name: 'GTE Runge Kutta',
            mode: 'lines+markers',
            x: exact_trace.x,
            y: global_error,
            type: 'scatter',
            marker: {
                color: '#5cb85c',
                size: 7
            },
            line: {
                color: '#5cb85c',
                width: 3
            }
        }
        return [local_error_trace, global_error_trace]

    }
}