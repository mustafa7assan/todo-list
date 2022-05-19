'use strict';

import { Project } from './Project';
import { Todo } from './Todo';
import { TodoList } from './TodoList';

const today = new Project('today');
const todoList = new TodoList();
todoList.addProject(today);

let currentProject = today;

const UI = (() => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  // Buttons
  const btnAddTodo = document.querySelector('.btn--add-todo');
  const btnCancle = document.querySelector('.form__btn-cancle');
  const btnAddProject = document.querySelector('.btn--add-project');
  const btnProjectsExpand = document.querySelector('.btn--expand');
  // Lables
  const projectNameEl = document.querySelector('.project-name');
  const todayEl = document.querySelector('.today');
  // Form
  const formAddTodo = document.querySelector('.add-todo-form');
  const fromAddProject = document.querySelector('.add-project-form');
  // Inputs
  const inputTodoTitle = document.querySelector('#todo-title');
  const inputTodoDescription = document.querySelector('#todo-description');
  const inputTodoDate = document.querySelector('#todo-date');
  const inputTodoPriority = document.querySelector('#todo-priority');
  const inputProjectName = document.querySelector('#project__name');
  // Containers
  const projectsTodos = document.querySelector('.projects-todos');
  const projectListContainer = document.querySelector('.projects__list');
  const init = () => {
    projectNameEl.textContent = currentProject.getName;
    btnAddTodo.addEventListener('click', showModal);
    btnCancle.addEventListener('click', hideModal);
    formAddTodo.addEventListener('submit', e => {
      e.preventDefault();
      addNewTodo();
    });
    btnAddProject.addEventListener('click', () => {
      fromAddProject.classList.toggle('hidden');
    });
    fromAddProject.addEventListener('submit', addNewProject);
    todayEl.addEventListener('click', () => {
      currentProject = todoList.getProject('today');
      ShowTodos(currentProject);
    });
    btnProjectsExpand.addEventListener('click', () => {
      projectListContainer.classList.toggle('hidden');
    });
  };

  const showModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };

  const hideModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };

  // Add New Todo
  const addNewTodo = () => {
    const todoTitle = inputTodoTitle.value;
    const todoDescription = inputTodoDescription.value;
    const todoDate = inputTodoDate.value.split('-').reverse().join('/');
    const todoPriority = inputTodoPriority.value;
    hideModal();
    formAddTodo.reset();
    currentProject.addTodo(
      new Todo(todoTitle, todoDescription, todoDate, todoPriority)
    );
    ShowTodos(currentProject);
  };
  // Add New Project
  const addNewProject = e => {
    e.preventDefault();
    const pName = inputProjectName.value.toLowerCase();
    if (pName !== ' ') {
      fromAddProject.classList.toggle('hidden');
      // Create New Project
      const project = new Project(pName);
      todoList.addProject(project);
      showProjects();
      e.target.reset();
    }
  };

  // Disaply All Dodos for a Project
  const ShowTodos = project => {
    projectNameEl.textContent = project.getName;
    const todos = project.getAllTodos();
    projectsTodos.innerHTML = '';
    for (const [index, todo] of todos.entries()) {
      const html = `<div class="todo-container priority-${todo.getPriority}" data-id="${index}">
      <div class="todo">
        <div class="todo__title">
          <i class="fa-regular fa-circle-check done-icon" data-done=${index} title="Done" ></i>
          <span class="todo__text">${todo.getTitle}</span>
        </div>
        <div class="todo__controls">
          <i class="fa-regular fa-pen-to-square edit-icon" title="Edit Task"></i>
          <i class="fa-solid fa-circle-info details-icon" data-details="${index}" title="Task Details" ></i>
        </div>
      </div>
      <div class="todo__details hidden" data-index="${index}">
        <div class="todo__description">
          <h4>Description</h4>
          <p>
           ${todo.getDescription}
          </p>
        </div>
        <div>
          <div class="todo__date">
            <h4>Date</h4>
            <p>${todo.getDueDate}</p>
          </div>
          <div class="todo__priority">
            <h4>Priority</h4>
            <p>Level ${todo.getPriority}</p>
          </div>
        </div>
      </div>
    </div>`;
      projectsTodos.insertAdjacentHTML('afterbegin', html);
    }
    // Deatils Buttons
    projectsTodos.querySelectorAll('.details-icon').forEach(detailsIcon => {
      detailsIcon.addEventListener('click', e => {
        const index = e.target.dataset.details;
        const todoDeatils = [
          ...document.querySelectorAll('.todo__details'),
        ].find(todoDeatils => todoDeatils.dataset.index === index);
        // hide && show todo details
        todoDeatils.classList.toggle('hidden');
      });
    });
    // Done Button
    projectsTodos.querySelectorAll('.done-icon').forEach(doneIcon => {
      doneIcon.addEventListener('click', e => {
        const index = e.target.dataset.done;
        // remove todo from current project
        currentProject.removeTodo(+index);
        const todoContainer = [
          ...projectsTodos.querySelectorAll('.todo-container'),
        ].find(tc => tc.dataset.id === index);
        // remove todo from current proejct ui
        projectsTodos.removeChild(todoContainer);
      });
    });
  };

  // Display All Projects
  const showProjects = () => {
    const projects = todoList.getAllProjects();
    projectListContainer.innerHTML = '';
    for (const project of projects) {
      if (project.getName === 'today') continue;
      const li = `<li><i class="fa-solid fa-list-check"></i>${project.getName}</li>`;
      projectListContainer.insertAdjacentHTML('afterbegin', li);
      document.querySelectorAll('.projects__list li').forEach(li => {
        li.addEventListener('click', () => {
          const projectName = li.textContent.toLowerCase();
          currentProject = todoList.getProject(projectName);
          ShowTodos(currentProject);
        });
      });
    }
  };

  return { init };
})();

export { UI };
