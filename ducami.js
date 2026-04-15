function addTodo() {

    const Input = document.getElementById('todoInput')
    const text = Input.value()

    const li = document.createElement('li');

    li.innerHTML = text;
    document.getElementById('todoList').appendChild(li);

    Input.value = "";
}