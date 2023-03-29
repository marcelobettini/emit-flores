"use strict";
let todoArr = [];
const tasksContainer = document.getElementById("tasks-container");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => handleForm(e));
function handleForm(e) {
    var _a;
    e.preventDefault();
    const formData = new FormData(form);
    const description = (_a = formData.get("description")) === null || _a === void 0 ? void 0 : _a.toString();
    const newTodo = new Todo(description);
    todoArr = [...todoArr, newTodo];
    DOM.renderData();
    DOM.clearForm();
}
class Todo {
    constructor(description) {
        this.id = this.generateId();
        this.description = description;
    }
    ;
    generateId() {
        return Math.random().toString().substring(2, 10);
    }
    ;
}
//todo method to update the DOM & clear input from prev text
class DOM {
    static renderData() {
        let displayData = todoArr.map(todo => {
            return `
      <div class="todo">
      <p>${todo.description}</p><i class="las la-trash"></i>
      </div>
      `;
        });
        tasksContainer.innerHTML = displayData.join("");
    }
    static clearForm() {
        form.reset();
    }
}
