

const todoForm = document.querySelector('.todo-form')
const todoList = document.querySelector('.todo-list')
const saveLocal = JSON.parse(localStorage.getItem('listTodo'))||[]


function renderTodoList(value) {
    const template = `
        <div class="todo-item">
        <span class="todo-text">${value}</span>
        <i class="fa fa-trash todo-remove" data-value="${value}"></i>
       </div>
         `
    todoList.insertAdjacentHTML('beforeend',template)
}

// Render từ localStorage
saveLocal.forEach(item => renderTodoList(item))


todoForm.addEventListener('submit',function(e) {

    e.preventDefault()
    
    const value = this.elements['todo'].value
    
    // Render todo list
    renderTodoList(value)
    this.elements['todo'].focus()
    this.elements['todo'].value = null
    
    // Lưu lại và localStorage
    saveLocal.push(value)
    localStorage.setItem('listTodo',JSON.stringify(saveLocal))
    
})

// Xóa todo lits
 let index
todoList.onclick = (e) => {

    if(e.target.matches('.todo-remove')) {
        const todo = e.target.parentNode
        todo.remove()


        const todoText = e.target.previousElementSibling.textContent;
        // const textRemove = e.target.dataset.value
        index = saveLocal.findIndex(item => item===todoText)
        saveLocal.splice(index,1)
        localStorage.setItem('listTodo',JSON.stringify(saveLocal))
    }
}
