function randomNumber(max) {
    return Math.round(Math.random() * max)
}


function randomLetter() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWYZ'
    let i = randomNumber(letters.length)
    return letters[i]
}

function randomNumber() {
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    return `rgb(${red},${green},${blue})`
}