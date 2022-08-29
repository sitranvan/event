const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// CÁCH 1
// toggle.addEventListener('click', (e) => {
//     menu.classList.toggle('is-show')
//     e.target.classList.toggle('fa-bars')
//     e.target.classList.toggle('fa-times')
// })
// document.addEventListener('click',(e) => {
//     if( !menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
//         menu.classList.remove('is-show')
//         toggle.classList.remove('fa-times')
//         toggle.classList.add('fa-bars')
//     }
// })

//Cách 2
document.addEventListener('click', (e) => {
    if (e.target.matches('.menu-toggle')) {
        menu.classList.toggle('is-show')
        e.target.classList.toggle('fa-bars')
        e.target.classList.toggle('fa-times')
    } else if (!e.target.matches('.menu')) {
        menu.classList.remove('is-show')
        toggle.classList.remove('fa-times')
        toggle.classList.add('fa-bars')
    }
})

// !e.target.matches('.menu') <=>  !menu.contains(e.target)
// !e.target.matches('.menu') Click vào chữ sẽ mất menu 
// !menu.contains(e.target) Click vào chữ không mất menu 

// Dùng !e.target.matches('.menu') Thêm  && e.target.matches('.menu-item') click vào chữ sẽ không mất menu