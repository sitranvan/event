

const input = document.querySelector('.input-search')
const dropItem = document.querySelectorAll('.dropdown-item')
input.oninput = function(e) {
    
    let value = input.value
    value = value.toLowerCase();
    
    
    dropItem.forEach(item => {

        const text = item.textContent
        const index = text.toLowerCase().indexOf(value)
        if(index!=-1 && text.toLowerCase().startsWith(value.charAt(0))) {
            item.innerHTML =`${text.substring(0,index)}<span class="primary">${text.substring(index,index+value.length)}</span>${text.substring(index+value.length)}`
        }

    })
}