'use strict';

import { Project } from './Project';
import { Todo } from './Todo';
import { todoList } from './TodoList';
import { Storage } from './Storage';

const today = new Project('today');
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
    projectNameEl.textContent = currentProject.name;
    // Event Listeners
    btnAddTodo.addEventListener('click', showModal);
    btnCancle.addEventListener('click', hideModal);
    btnAddProject.addEventListener('click', () => {
      fromAddProject.classList.toggle('hidden');
    });
    btnProjectsExpand.addEventListener('click', () => {
      projectListContainer.classList.toggle('hidden');
    });
    fromAddProject.addEventListener('submit', addNewProject);
    todayEl.addEventListener('click', () => {
      currentProject = todoList.getProject('today');
      ShowTodos(currentProject);
    });
    formAddTodo.addEventListener('submit', addNewTodo);
    showProjects();
    ShowTodos(today);
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
  const addNewTodo = e => {
    e.preventDefault();
    const todoTitle = inputTodoTitle.value;
    const todoDescription = inputTodoDescription.value;
    const todoDate = inputTodoDate.value.split('-').reverse().join('/');
    const todoPriority = inputTodoPriority.value;
    hideModal();
    formAddTodo.reset();
    const todo = new Todo(todoTitle, todoDescription, todoDate, todoPriority);
    // currentProject.todos.push(
    //   new Todo(todoTitle, todoDescription, todoDate, todoPriority)
    // );

    // local Stroage
    Storage.saveTodo(currentProject.name, todo);
    // Save new Todo to local Storage
    ShowTodos(currentProject);
  };

  // Edit Todo function
  const editTodo = e => {
    e.preventDefault();
    const todoTitle = document.getElementById('todo-title-ed').value;
    const todoDescription = document.getElementById(
      'todo-description-ed'
    ).value;
    const todoDate = document
      .getElementById('todo-date-ed')
      .value.split('-')
      .reverse()
      .join('/');
    const todoPriority = document.getElementById('todo-priority-ed').value;
    const index = e.target.parentElement.dataset.index;
    // Delete todo from local Stroage
    const todo = Storage.deleteTodo(currentProject.name, +index);
    deleteTodoFromUI(index);
    todo.title = todoTitle;
    todo.description = todoDescription;
    todo.dueDate = todoDate;
    todo.priority = todoPriority;
    // Add todo to local Storage
    Storage.saveTodo(currentProject.name, todo);
    e.target.parentElement.classList.toggle('hidden');
    ShowTodos(currentProject);
  };

  // Disaply All Dodos for a Project
  const ShowTodos = project => {
    projectNameEl.textContent = project.name;
    // Get all Todos from this projects
    const todos = Storage.retriveTodos(project.name) || [];
    projectsTodos.innerHTML = '';
    for (const [index, todo] of todos.entries()) {
      const html = `<div class="todo-container priority-${
        todo.priority
      }" data-id="${index}">
      <div class="todo">
        <div class="todo__title">
          <i class="fa-regular fa-circle-check done-icon" data-done=${index} title="Done" ></i>
          <span class="todo__text">${todo.title}</span>
        </div>
        <div class="todo__controls">
          <i class="fa-regular fa-pen-to-square edit-icon"  data-edit="${index}" title="Edit Task"></i>
          <i class="fa-solid fa-circle-info details-icon" data-details="${index}" title="Task Details" ></i>
        </div>
      </div>
      <div class="todo__details hidden" data-index="${index}">
        <div class="todo__description">
          <h4>Description</h4>
          <p>
           ${todo.description}
          </p>
        </div>
        <div>
          <div class="todo__date">
            <h4>Date</h4>
            <p>${todo.dueDate}</p>
          </div>
          <div class="todo__priority">
            <h4>Priority</h4>
            <p>Level ${todo.priority}</p>
          </div>
        </div>
      </div>
      <div class="todo__edit hidden" data-index="${index}">
              <form class="edit-todo-form">
                <ul>
                  <li>
                    <label for="todo-title-ed">Task Title</label>
                    <input type="text" id="todo-title-ed"  value="${
                      todo.title
                    }" required />
                  </li>
                  <li>
                    <label for="todo-decription-ed">Task Description</label>
                    <textarea
                      name=""
                      id="todo-description-ed"
                      cols="30"
                      rows="5"
                      required
                    > ${todo.description}</textarea>
                  </li>
                  <li class="two-input">
                    <div>
                      <label for="todo-date-ed">Task Date</label>
                      <input type="date"  id="todo-date-ed" value="${todo.dueDate
                        .split('/')
                        .reverse()
                        .join('-')}" required />
                    </div>
                    <div>
                      <label for="todo-priority-ed">Task Priority</label>
                      <select name="" id="todo-priority-ed" required>
                        <option value="${todo.priority}"  disabled selected>
                        Pirority${todo.priority}                 </option>
                        <option value="1">Pirority 1</option>
                        <option value="2">Pirority 2</option>
                        <option value="3">Pirority 3</option>
                      </select>
                    </div>
                  </li>
                </ul>
                <button class="btn form__btn-save" type="submit">Save</button>
              </form>
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
        const todoEdit = [...document.querySelectorAll('.todo__edit')].find(
          todoEdit => todoEdit.dataset.index === index
        );
        // hide && show todo details
        todoDeatils.classList.toggle('hidden');
        // hide && show todo Edit
        todoEdit.classList.add('hidden');
      });
    });
    // Done Button
    projectsTodos.querySelectorAll('.done-icon').forEach(doneIcon => {
      doneIcon.addEventListener('click', e => {
        const index = e.target.dataset.done;
        // remove todo from current project
        //currentProject.todos.splice(index, 1);
        Storage.deleteTodo(currentProject.name, +index);
        deleteTodoFromUI(index);
      });
    });
    // Edit Button
    projectsTodos.querySelectorAll('.edit-icon').forEach(editIcon => {
      editIcon.addEventListener('click', e => {
        const index = e.target.dataset.edit;
        const todoEdit = [...document.querySelectorAll('.todo__edit')].find(
          todoEdit => todoEdit.dataset.index === index
        );
        const todoDeatils = [
          ...document.querySelectorAll('.todo__details'),
        ].find(todoDeatils => todoDeatils.dataset.index === index);
        // hide && show todo details
        todoEdit.classList.toggle('hidden');
        // hide && show todo details
        todoDeatils.classList.add('hidden');
      });
    });
    // Edit Form
    projectsTodos.querySelectorAll('.edit-todo-form').forEach(editForm => {
      editForm.addEventListener('submit', editTodo);
    });
  };

  const deleteTodoFromUI = index => {
    const todoContainer = [
      ...projectsTodos.querySelectorAll('.todo-container'),
    ].find(tc => tc.dataset.id === index);
    // remove todo from current project ui
    projectsTodos.removeChild(todoContainer);
  };

  // Add New Project
  const addNewProject = e => {
    e.preventDefault();
    const projectName = inputProjectName.value.toLowerCase();
    if (projectName !== ' ') {
      fromAddProject.classList.toggle('hidden');
      // Create New Project
      const project = new Project(projectName);
      todoList.addProject(project);
      showProjects();
      e.target.reset();
    }
  };
  // Display All Projects
  const showProjects = () => {
    // Get all Projects From local Storage
    const projects = todoList.getProjects() || [];
    projectListContainer.innerHTML = '';
    for (const [index, project] of projects.entries()) {
      if (project.name === 'today') continue;
      const li = `<li><i class="fa-solid fa-list-check"></i>${project.name}<i class="fa-solid fa-trash btn-delete-project" title="Delete" data-index="${index}"></i></li>`;
      projectListContainer.insertAdjacentHTML('afterbegin', li);
    }
    // showing Project's todo
    document.querySelectorAll('.projects__list li').forEach(li => {
      li.addEventListener('click', () => {
        const projectName = li.textContent.toLowerCase();
        currentProject = todoList.getProject(projectName) || today;
        ShowTodos(currentProject);
      });
    });
    // Delete proejct
    document.querySelectorAll('.btn-delete-project').forEach(delteButton => {
      delteButton.addEventListener('click', e => {
        const index = e.target.dataset.index;
        todoList.removeProject(+index);
        showProjects();
      });
    });
  };

  return { init };
})();

export { UI };
