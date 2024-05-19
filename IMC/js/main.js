import { Modal } from "./modal.js"
import { calculatorIMC , NotANumber} from "./utils.js"
import { AlertError } from "./alert-error.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = (event)=>{
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightOrHeightIsNotaNumber = NotANumber(weight) || NotANumber(height)
    console.log(weightOrHeightIsNotaNumber)
    if(weightOrHeightIsNotaNumber){
        AlertError.open()

        inputHeight.value = ''
        inputWeight.value = ''

        return;
    }

    const result = calculatorIMC(weight, height)
    displayResultMessage(result) 

    inputHeight.value = ''
    inputWeight.value = ''

    return
}

form.addEventListener('input',()=>AlertError.close())

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
    Modal.open()
}

