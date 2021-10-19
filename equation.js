class Equation {
    constructor(x0, y0, X, N) {
        this.x0 = x0;
        this.y0 = y0;
        this.N = N;
        this.constant = this.getConstant(x0, y0);
        this.step = (X-x0)/N
    }
    getConstant(x0, y0){
        return (y0+Math.log(x0))/(Math.log(x0)**2)
    }

    fxy(x, y){
        return (1/x)+(2*y/(x*Math.log(x)))
    }
}