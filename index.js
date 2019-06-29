let P1, P2, P3, P4, P5, P6
let desiredGrade
let button

P1 = document.getElementById("1er-guia")
P2 = document.getElementById("1er-actividad")
P3 = document.getElementById("1er-evaluacion")
P4 = document.getElementById("2do-guia")
P5 = document.getElementById("2do-actividad")
P6 = document.getElementById("2do-evaluacion")

desiredGrade = document.getElementById("nota-deseada")

button = document.getElementById("button")

button.addEventListener("click", function(){
    if(P1.value != "" || P2.value != "" || P3.value != "" || P4.value != "" || P5.value != "" || P6.value != "" || desiredGrade !=  ""){
        alert(P1.value + P2.value + P3.value + P4.value + P5.value + P6.value)
    } else {
        alert("Ingrese datos")
    }
})
