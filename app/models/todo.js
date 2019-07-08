export default class Todo {
  constructor(data) {
    this._id = data._id || ""
    this.completed = data.completed || false
    this.user = data.user || "BFF"
    this.description = data.description || ""
  }

  get Template() {
    return `
    <div class="row my-2 py-1">
      <div class="col">

        <div class="collapse" id="c-${this._id}">
          <div class="card card-body bg-light">
            ${this.description}
          </div>
        </div>
      </div>
    
      <div class="col-3 my-2 d-flex align-items-center justify-content-around">
        <button class="btn ${this.completed ? 'btn-success' : 'btn-warning'} btn-circle" type="button" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
        <i class="${this.completed ? 'far fa-check-square' : 'far fa-square'}"></i>
        </button >
        <button class="btn btn-secondary btn-circle collapsed" type="button" data-toggle="collapse" data-target="#c-${this._id}" aria-expanded="false" aria-controls="c-${this._id}">
          <i class="fas fa-bars"></i>
        </button>
        <button class="btn btn-danger btn-circle" type="button" onclick="app.controllers.todoController.removeTodo('${this._id}')">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      
    </div>

    `
  }
}
