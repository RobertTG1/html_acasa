var p = document.getElementById('greenplanet')
p.innerText = 'An alien appeared'
p.innerHTML = '<b>An alien appeared</b>'
p.style.color = 'blue'
p.style.background = 'rgb(230, 210, 200)'

//adauga o clasa elementului
p.classList.add('warning')

var newElement = document.createElement('p')
newElement.innerText = 'Hello there!'
// punem elementul in body la sfarsit
document.querySelector('body').insertBefore(newElement, p)

// stergem un element
document.querySelector('#blueplanet').remove()


// executa functia changeMessage cand se da click pe input:
document.querySelector('input').addEventListener('click',changeMessage)


function changeMessage() {
    document.querySelector('#redplanet').classList.add('warning')
}