'use strict';

const Storage = (() => {
  const saveTodo = (projectName, todo) => {
    const projectTodos = JSON.parse(localStorage.getItem('projectTodos')) || {};
    if (!projectTodos[projectName]) {
      projectTodos[projectName] = [];
    }
    projectTodos[projectName].push(todo);
    localStorage.setItem('projectTodos', JSON.stringify(projectTodos));
  };
  const deleteTodo = (projectName, index) => {
    const projectTodos = JSON.parse(localStorage.getItem('projectTodos'));
    projectTodos[projectName].splice(index, 1);
    localStorage.setItem('projectTodos', JSON.stringify(projectTodos));
    return {};
  };
  const retriveTodos = projectName => {
    const pTodos = JSON.parse(localStorage.getItem('projectTodos'));
    return pTodos[projectName];
  };

  const saveProject = project => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    if (!projects.some(p => p.name === project.name)) {
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  };
  const deleteProject = index => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
  };
  const retriveProjects = () => {
    return JSON.parse(localStorage.getItem('projects'));
  };
  return {
    saveTodo,
    retriveTodos,
    deleteTodo,
    saveProject,
    retriveProjects,
    deleteProject,
  };
})();

export { Storage };
