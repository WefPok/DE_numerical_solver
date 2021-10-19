class EulerMethod extends Method{

    next(x_prev, y_prev, step){
        return  y_prev + step*this.equation.fxy(x_prev, y_prev)
    }

}