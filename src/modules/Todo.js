'use strict';

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  // Getter
  get getTitle() {
    return this.title;
  }
  get getDescription() {
    return this.description;
  }
  get getPriority() {
    return this.priority;
  }
  get getDueDate() {
    return this.dueDate;
  }
  // Setter
  set setTitle(value) {
    this.title = value;
  }
  set setDescription(value) {
    this.description = value;
  }
  set setPriority(value) {
    this.priority = value;
  }
  set setDueDate(value) {
    this.dueDate = value;
  }
}

export { Todo };
