window.addEventListener('load', function() {
    const text = document.querySelector('.text');
    text.addEventListener('mouseenter', (e) => {
        const title = e.target.dataset.tooltip;
        const tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'tooltip-text';
        tooltipDiv.textContent = title;
        document.body.appendChild(tooltipDiv)
            // Lấy ra các thông số left top x y width height
        const cords = e.target.getBoundingClientRect();
        console.log(cords)
            // Destructuring Object
        const { left, top, width } = cords;
        const tooltipHeight = tooltipDiv.offsetHeight;
        tooltipDiv.style.left = `${left-width/2}px`
        tooltipDiv.style.top = `${top-tooltipHeight-20}px` //  20 là tam giác
    })
    text.addEventListener('mouseleave', (e) => {
        const tooltip = document.querySelector('.tooltip-text');
        if (!tooltip) return;
        tooltip.parentNode.removeChild(tooltip);
    })
})