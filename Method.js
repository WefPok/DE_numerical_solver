class Method {
    constructor(equation, name, color) {
        if (this.constructor === Method) {
            throw new Error("Instantiation of abstract class");
        }
        this.equation = equation
        this.approximate = this.getSolution()
        this.name = name
        this.color = color
    }
    next(){

    }

    getSolution(N = this.equation.N){
        const step = (this.equation.X-this.equation.x0)/N
        let x_coords = [];
        let y_coords = [];
        let x = this.equation.x0;
        let y = this.equation.y0;
        let y_prev, x_prev

        x_coords.push(x)
        y_coords.push(y)
        for (let i = 1; i < N + 1; i++) {
            x_prev = x_coords[i-1]
            y_prev = y_coords[i-1]
            y = this.next(x_prev, y_prev, step)
            x_coords.push(x + step*i)
            y_coords.push(y)
        }

        let result = {
            name: `${this.name} Numerical Solution`,
            mode: 'lines+markers',
            x: x_coords,
            y: y_coords,
            type: 'scatter',
            marker: {
                color: this.color,
                size: 4
            },
            line: {
                color: this.color,
                width: 2
            }
        }

        this.approximate = result
        return result
    }

    getLocalError(){
        const global_error= [0]
        let exact_trace = this.equation.getSolution()
        for (let i = 0; i < exact_trace.y.length-1; i++) {
            // Previous Method of LTE calculation, that was discussed on Labs
            // local_error.push(Math.abs(this.next(exact_trace.x[i], exact_trace.y[i], step) - exact_trace.y[i+1]))

            // New LTE calculation
            global_error.push(Math.abs(exact_trace.y[i+1] - this.approximate.y[i+1]))
        }

        return {
            name: `LTE ${this.name}`,
            mode: 'lines+markers',
            x: exact_trace.x,
            y: global_error,
            type: 'scatter',
            marker: {
                color: this.color,
                size: 4
            },
            line: {
                color: this.color,
                width: 2
            }
        }
    }

    getMaxError(){
        let difference = this.equation.X - this.equation.x0
        let nexact, napproximate, max
        const max_errorsX = []
        const max_errorsY = []
        for (let n = 1; n < this.equation.N+1; n++) {
            if (difference/n > 1){
                continue
            }
            nexact = this.equation.getSolution(n).y
            napproximate = this.getSolution(n).y

            max = 0

            for (let i = 0; i < nexact.length; i++) {
                if (Math.abs(nexact[i]-napproximate[i]) > max){
                    max = Math.abs(nexact[i]-napproximate[i])
                }
            }

            max_errorsX.push(n)
            max_errorsY.push(max)
        }
        return {
            name: `Max Error ${this.name}`,
            mode: 'lines+markers',
            x: max_errorsX,
            y: max_errorsY,
            type: 'scatter',
            marker: {
                color: this.color,
                size: 4
            },
            line: {
                color: this.color,
                width: 2
            }
        }
    }
}