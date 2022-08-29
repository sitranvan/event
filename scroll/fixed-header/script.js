function debounceFn(func, wait, immediate) {
    let timeout;
    return function() {
        let context = this,
            args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const header = document.querySelector('.header')
window.addEventListener('scroll', debounceFn(function(e) {
    const heightHeader = header.offsetHeight;
    const scrollTop = window.pageYOffset;
    if (scrollTop >= heightHeader) {
        header.classList.add('is-fixed')
        document.body.style.paddingTop = `${heightHeader}px`;
        // khi add class thì content sẽ bị đẩy lên cần phải thêm một khoảng paddingTop để content không bị giật
    } else {
        header.classList.remove('is-fixed')
        document.body.style.paddingTop = 0;

    }
}, 40))