function calculatorIMC(weight, height){
    return(weight/((height/100)**2)).toFixed(2)
}

function NotANumber(value){
    return isNaN(value) || value == '' 
}

export{calculatorIMC, NotANumber}