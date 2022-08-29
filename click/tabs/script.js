const tabItem = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');
[...tabItem].forEach(item => item.addEventListener('click',(e) => {
    // Click vào xóa item cũ trước khi add item mới
    [...tabItem].forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');

    // Lấy ra data phần tử click vào
    let tabNumber = e.target.dataset.tab;
    [...tabContent].forEach(itemContent => {
        // Xóa content cũ trước khi qua content mới vì không click trực tiếp vào nó mà click vào item nên không có forEach
        itemContent.classList.remove('active')
        if(tabNumber===itemContent.getAttribute('data-tab')) {
            itemContent.classList.add('active')
        }
    })
}))
