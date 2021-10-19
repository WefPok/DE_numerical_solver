class Method {
    constructor(equation) {
        if (this.constructor === Method) {
            throw new Error("Instantiation of abstract class");
        }
        this.equation = equation
        this.approximate = this.getSolution()
    }
    next(){

    }
    getSolution() {

    }
    getError() {

    }
    getMaxError() {

    }
}