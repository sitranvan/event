const images = [...document.querySelectorAll('.image')];
images.forEach(item => item.addEventListener('click', (e) => {
    const image = e.target.getAttribute('src');
    const template = `
   <div class="lightbox">
     <div class="lightbox-content">
       <i class="fa fa-angle-left lightbox-prev"></i>
       <img
         src="${image}" alt=""class="lightbox-image"
       />
       <i class="fa fa-angle-right lightbox-next"></i>
     </div>
   </div>`;
    document.body.insertAdjacentHTML('beforeend', template);
}))
let index = 0;
document.addEventListener('click', (e) => {

    const lightImage = document.querySelector('.lightbox-image'); // Lấy ra lightImage
    if (!lightImage) return; // Nếu không có lightImage thì dừng

    const lightSrc = lightImage.getAttribute('src'); // Lấy ra src của lighImage hiện tại đang hiện
    index = images.findIndex(item => item.getAttribute('src') === lightSrc); // Tìm kiếm trong images 
    // Lấy đường dẫn thông qua images vì lightImage chỉ hiện duy nhất một tấm nên không lấy tất cả đường dẫn để tăng index lên được
    //nếu khớp thì trả về vị trí index đầu tiên, index là index của images không liên quan đến lightSrc, lightSrc chỉ để so sánh xem có khớp không
    if (e.target.matches('.lightbox')) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches('.lightbox-next')) {

        index++; // Mỗi lần click next thì index tăng lên để lấy index của hình tiếp theo
        if (index > images.length - 1) {
            index = 0;
        }
        console.log(index)
        let newSrc = images[index].getAttribute('src');
        lightImage.setAttribute('src', newSrc);
    } else if (e.target.matches('.lightbox-prev')) {

        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        let newSrc = images[index].getAttribute('src');
        lightImage.setAttribute('src', newSrc);
    }
})