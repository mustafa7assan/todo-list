import currentProject from "./currentProject";
import t from "../img/t.svg";
import f from "../img/f.svg";
import img1 from "../img/date.svg";
import img2 from "../img/dots.svg";
import img3 from "../img/edit.svg";
import img4 from "../img/delete.svg";
const taskCard = (task, index) => {
  const card = document.createElement("div");
  card.classList.add("task-card");
  card.classList.add(task.priority);
  const html = `
    <div class="task-done">
      <img src="${task.complete ? t : f}" class="icon" alt="" />
    </div>
    <div class="task-content">
      <h3 class="task-title">${task.title}</h3>
      <p class="task-description">
        ${task.description}
      </p>
      <div class="task-duedate-container" >
      <img src="${img1}" class="icon" alt="" />
      <p class="task-duedate"> ${task.dueDate} </p>
      <button class="btn hidden save">Save</button>
      </div>
    </div>
    <div class="task-menu">
      <img src="${img2}" class="icon" alt="" />
    </div>
    <div class="task-pop hidden">
      <div class="task-edit">
        <img src="${img3}" class="icon" alt="" /> Edit task
      </div>
      <div class="task-delete">
        <img src="${img4}" class="icon" alt="" />Delete
        task
      </div>
    </div>
`;
  card.insertAdjacentHTML("afterbegin", html);
  // Save Button
  const saveButton = card.querySelector(".save");
  saveButton.addEventListener("click", () => {
    const taskTitleElement = card.querySelector(".task-title");
    const taskDescriptionElement = card.querySelector(".task-description");
    const taskDueDateElement = card.querySelector(".task-duedate");
    makeUnEditable(
      taskDueDateElement,
      taskDescriptionElement,
      taskTitleElement
    );
    const task = {};
    task.title = taskTitleElement.textContent;
    task.description = taskDescriptionElement.textContent;
    task.dueDate = taskDueDateElement.textContent;
    currentProject.project.tm.editTask(index, task);
    saveButton.classList.toggle("hidden");
  });
  // Menu Button
  const cardMenu = card.querySelector(".task-menu");
  cardMenu.addEventListener("click", () => {
    const popper = card.querySelector(".task-pop");
    popper.classList.toggle("hidden");
  });
  // Done Button
  const doneButton = card.querySelector(".task-done");
  doneButton.addEventListener("click", () => {
    // const task = currentProject.project.tm.getTask(index);
    currentProject.project.tm.updateTask(index);
    // currentProject.project.tm.showTasks();
  });
  // Delete Button
  const deleteButton = card.querySelector(".task-delete");
  deleteButton.addEventListener("click", () => {
    const popper = deleteButton.parentElement;
    currentProject.project.tm.deleteTask(index);
    popper.classList.toggle("hidden");
  });
  // Edit Button
  const editButton = card.querySelector(".task-edit");
  editButton.addEventListener("click", () => {
    saveButton.classList.toggle("hidden");
    const taskTitleElement = card.querySelector(".task-title");
    const taskDescriptionElement = card.querySelector(".task-description");
    const taskDueDateElement = card.querySelector(".task-duedate");
    makeEditable(taskDueDateElement, taskDescriptionElement, taskTitleElement);
    taskTitleElement.focus();
    const popper = deleteButton.parentElement;
    popper.classList.toggle("hidden");
  });
  return card;
};

const makeEditable = (...elements) => {
  for (const element of elements) {
    element.contentEditable = true;
  }
};

const makeUnEditable = (...elements) => {
  for (const element of elements) {
    element.contentEditable = false;
  }
};

export default taskCard;
