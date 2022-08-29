const dropdownSelect = document.querySelector('.dropdown__select')
const dropdownItem = document.querySelectorAll('.dropdown__item')
const selectec = document.querySelector('.dropdown__selected')
dropdownSelect.addEventListener('click',(e) => {
    
    const list = e.target.nextElementSibling
    const icon = e.target.lastElementChild
    icon.classList.toggle('fa-caret-up')
    list.classList.toggle('show')
    dropdownItem.forEach(item => {
        item.onclick = (e) => {
            const text = e.target.innerText
            selectec.textContent = text
            list.classList.remove('show')
            icon.classList.toggle('fa-caret-up')
        }
    })
    
})
