'use strict';

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  get getName() {
    return this.name;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  getTodo(index) {
    return this.todos[index];
  }

  getAllTodos() {
    return this.todos;
  }
}

export { Project };
