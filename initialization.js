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
manager.redraw_solution([exact_trace])

function compute(){
    if (validation() !== 0){
        return
    }
    manager.update_Manager()
    let solution_traces = []
    let lte_traces = []
    let gte_traces = []
    let exact_trace = manager.equation.getExactTrace()

    solution_traces.push(exact_trace)
    if (document.getElementById('method1').checked){
        let eulerTrace = manager.equation.getEulerTrace()
        let error_traces = manager.error_analyzer.getEulerError(exact_trace, eulerTrace)

        solution_traces.push(eulerTrace)
        lte_traces.push(error_traces[0])
        gte_traces.push(error_traces[1])
    }
    if (document.getElementById('method2').checked){
        let improvedEulerTrace = manager.equation.getImprovedEulerTrace()
        let error_traces = manager.error_analyzer.getImprovedEulerError(exact_trace, improvedEulerTrace)

        solution_traces.push(improvedEulerTrace)
        lte_traces.push(error_traces[0])
        gte_traces.push(error_traces[1])
    }
    if (document.getElementById('method3').checked){
        let rungeKuttaTrace = manager.equation.getRungeKuttaTrace()
        let error_traces = manager.error_analyzer.getRungeKuttaError(exact_trace, rungeKuttaTrace)

        solution_traces.push(rungeKuttaTrace)
        lte_traces.push(error_traces[0])
        gte_traces.push(error_traces[1])
    }
    manager.redraw_solution(solution_traces)
    manager.redraw_error(lte_traces, gte_traces)
}