class ExactMethod extends Method{
    next(x){
        return (Math.log(x)*Math.log(x))*this.equation.constant - Math.log(x)
    }

    getSolution(N = this.equation.N){
        const step = this.equation.step
        let x_coords = [];
        let y_coords = [];
        let x = this.equation.x0
        let y = this.equation.y0
        for (let i = 0; i < N + 1; i++) {
            y = this.next(x + step*i)
            x_coords.push(x + step*i)
            y_coords.push(y)
        }

        return {
            name: `${this.name} Solution`,
            mode: 'lines+markers',
            x: x_coords,
            y: y_coords,
            type: 'scatter',
            marker: {
                color: this.color,
                size: 7
            },
            line: {
                color: this.color,
                width: 3
            }
        }
    }
    getLocalError() {
        return [{}, {}]
    }
}