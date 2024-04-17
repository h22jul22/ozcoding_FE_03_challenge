const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('.todo-form');

let todoArr = [];

// 로컬 저장소에 저장하기
const saveTodos = () => {
    localStorage.setItem('myTodos', JSON.stringify(todoArr));
};

// 로컬 저장소에서 가져오기
const loadTodos = () => {
    const myTodos = localStorage.getItem('myTodos');
    if (myTodos) {
        todoArr = JSON.parse(myTodos);
        displayTodos();
    }
};

// 할 일 삭제하기
const handleTodoDelBtnClick = (clickedId) => {
    todoArr = todoArr.filter((todo) => {
        return todo.todoId !== clickedId;
    });
    displayTodos();
    saveTodos();
};

// 할 일 수정하기
const handleTodoItemClick = (clickedId) => {
    todoArr = todoArr.map((todo) => {
        if (todo.todoId === clickedId) {
            return { ...todo, todoDone: !todo.todoDone };
        } else {
            return todo;
        }
    });
    displayTodos();
    saveTodos();
};

// 할 일 보여주기
const displayTodos = () => {
    todoList.innerHTML = '';
    todoArr.forEach((todo) => {
        const todoItem = document.createElement('li');
        const todoDelBtn = document.createElement('span');
        todoItem.textContent = todo.todoText;
        todoItem.title = '완료했다면 클릭해주세요';
        if (todo.todoDone) {
            todoItem.classList.add('done');
        } else {
            todoItem.classList.add('yet');
        }
        todoDelBtn.textContent = '❌';
        todoDelBtn.title = '클릭하면 삭제됩니다';
        todoDelBtn.classList.add('Del-Btn');

        todoItem.addEventListener('click', () => {
            handleTodoItemClick(todo.todoId);
        });
        todoDelBtn.addEventListener('click', () => {
            handleTodoDelBtnClick(todo.todoId);
        });

        todoItem.append(todoDelBtn);
        todoList.append(todoItem);
    });
};

// 할 일 추가하기
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (todoForm.todo.value) {
        const toBeAdded = {
            todoText: todoForm.todo.value,
            todoId: new Date().getTime(),
            todoDone: false,
        };

        todoForm.todo.value = '';
        todoArr.push(toBeAdded);
        displayTodos();
        saveTodos();
    }
});

loadTodos();
