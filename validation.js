function validation(){
    let x0 = Number(document.getElementById("inputx0").value)
    let y0 = Number(document.getElementById("inputy0").value)
    let X = Number(document.getElementById("inputX").value)
    let N = Number(document.getElementById("inputN").value)
    let modal = new bootstrap.Modal(document.getElementById("invalid_input_modal"))

    if (document.getElementById("inputx0").value.length === 0 ||
        document.getElementById("inputy0").value.length === 0 ||
        document.getElementById("inputX").value.length === 0 ||
        document.getElementById("inputN").value.length === 0) {
        document.getElementById("modal_error_description").innerText = "Please fill in all values!"
        modal.show()
        return 1
    }
    else if (isNaN(x0) || isNaN(y0) || isNaN(X) || isNaN(N)){
        document.getElementById("modal_error_description").innerText = "All entries should be numbers!"
        modal.show()
        return 2
    }
    else if (x0>=X){
        document.getElementById("modal_error_description").innerText = "x0 should be less than X!"
        modal.show()
        return 3
    }
    else if (N <= 0){
        document.getElementById("modal_error_description").innerText = "N should be > 0!"
        modal.show()
        return 4
    }
    else {
        return 0
    }
}