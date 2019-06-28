import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE?
	//to draw stuff? idk you are the one that declared the function, comments
	let todolist = _todoService.Todos
	let template = '<ul>'

	todolist.forEach(todo => {
		template += todo.Template
	})

	template += '</ul>'



	document.querySelector("#todos").innerHTML = template


}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
	//why is this commented out?
	//we haven't even been told to do this yet and its not in the reqs, so mmmmeh


}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()

	}

	addTodo(ev) {
		ev.preventDefault()

		var form = ev.target
		debugger

		var todo = {
			description: form.description.value
		}

		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
