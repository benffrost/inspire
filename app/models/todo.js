export default class Todo {
  constructor(data) {
    this._id = data._id || ""
    this.completed = data.completed || false
    this.user = data.user || "BFF"
    this.description = data.description || ""
  }

  get Template() {
    return `
    <li>${this.completed ? "<s>" : ""}${this.description}${this.completed ? "</s>" : ""}
    <button onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
      Complete
    </button>
    <button onclick="app.controllers.todoController.removeTodo('${this._id}')">
      Delete
    </button></li>`
  }
}
