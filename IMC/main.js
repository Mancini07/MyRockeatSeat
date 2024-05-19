const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const messageError = document.querySelector('.alert-error')

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },

    close(){
        Modal.wrapper.classList.remove('open')
    }
}

Modal.btnClose.onclick = ()=> Modal.close()

function IMC(weight, height){
    return(weight/((height/100)**2)).toFixed(2)
}

form.onsubmit = (event)=>{
    event.preventDefault()
    messageError.classList.remove('open')
    const weight = inputWeight.value
    const height = inputHeight.value
    

    if(weight == "" || height == ""){
        console.log("Preencha todos os campos")

    }
    else if(isNaN(parseInt(weight) ) || isNaN(parseInt(height))){
        messageError.classList.add('open')
        inputHeight.value = ''
        inputWeight.value = ''
    }
    else{
        const result = IMC(weight, height)
        const message = `Seu IMC é de ${result}`
        Modal.message.innerText = message
        Modal.open()
        inputHeight.value = ''
        inputWeight.value = ''
    }  
}

