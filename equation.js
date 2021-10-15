class Equation {
    constructor(x0, y0, X, N) {
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.N = N;
        this.constant = this.getConstant(x0, y0);
        this.difference = X-x0
        this.step = this.difference/N
    }
    getConstant(x0, y0){
        return (y0+Math.log(x0))/(Math.log(x0)**2)
    }

    fxy(x, y){
        return (1/x)+(2*y/(x*Math.log(x)))
    }

    getExactTrace(){
        let x_coords = [];
        let y_coords = [];
        let x = this.x0
        let y = this.y0
        for (let i = 0; i < this.N + 1; i++) {
            y = (Math.log(x + this.step*i)*Math.log(x + this.step*i))*this.constant - Math.log(x + this.step*i)
            x_coords.push(x + this.step*i)
            y_coords.push(y)
        }

        return {
            name: 'Exact Solution',
            mode: 'lines+markers',
            x: x_coords,
            y: y_coords,
            type: 'scatter',
            marker: {
                color: '#4285F4',
                size: 7
            },
            line: {
                color: '#4285F4',
                width: 3
            }
        }
    }

    getEulerTrace(){
        let x_coords = [];
        let y_coords = [];
        let x = this.x0
        let y = this.y0
        let y_prev
        let x_prev
        x_coords.push(x)
        y_coords.push(y)
        for (let i = 1; i < this.N + 1; i++) {
            x_prev = x_coords[i-1]
            y_prev = y_coords[i-1]
            y = y_prev + this.step*this.fxy(x_prev, y_prev)
            x_coords.push(x + this.step*i)
            y_coords.push(y)
        }
        return {
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
    }

    getImprovedEulerTrace() {
        let x_coords = [];
        let y_coords = [];
        let x = this.x0;
        let y = this.y0;
        let y_prev, x_prev, k1, k2;

        x_coords.push(x)
        y_coords.push(y)
        for (let i = 1; i < this.N + 1; i++) {
            x += this.step

            x_prev = x_coords[i - 1]
            y_prev = y_coords[i - 1]

            k1 = this.step * this.fxy(x_prev, y_prev)
            k2 = this.step * this.fxy(x_prev + this.step, y_prev + k1)
            y = y_prev + (k1 + k2)/2

            x_coords.push(x)
            y_coords.push(y)
        }
        return {
            name: 'Improved Euler Numerical Solution',
            mode: 'lines+markers',
            x: x_coords,
            y: y_coords,
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

    }

    getRungeKuttaTrace(){
        let x_coords = [];
        let y_coords = [];
        let x = this.x0;
        let y = this.y0;
        let y_prev, x_prev, k1, k2, k3, k4;

        x_coords.push(x)
        y_coords.push(y)
        for (let i = 1; i < this.N + 1; i++) {
            x += this.step

            x_prev = x_coords[i - 1]
            y_prev = y_coords[i - 1]

            k1 = this.step*this.fxy(x_prev, y_prev)
            k2 = this.step*this.fxy(x_prev + this.step/2, y_prev + k1/2)
            k3 = this.step*this.fxy(x_prev + this.step/2, y_prev + k2/2)
            k4 = this.step*this.fxy(x_prev + this.step, y_prev + k3)
            y = y_prev+(1/6)*(k1 + 2*k2 + 2*k3 + k4)

            x_coords.push(x)
            y_coords.push(y)
        }
        return {
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
    }
}