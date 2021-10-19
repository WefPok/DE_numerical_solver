class RungeKuttaMethod extends Method{


    next(x_prev, y_prev, step) {
        const k1 = step*this.equation.fxy(x_prev, y_prev)
        const k2 = step*this.equation.fxy(x_prev + step/2, y_prev + k1/2)
        const k3 = step*this.equation.fxy(x_prev + step/2, y_prev + k2/2)
        const k4 = step*this.equation.fxy(x_prev + step, y_prev + k3)
        return  y_prev+(1/6)*(k1 + 2*k2 + 2*k3 + k4)
    }


    getSolution(){
        const step = this.equation.step
        let x_coords = [];
        let y_coords = [];
        let x = this.equation.x0;
        let y = this.equation.y0;
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
            name: 'Runge Kutta Numerical Solution',
            mode: 'lines+markers',
            x: x_coords,
            y: y_coords,
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