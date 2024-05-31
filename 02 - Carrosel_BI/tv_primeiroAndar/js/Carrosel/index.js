import * as el from "./elements.js"

const visualisationPbi = []
const visualisationImage = ['./js/assets/OKR1.jpg','./js/assets/OKR2.jpg','./js/assets/OKR3.jpg','./js/assets/Imagem1.png']

let pagePbi = 0
let pageImage = 0

export function startCarrosel(){
    
    const qtdPagePbi = visualisationPbi.length
    const qtdPageImage = visualisationImage.length
    
    if(pagePbi == qtdPagePbi){
        el.frame.classList.add('hidden') 
        el.image.classList.remove('hidden')


        if(pageImage == qtdPageImage){
            pagePbi = 0
            pageImage = 0
        }else{
            el.image.src = visualisationImage[pageImage]
            pageImage++

        }  

    }else{
        el.frame.classList.remove('hidden')
        el.image.classList.add('hidden')  
        el.frame.src = visualisationPbi[pagePbi]
        pagePbi++
        
    }
    
}
setInterval(startCarrosel,20000)