let todos = JSON.parse(localStorage.getItem('todos')) || [];
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text == '') return;
    input.value = '';
    const inputTime = document.getElementById('todo-input-time');
    const time = inputTime.value.trim();
    if (time == '') return;
    const radioInput=document.querySelector('input[name="status"]:checked')
    const priority=radioInput?radioInput.value:"urgent";
    todos.push({ text, time, priority,completed: false });
    input.value = '';
    inputTime.value = '';
    saveTodos();
    renderTodos();
}
function sortData(){
    console.log("clicked");
    
    todos.sort((a,b)=>{
        return a.text.localeCompare(b.text);
    })
    renderTodos();
}
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}
function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.completed) li.classList.add('completed');
        li.innerHTML = `
                <span>${todo.text}</span>
                <span>${todo.time}</span>
                <span>${todo.priority}</span>
                <div>
                <button onclick="toggleComplete(${index})" color='green'>✔</button>
                <button onclick="deleteTodo(${index})">✖</button>
                </div>
                `;
        list.appendChild(li);
    })
}