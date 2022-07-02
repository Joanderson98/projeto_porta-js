let destrancar = document.getElementById("destrancar")
let abrir = document.getElementById("abrir")
let fechar = document.getElementById("fechar")
let trancar = document.getElementById("trancar")

let porta = document.getElementById("porta")

function portD(){
    return porta.src.indexOf('destrancada') > -1
}
function portF(){
    return porta.src.indexOf('fechada') > -1
}
function portA(){
    return porta.src.indexOf('aberta') > -1
}
function portT(){
    return porta.src.indexOf('trancada') > -1
}




function destrancarP(){
    if(portT()){
    porta.src = './img/destrancada.jpg'
    }
}

function portaA(){
    if(portF() || portD())
    porta.src ='./img/aberta.jpg'
}

function portaF(){
    if(portA())
    porta.src = './img/fechada.jpg'
}

function portaT(){
    if(portF() || portD())
    porta.src = './img/trancada.jpg'
}





destrancar.addEventListener('click', destrancarP)
abrir.addEventListener('click', portaA)
fechar.addEventListener('click', portaF)
trancar.addEventListener('click', portaT)