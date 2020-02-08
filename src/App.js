import React, { Component } from 'react';
import ToDos from './component/ToDos';
import AddForm from './component/AddForm';

class App extends Component{
	state = {
		todos: [],
		currentTodo: {
			id:undefined,
			content:undefined
		}
	}
	deleteTodo = (id) => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id
		})
		this.setState({
			todos
		})

		localStorage.removeItem('toDoTask')
		localStorage.setItem('toDoTask', JSON.stringify(todos))
	}

	editTodo = (id,editedTask) => {
		const task = this.state.todos;
		task.map(task => {
			if(task.id === id){
				task.content = editedTask;
			}
			return true
		})
		this.setState({
			todos: task
		})

		localStorage.removeItem('toDoTask')
		localStorage.setItem('toDoTask', JSON.stringify(task))
	}

	addTodoTask = (todo) => {
		let todos = [...this.state.todos, todo]
		this.setState({
			todos: todos
		})
		localStorage.removeItem('toDoTask')
		localStorage.setItem('toDoTask', JSON.stringify(todos))

	}

	render()
	{
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">ToDos</h1>
				<AddForm addTodoTask={this.addTodoTask} />
				<ToDos todos={this.state.todos} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />
			</div>
		);
	}
}

export default App;
