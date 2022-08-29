window.addEventListener('load', () => {
    const links = [...document.querySelectorAll('.menu-link')];
    // Tạo ra đường line hoặc tạo trong file HTML
    const line = document.createElement('div');
    line.className = 'line-effect';
    document.body.appendChild(line)
    links.forEach(item => item.addEventListener('mouseenter', (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        line.style.width = `${width}px`
        line.style.left = `${left}px`
        line.style.top = `${top+height+5}px`
            // Cộng thêm 5px nhìn cho đẹp

    }))
    const menu = document.querySelector('.menu');
    menu.addEventListener('mouseleave', (e) => {
        line.style.width = 0;
    })
})