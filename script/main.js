import player from './player.js'

window.addEventListener('load', player.start())


const titulo = document.querySelector('h1')
const paragraph = document.querySelector('p')
const span = document.querySelector('span')
const play_pause = document.querySelector('div.row')

let count_click = 0

function typewriter(element) {
    titulo.classList.remove('off')
    titulo.classList.add('on')
    const texto_array = element.innerHTML.split('')
    element.innerHTML = ' '
    texto_array.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra
        }, 75 * i)
    });
}

function typewriterParagraph() {
    let element = paragraph
    paragraph.classList.remove('off')
    paragraph.classList.add('on')
    const texto_array = element.innerHTML.split('')
    element.innerHTML = ' '
    texto_array.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra
        }, 60 * i)
    });
}

function typewriterSpan() {
    span.classList.remove('off')
    span.classList.add('on')
    const texto_array = span.innerHTML.split('')
    span.innerHTML = ' '
    texto_array.forEach((letra, i) => {
        setTimeout(() => {
            span.innerHTML += letra
        }, 65 * i)
    });
    removeEventListener('click', typewriterSpan)
}

function create_heart() {
    const hearts = ['','💖', '❤️', '💗', '🖤']
    const heart = document.createElement('div')
    heart.classList.add('heart')

    heart.innerText = hearts[Math.floor(Math.random() * 4 + 1)]
    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'
    
    document.body.appendChild(heart)

    setTimeout(() => {heart.remove()}, 5000)
}

function animatedPlay() {
    play_pause.classList.remove('off')
    play_pause.classList.add('on')
}

document.getElementById('btn').addEventListener('click', () => {
    count_click++
    if(count_click <= 1) {
        setInterval(create_heart, 600) 
        setTimeout(typewriterParagraph, 14100)
        setInterval(typewriterSpan, 40000)
        animatedPlay()

    } else {
        document.getElementById('btn').removeEventListener('click', () => {
            setTimeout(typewriterParagraph, 14100)
            setInterval(typewriterSpan, 41000)
        })
    }

})

window.addEventListener('load', typewriter(titulo))
