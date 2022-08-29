// const dropdowSelect = document.querySelector('.dropdown__select');
// const dropdowItem = document.querySelectorAll('.dropdown__item');
// const dropdowSelected = document.querySelector('.dropdown__selected');
// const dropdowList = document.querySelector('.dropdown__list');
// const dropdow = document.querySelector('.dropdown');
// const icon = document.querySelector('.dropdown__caret');
// dropdowSelect.addEventListener('click', (e) => {
//     dropdowList.classList.toggle('show')
//     icon.classList.toggle('fa-caret-up')// Vì nó có độ ưu tiên cao nên không cần xóa icon cũ
// })
// dropdowItem.forEach(item => item.addEventListener('click', (e) => {
//     const text = e.target.querySelector('.dropdown__text').textContent;
//     dropdowSelected.textContent = text;
//     dropdowList.classList.remove('show')
// }))
// document.addEventListener('click', (e) => {
//     if (!dropdow.contains(e.target)) {
//         dropdowList.classList.remove('show')
//     }
// })
document.addEventListener('click', (e) => {
    if (e.target.matches('.dropdown__select')) {
        e.target.nextElementSibling.classList.toggle('show');
        e.target.lastElementChild.classList.toggle('fa-caret-up')
    } else if (e.target.matches('.dropdown__item')) {
        e.target.parentNode.previousElementSibling.firstElementChild.textContent = e.target.textContent;
        e.target.parentNode.classList.remove('show')
    } else {
        e.target.children[1].firstElementChild.firstElementChild.nextElementSibling.classList.remove('show')
    }
});