let todoArr: Todo[] = [];
const tasksContainer = document.getElementById("tasks-container") as HTMLDivElement;
const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", (e) => handleForm(e));
function handleForm(e: Event) {
  e.preventDefault();
  const formData: FormData = new FormData(form);
  const description: string = formData.get("description")?.toString()!;
  const newTodo: Todo = new Todo(description);
  todoArr = [...todoArr, newTodo];
  DOM.renderData();
  DOM.clearForm();
}

class Todo {
  id: string;
  description: string;
  public constructor(description: string) {
    this.id = this.generateId();
    this.description = description;
  };
  private generateId(): string {
    return Math.random().toString().substring(2, 10);
  };
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

