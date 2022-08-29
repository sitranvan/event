const input = document.querySelector('.input-search');
const items = [...document.querySelectorAll('.dropdown-item')];
input.addEventListener('input', function(e) {
        let value = e.target.value;
        value = value.toLowerCase();
        items.forEach(item => {

            const text = item.textContent.trim();
            const index = text.toLowerCase().indexOf(value); // indexOf trả về vị trí phần tử không có trả về -1

            if (index != -1 && text.toLowerCase().startsWith(value.charAt(0))) {

                item.innerHTML = `${text.substring(0,index)}
            <span class="primary">${text.substring(index,index+value.length)}</span>${text.substring(index+value.length)}`
            }
        })
    })
    //  ${text.substring(0,index) xác định vị trí cắt nếu điều kiện bắt đầu bằng kí tự đầu thì không cần
    //  <span class="primary">${text.substring(index,index+filter.length)}</span> cách ra và css màu cho nó 
    //  ${text.substring(index+filter.length)} khi cắt ra và in màu những chữ phía sau sẽ bị mất nên phải công thêm từ vị trí in màu đến hết