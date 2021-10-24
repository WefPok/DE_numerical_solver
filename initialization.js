document.getElementById("inputx0").value = 2
document.getElementById("inputy0").value = 0
document.getElementById("inputX").value = 10
document.getElementById("inputN").value = 50

manager = new App_Manager(2, 0, 10, 50)
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