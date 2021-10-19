document.getElementById("inputx0").value = 2
document.getElementById("inputy0").value = 0
document.getElementById("inputX").value = 12
document.getElementById("inputN").value = 5

manager = new App_Manager(2, 0, 12, 5)
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