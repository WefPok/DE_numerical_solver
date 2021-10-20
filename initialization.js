document.getElementById("inputx0").value = 0.5
document.getElementById("inputy0").value = 0
document.getElementById("inputX").value = 2
document.getElementById("inputN").value = 6

manager = new App_Manager(2, 0, 12, 10)
manager.update_Manager()
manager.redraw_solution()

function compute(){
    if (validation() !== 0){
        return
    }
    manager.update_Manager()
    manager.redraw_solution()
    manager.redraw_error()
}