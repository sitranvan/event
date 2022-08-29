const dropdownSelect = document.querySelector('.dropdown__select');
const dropdownItem = [...document.querySelectorAll('.dropdown__item')];
const dropdownSelected = document.querySelector('.dropdown__selected');
const dropdownList = document.querySelector('.dropdown__list');
const icon = document.querySelector('.dropdown__caret');
dropdownSelect.addEventListener('click', function(e) {

    icon.classList.toggle('fa-caret-up')
    dropdownList.classList.toggle('show')

})
dropdownItem.forEach(item => item.addEventListener('click', (e) => {
    const textItem = item.textContent;
    dropdownSelected.textContent = textItem;
    dropdownList.classList.remove('show')

}))

// 100%