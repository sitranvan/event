const accordionHeader = document.querySelectorAll('.accordion-header');
[...accordionHeader].forEach(item => item.addEventListener('click',(e) => {
    const content = e.target.nextElementSibling;
    content.style.height = `${content.scrollHeight}px`
    content.classList.toggle('is-active')

    // Khi click vào lần thứ 2 thì không còn class is-active nữa thì cho height bằng 0
    if(!content.classList.contains('is-active')) {
        content.style.height='0px';
    }
}))