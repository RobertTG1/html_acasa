var dr = document.querySelector('#dreptunghi')

dr.addEventListener('click', minimize)
CredentialsContainer.addEventListener('click', move)

async function minimize() {
    for(let i = 10; i >=0 ; i--) {
        await new Promise(r => setTimeout(r, 20))
    dr.style.height = i + 'em'
    }
}

async function move() {
    for(let i = 10; i <= 200; i++) {
        await new Promise(r => setTimeout(r, 20))
        cerc.style.top = cerc.style.left = i + 'px'
    }
}
[1,2,3,4].concat[4,5,6]