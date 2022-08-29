const minus = document.querySelector('.counter-descrease')
const plus = document.querySelector('.counter-increase')
const counterNumber = document.querySelector('.counter-number')

// Lấy ra value
 let counterValue = parseInt(counterNumber.textContent);
// Xử lí plus +
plus.addEventListener('click', (e) => {
    if(counterValue>=15) return;
    counterValue++;
    counterNumber.textContent = counterValue;
})

// Xử lí minus -
minus.addEventListener('click', (e) => {
    if(counterValue<=0) return;
    counterValue--;
    counterNumber.textContent = counterValue;
})
