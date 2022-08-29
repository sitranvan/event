const form = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');


function createValue(value) {
    const template = `
    <div class="todo-item">
    <span class="todo-text">${value}</span>
    <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
   </div>
    `
    todoList.insertAdjacentHTML('beforeend', template);
}
// Lấy giá trị trong localStorage gán cho todos
let todos = localStorage.length > 0 ? JSON.parse(localStorage.getItem('workList')) : [];
// Hiện lên Dom
todos.length > 0 && [...todos].forEach(item => createValue(item))

form && form.addEventListener('submit', function(e) {

    // Dom
    e.preventDefault();
    const todoValue = this.elements['todo'].value;
    if (!todoValue.trim()) return;
    createValue(todoValue)
    this.elements['todo'].value = '';

    // localStorage
    todos.push(todoValue);
    localStorage.setItem('workList', JSON.stringify(todos))
})

// Remove
todoList && todoList.addEventListener('click', function(e) {
    if (e.target.matches('.todo-remove')) {
        // Remove in Dom
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);

        // Remove in localStorage
        const todoText = e.target.previousElementSibling.textContent;
        const index = [...todos].findIndex(item => item === todoText);
        todos.splice(index, 1); // Cắt từ vị trí index vừa tìm được tức là cắt bỏ chính nó nếu console.log(todos.splice(index, 1)) 
        // Thì nó sẽ in ra phần tử index còn nếu in ra todos thì mảng sẽ thay đổi tức là sẽ cắt bỏ phần tử index
        // Có thể dùng forEach filter...
        localStorage.setItem('workList', JSON.stringify(todos))
    }
})