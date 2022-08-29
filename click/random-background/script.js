const button = document.querySelector('.btn')
const colors = [
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF33CC',
    '#330000',
    '#003333',
]
button.addEventListener('click', (e) => {
    const color =colors[ Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = color
    // Cách 2 setAttribute
    //document.body.setAttribute('style',`background-color : ${color}`)
})