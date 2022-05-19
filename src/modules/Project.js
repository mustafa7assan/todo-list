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

  getAllTodos() {
    return this.todos;
  }
}

export { Project };
