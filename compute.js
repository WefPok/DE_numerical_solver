
function test(){
    let x0 = Number(document.getElementById("inputx0").value)
    let y0 = Number(document.getElementById("inputy0").value)
    let X = Number(document.getElementById("inputX").value)
    let N = Number(document.getElementById("inputN").value)
    if (validation()!==0){
        return
    }

    let method = 1
    if (document.getElementById('method1').checked){
        const str = `Euler's method  with values:\nx0: ${x0}\ny0: ${y0}\nX: ${X}\nN: ${N}\n`
        console.log(str)
        method*=2
    }
    if (document.getElementById('method2').checked){
        const str = `Improved Euler's method with values:\nx0: ${x0}\ny0: ${y0}\nX: ${X}\nN: ${N}\n`
        console.log(str)
        method*=3
    }
    if (document.getElementById('method3').checked){
        const str = `Method Runge Kutta with values:\nx0: ${x0}\ny0: ${y0}\nX: ${X}\nN: ${N}\n`
        console.log(str)
        method*=5
    }
    console.log()
    refresh_graph(x0, y0, X, N, method)
}