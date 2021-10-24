class RungeKuttaMethod extends Method{
    next(x_prev, y_prev, step) {
        const k1 = step*this.equation.fxy(x_prev, y_prev)
        const k2 = step*this.equation.fxy(x_prev + step/2, y_prev + k1/2)
        const k3 = step*this.equation.fxy(x_prev + step/2, y_prev + k2/2)
        const k4 = step*this.equation.fxy(x_prev + step, y_prev + k3)
        return  y_prev+(1/6)*(k1 + 2*k2 + 2*k3 + k4)
    }

}