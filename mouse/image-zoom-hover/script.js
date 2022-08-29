window.addEventListener("load", function() {
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove", handleHoverImage);
    const imageWrapper = document.querySelector(".image-wrapper");
    let imageWraperWidth = imageWrapper.offsetWidth;
    let imageWraperHeight = imageWrapper.offsetHeight;
    const image = document.querySelector(".image");

    function handleHoverImage(e) {
        image.style = "width: auto; height: auto; max-height: unset";
        let imageWidth = image.offsetWidth;
        let imageHeight = image.offsetHeight;
        let spaceX = (imageWidth / 2 - imageWraperWidth) * 2; // Khoảng cách còn lại để cho hình zoom full
        let spaceY = (imageHeight / 2 - imageWraperHeight) * 2;
        imageWidth = imageWidth + spaceX; // Cập nhật lại imageWidth lúc này imageWidth đã rộng hơn để zoom được toàn bộ hình
        imageHeight = imageHeight + spaceY;
        let ratioX = imageWidth / imageWraperWidth / 2; // Tỉ lệ 
        let ratioY = imageHeight / imageWraperHeight / 2;
        let x = (e.pageX - imageWrapper.offsetLeft) * ratioX; // Trừ đi khoảng cách top end left
        let y = (e.pageY - imageWrapper.offsetTop) * ratioY;
        image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none;`;
    }
    imageCover.addEventListener("mouseleave", handleLeaveImage);

    function handleLeaveImage() {
        image.style = "";
    }
});