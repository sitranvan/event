const progress = document.querySelector(".progress");
window.addEventListener("scroll", function() {
    // khoảng cách của scrollbar so với phía trên khi scroll
    const scrollTop = window.pageYOffset;
    console.log(scrollTop)
        // chiều cao của document bao gồm scrollbar document.documentElement.scrollHeight
        // chiều cao của document ko bao gồm scrollbar document.documentElement.clientHeight
        //  Tính ra chiều cao của scrollbar là thanh kéo
    const height = // tính ra chiều cao của trang web - chiều cao thanh scroll

        // Chiều dài web bao gồm scroll đem chia cho chiều cao nhìn thấy (viewport)
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const width = (scrollTop / height) * 100; // Mỗi lần scroll thì srollTop thay đổi chia cho height để tinh ra chiều cao từ đính thanh scroll so với trên
    progress.style.width = `${width}%`;
});