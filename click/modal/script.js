//Cách 1 dùng js
//const button = document.querySelector('.btn')
const templete = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>
`
document.addEventListener('click',(e) => {
  if(e.target.matches('.btn')) {
    document.body.insertAdjacentHTML('beforeend',templete)
  } else if(e.target.matches('.modal-close')) {
    const modal = e.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  } else if(e.target.matches('.modal')) {
    e.target.parentNode.removeChild(e.target);
  }
})

// Hoặc addEvent vào button trước xong addEvent vào document
// Không nếu addEvent vào button trước thì không thể nào add event vào document.querySelector('.modal-close)
// Vì khi click vào button DOM mới được load ban đầu không hề tồn tại modal-close vì Js chạy từ trên xuống dưới

// Cách 2 thêm từng element vào DOM
// const modal = document.createElement('div');
// const modalContent = document.createElement('div');
// const close = document.createElement('i');
// modal.setAttribute('class','modal')
// modalContent.classList.add('modal-content')
// close.className = 'fa fa-times modal-close' // Thường nhiều class dùng className
// document.body.appendChild(modal)
// modal.appendChild(modalContent)
// modalContent.appendChild(close)
// document.addEventListener('click',(e)=> {

//     if(e.target.matches('.btn')) {
//     modal.classList.add('active')

//    } else if(e.target.matches('.modal-close')) {
//     modal.classList.remove('active')
    
//    } else if(e.target.matches('.modal')) {
//     modal.classList.remove('active')
//  }
// })



//Cách 3 xử lí HTML có sẵn
// const modal = document.querySelector('.modal')

// document.addEventListener('click',(e) => {

//   if(e.target.matches('.btn')) {
//     modal.classList.add('active')

//   } else if(e.target.matches('.modal-close')) {
//     modal.classList.remove('active')
    
//   } else if(e.target.matches('.modal')) {
//     modal.classList.remove('active')
    
//   }
// })