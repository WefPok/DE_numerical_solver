class ImprovedEulerMethod extends Method{

    next(x_prev, y_prev, step){
        const k1 = step * this.equation.fxy(x_prev, y_prev)
        const k2 = step * this.equation.fxy(x_prev + step, y_prev + k1)
        return  y_prev + (k1 + k2)/2

    }
}