const list = ["Você é um cagão", "você mija", "você peida", "você respeita", "você cagueta", "foda-se", "lindo(a)", "dane-se", "lascou", "fudeu", "maravilhoso(a)"]

const buttonTry = document.querySelector(".section1_button_image")
const buttonRepeat = document.querySelector(".section2_button")
const sorte = document.querySelector(".section2_texto")
const section2 = document.querySelector(".section2")
const section1 = document.querySelector(".section1")

function numberList(){
    let randomNumber = Math.round((Math.random() * 10 ) * (Math.random() * 10))
    while(randomNumber >= list.length){
        randomNumber = Math.round((Math.random() * 10 ) * (Math.random() * 10))
    }
    return randomNumber
}
function toggleSection(){
    section1.classList.toggle('hide')
    section2.classList.toggle('hide')
}
function editSorte(){
    const number = numberList()
    sorte.innerText = list[number]
}

buttonTry.addEventListener("click",(e)=>{
    e.preventDefault()
    editSorte()
    toggleSection()
})
buttonRepeat.addEventListener("click", (e)=>{
    e.preventDefault()
    editSorte()
})
