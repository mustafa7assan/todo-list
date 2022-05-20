'use strict';
import { Storage } from './Storage';

const todoList = (() => {
  const addProject = project => {
    Storage.saveProject(project);
  };
  const getProject = name => {
    const projects = Storage.retriveProjects();
    return projects.find(project => project.name === name);
  };

  const removeProject = index => {
    Storage.deleteProject(index);
  };

  const getProjects = () => {
    return Storage.retriveProjects();
  };
  return { addProject, getProject, getProjects, removeProject };
})();

export { todoList };
