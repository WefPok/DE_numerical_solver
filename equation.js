class Equation {
    constructor(x0, y0, X, N) {
        this.x0 = x0;
        this.y0 = y0;
        this.N = N;
        this.X = X
        this.constant = this.getConstant(x0, y0);
        this.step = (X-x0)/N
    }
    getConstant(x0, y0){
        return (y0+Math.log(x0))/(Math.log(x0)**2)
    }

    fxy(x, y){
        return (1/x)+(2*y/(x*Math.log(x)))
    }

    fx(x){
        return (Math.log(x)*Math.log(x))*this.constant - Math.log(x)
    }

    getSolution(N = this.N){
        const step = (this.X - this.x0)/N
        let y_coords = [];
        let x_coords = [];
        let x = this.x0
        let y = this.y0
        for (let i = 0; i < N + 1; i++) {
            y = this.fx(x + step*i)
            if (y>10000){
                console.log("INFINITY")
                x_coords.push(x + step*i)
                y_coords.push(y_coords[i-1])
            }
            else{
                x_coords.push(x + step*i)
                y_coords.push(y)

            }

        }

        return {
            name: 'Exact Solution',
            mode: 'lines+markers',
            x: x_coords,
            y: y_coords,
            type: 'scatter',
            marker: {
                color: '#4285F4',
                size: 4
            },
            line: {
                color: '#4285F4',
                width: 2
            }
        }
    }
}