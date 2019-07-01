let P1, P2, P3, P4, P5, P6 
let finalGrade
var body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);

P1 = document.getElementById("1er-guia")
P2 = document.getElementById("1er-actividad")
P3 = document.getElementById("1er-evaluacion")
P4 = document.getElementById("2do-guia")
P5 = document.getElementById("2do-actividad")
P6 = document.getElementById("2do-evaluacion")
inputs = document.getElementsByClassName('input')

finalGrade = document.getElementById("nota-final")

function computeGrade(e) {

        numberP1 = parseFloat(P1.value)
        numberP2 = parseFloat(P2.value)
        numberP3 = parseFloat(P3.value)
        numberP4 = parseFloat(P4.value)
        numberP5 = parseFloat(P5.value)
        numberP6 = parseFloat(P6.value)
        
        if((P1.value > 20) || (P2.value > 20)  || (P3.value > 20) || (P4.value > 20) || (P5.value > 20) || (P6.value > 20)){
            alert("Las notas no pueden ser mayores a 20")
            e.value = ""
        } else if((P1.value < 0) || (P2.value < 0) || (P3.value < 0) || (P4.value < 0) || (P5.value < 0) || (P6.value < 0)){
            alert("Las notas no pueden ser menores a 0")
            e.value = ""
        }
        else {
            if((P1.value != "") || (P2.value != "") || (P3.value != "") || (P4.value != "") || (P5.value != "") || (P6.value != "")){
                numberFinalGrade = ((numberP1*2/20) + (numberP2*2/20) + (numberP3*6/20) + (numberP4*2/20) + (numberP5*2/20) + (numberP6*6/20)).toFixed(2)
                finalGrade.innerHTML = numberFinalGrade
                if(isNaN(numberFinalGrade)){
                    finalGrade.style.color = "lightgray"
                    finalGrade.innerHTML = "calculando..."
                }
                else if(numberFinalGrade >= 14){
                    finalGrade.style.color = "green"
                }else{
                    finalGrade.style.color = "red"
                }
            }
        }
}

function clearInput(e){
    if(P1.value == ""){
        P1.value = 0
    } else if (P2.value == ""){
        P2.value = 0
    } else if (P2.value == ""){
        P2.value = 0
    } else if (P3.value == ""){
        P3.value = 0
    } else if (P4.value == ""){
        P4.value = 0
    } else if (P5.value == ""){
        P5.value = 0
    } else if (P6.value == ""){
        P6.value = 0
    }
    e.value = ""
    computeGrade(e)
}

function checkTabPress(e) {
    "use strict";
    // pick passed event or global event object if passed one is empty
    e = e || event;
    var activeElement;
    if (e.keyCode == 9) {
        if(P1.value == ""){
            P1.value = 0
        } else if (P2.value == ""){
            P2.value = 0
        } else if (P2.value == ""){
            P2.value = 0
        } else if (P3.value == ""){
            P3.value = 0
        } else if (P4.value == ""){
            P4.value = 0
        } else if (P5.value == ""){
            P5.value = 0
        } else if (P6.value == ""){
            P6.value = 0
        }
        e.value = ""
        computeGrade(e)
    }
}
