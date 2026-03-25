let tasks = [];
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;
    if (taskText == "") return;
    tasks.push(taskText);
    input.value = "";
    renderTasks();
}
function renderTasks(){
    let list=document.getElementById("taskList");
    list.innerHTML="";
    for(let i=0;i<tasks.length;i++){
        let li=document.createElement("li");
        li.innerHTML=`
        ${tasks[i]}
        <button onclick="deleteTask(${i})">delete</button>
        `;
        list.appendChild(li);
li.onclick=toggleComplete;

    }
}
function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
}
function toggleComplete(event){
    event.target.classList.toggle("completed");
}