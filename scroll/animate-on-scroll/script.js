const images = document.querySelectorAll('.container img');
window.addEventListener('scroll', function(e) {
    const scrollY = window.pageYOffset;
    [...images].forEach(item => {
        if (scrollY > item.offsetTop - (item.offsetWidth / 2)) {
            item.classList.add('active');
        }
    })

})