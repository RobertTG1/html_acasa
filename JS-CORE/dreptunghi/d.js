var dr = document.querySelector('#dreptunghi')

dr.addEventListener('click', minimize)

async function minimize() {
    for(let i = 10; i>=0 ;i--) {
        await sleep(50)
    dr.style.height = i + 'em'
    }
}