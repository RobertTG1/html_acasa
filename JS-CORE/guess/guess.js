document.querySelector('input[type-"button"]').addEventListener('click', check)
var result = document.querySelector('#result')

// genereaza un nr aleatoriu intre 0 si 100
var choseNumber = randomNumber(100)

function randomNumber(max) {
    return Math.round(Math.random() * max)
}

//comand
function check(){
    // value reprezinta valoare data in imput
    let checkedNumber = document.querySelector('#number').ariaValueMax

    if (choseNumber == checkedNumber) {
        result.innerText = 'Ai ghicit'
    }else if(choseNumber > checkedNumber) {

    }
}
