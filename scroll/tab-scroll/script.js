window.addEventListener('load', function() {

    const tabItem = [...document.querySelectorAll('.tab-item')];
    const tabList = document.querySelector('.tab-list');
    const tab = document.querySelector('.tab');
    const tabLeft = tab.offsetLeft;
    tabItem.forEach(item => item.addEventListener('click', function(e) {
        tabItem.forEach(item => item.classList.remove('active'))
        e.target.classList.add('active')
        let leftSpacing = e.target.offsetLeft;
        // let leftSpacing = e.target.offsetLeft - tabLeft; nếu phần tử cha không có position: relative;
        tabList.scroll(leftSpacing / 2, 0); // Nếu không chia 2 hoặc 3.. thì scroll x sẽ vừa khít với lefSpacing nên chia 2 hoặc 3 để thấy được hai bên
    }))

})