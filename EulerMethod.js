class EulerMethod extends Method{


    next(x_prev, y_prev, step){
        return  y_prev + step*this.equation.fxy(x_prev, y_prev)
    }


    getSolution(equation){
        const step = this.equation.step
        let x_coords = [];
        let y_coords = [];
        let x = this.equation.x0
        let y = this.equation.y0
        let y_prev, x_prev

        x_coords.push(x)
        y_coords.push(y)
        for (let i = 1; i < this.equation.N + 1; i++) {
            x_prev = x_coords[i-1]
            y_prev = y_coords[i-1]
            y = this.next(x_prev, y_prev, step)
            x_coords.push(x + step*i)
            y_coords.push(y)
        }

        let result = {
            name: 'Euler Numerical Solution',
            mode: 'lines+markers',
            x: x_coords,
            y: y_coords,
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

        this.approximate = result
        return result
    }


    getError(exact_trace){
        const step = this.equation.step
        const local_error= [0]
        const global_error= [0]
        for (let i = 0; i < exact_trace.x.length-1; i++) {
            local_error.push(Math.abs(this.next(exact_trace.x[i], exact_trace.y[i], step) - exact_trace.y[i+1]))
            global_error.push(Math.abs(exact_trace.y[i+1] - this.approximate.y[i+1]))
        }

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
}