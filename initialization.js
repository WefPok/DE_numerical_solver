document.getElementById("inputx0").value = 2
document.getElementById("inputy0").value = 0
document.getElementById("inputX").value = 12
document.getElementById("inputN").value = 5
let x0 = 2
let y0 = 0
let X = 12
let N = 5

manager = new App_Manager(x0, y0, X, N)
let exact_trace = manager.equation.getExactTrace()
manager.redraw_graphs([exact_trace])

function compute(){
    if (validation() !== 0){
        return
    }
    manager.update_Manager()
    let traces = []
    traces.push(manager.equation.getExactTrace())
    if (document.getElementById('method1').checked){
        const str = `Euler's method  with values:\nx0: ${x0}\ny0: ${y0}\nX: ${X}\nN: ${N}\n`
        console.log(str)
        traces.push(manager.equation.getEulerTrace())
    }
    if (document.getElementById('method2').checked){
        const str = `Improved Euler's method with values:\nx0: ${x0}\ny0: ${y0}\nX: ${X}\nN: ${N}\n`
        console.log(str)
        traces.push(manager.equation.getImprovedEulerTrace())
    }
    if (document.getElementById('method3').checked){
        const str = `Method Runge Kutta with values:\nx0: ${x0}\ny0: ${y0}\nX: ${X}\nN: ${N}\n`
        traces.push(manager.equation.getRungeKuttaTrace())
        console.log(str)
    }
    manager.redraw_graphs(traces)
}