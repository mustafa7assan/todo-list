'use strict';

class TodoList {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  getProject(name) {
    return this.projects.find(project => project.name === name);
  }

  getAllProjects() {
    return this.projects;
  }
}

export { TodoList };
