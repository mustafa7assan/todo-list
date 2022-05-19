'use strict';
const TodoList = (function () {
  const projects = [];

  const addProject = project => {
    projects.push(project);
  };

  const getProject = name => {
    return projects.find(project => project.name === name);
  };

  const removeProject = index => {
    projects.splice(index, 1);
  };

  const getAllProjects = () => {
    return projects;
  };
  return { addProject, getProject, removeProject, getAllProjects };
})();

export { TodoList };
