let xAttempts = 1
let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const screen2Titulo = document.querySelector(".screen2_titulo")
const btnTry = document.querySelector("#btnSend")
const btnReset = document.querySelector(".screen2_button")
const validation = document.querySelector(".validation")

console.log(randomNumber)
document.addEventListener('keydown',(e)=>{
    if(e.key == "Enter" || screen1.contains("hide")){
        handleResetClick
    }else if(e.key == "Enter" || screen2.contains("hide")){
        handleClick()
    }
}

)
function toogleHide(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleClick (event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(inputNumber.value === ""){
        validation.innerText = '*Preencha um numero'
        validation.style.color = 'red';
    } else if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
        validation.innerText = '*Numero fora dos padrões'
        validation.style.color = '#7879F1';
    }
    else{
        validation.innerText = ""
        if(Number(inputNumber.value) == randomNumber){
            toogleHide()
            screen2Titulo.innerText =`Acertou em ${xAttempts} tentativas`
            
        }
        
        inputNumber.value = ""
        xAttempts++
    }
    
}

function handleResetClick(){
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
    toogleHide()
}


btnTry.addEventListener("click", handleClick)
btnReset.addEventListener("click", handleResetClick)