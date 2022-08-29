const tabItem = [...document.querySelectorAll('.tab-item')];
const tabList = document.querySelector('.tab-list');
const tab = document.querySelector('.tab');
const tabNext = document.querySelector('.tab-next');
const tabPrev = document.querySelector('.tab-prev');
let deltaTab = 40;
// Trường hợp này offsetWidth = clientWidth vì đang xử lí trên element không xử lí trên document.documentElement
const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
const maxScrollTabLeft = tabList.scrollWidth - deltaTab - tabList.offsetWidth;
// Khi tới đã thấy item cuối cùng thì disabled , không cần click thêm 1 click
tabItem.forEach(item => item.addEventListener('click', function(e) {
    tabItem.forEach(item => item.classList.remove('active'))
    e.target.classList.add('active')
    const letSpacing = e.target.offsetLeft;
    tabList.scroll(letSpacing / 2, 0);
}))

tabList.addEventListener('wheel', function(e) {
    e.preventDefault();
    const delta = e.deltaY;
    this.scrollLeft += delta;
    console.log(this.scrollLeft)
    console.log(this.scrollLeft)
    if (this.scrollLeft > 0) {
        tabPrev.classList.remove('disabled')
    } else {
        tabPrev.classList.add('disabled')
    }

    if (this.scrollLeft >= tabScrollWidth) {
        tabNext.classList.add('disabled')
    } else {
        tabNext.classList.remove('disabled')

    }

})
tabNext.addEventListener('click', function(e) {
    tabPrev.classList.remove('disabled');
    tabList.scrollLeft += deltaTab;
    if (tabList.scrollLeft >= maxScrollTabLeft) {
        this.classList.add('disabled');
    }
})

tabPrev.addEventListener('click', function(e) {
    tabNext.classList.remove('disabled');
    tabList.scrollLeft -= deltaTab;
    console.log(tabList.scrollLeft)
    if (tabList.scrollLeft <= deltaTab) {
        // Khi còn 1 click nữa là thấy item đầu thì disabled , không cần click thêm 1 click
        this.classList.add('disabled');
    }
})

// Sự kiện wheel dùng cho element dạng scroll ngang không hiên thanh kéo
// Dùng position relative cho thằng cha (tab) thì phần tử con bên trong tinh offsetLeft không 
// phải mép trái trình duyệt mà là mép trái phần tử cha (tab)


//----------------CHUẨN--------------
const tabList = document.querySelector('.tab-list')
const tabItem = document.querySelectorAll('.tab-item')
const btnNext = document.querySelector('.tab-next')
const btnPrev = document.querySelector('.tab-prev')
const tabMax = tabList.scrollWidth - tabList.clientWidth

tabItem.forEach((item, index) => {
    item.onclick = function() {
        tabItem.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
        const left = this.offsetLeft
        tabList.scroll(left / 2, 0)
        left == 0 ? btnPrev.classList.add('disabled') : btnPrev.classList.remove('disabled')
        left >= tabItem[tabItem.length - 1].offsetLeft ? btnNext.classList.add('disabled') : btnNext.classList.remove('disabled')
    }
})
let delta = 40

tabList.addEventListener('wheel', function(e) {
    e.preventDefault()
    let delta = e.deltaY
    this.scrollLeft += delta

    this.scrollLeft >= 0 && delta > 0 ? btnPrev.classList.remove('disabled') :
        this.scrollLeft == 0 && delta < 0 ? btnPrev.classList.add('disabled') : ''

    this.scrollLeft >= tabMax ? btnNext.classList.add('disabled') :
        this.scrollLeft < tabMax ? btnNext.classList.remove('disabled') : ''

})

btnNext.onclick = () => {
    tabList.scrollLeft += delta
    tabList.scrollLeft > tabMax ? btnNext.classList.add('disabled') : btnPrev.classList.remove('disabled')
}

btnPrev.onclick = () => {
    tabList.scrollLeft -= delta
    tabList.scrollLeft <= delta ? btnPrev.classList.add('disabled') : btnNext.classList.remove('disabled')
}