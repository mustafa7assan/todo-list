import taskManager from "./TaskManager";
import taskCard from "./taskCard";
import taskForm from "./taskForm";
const addTaskButton = () => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("add-task-btn");
  const img = `<img src="../src/img/plus.svg" alt="" class="icon" /> Add task`;
  button.insertAdjacentHTML("afterbegin", img);
  button.addEventListener("click", () => {
    const form = document.querySelector(".add-task-form");
    form.classList.toggle("hidden");
  });
  return button;
};

const main = () => {
  // Creating Elements
  const main = document.createElement("main");
  const container = document.createElement("div");
  container.classList.add("container");
  const tasksContainer = document.createElement("div");
  tasksContainer.classList.add("tasks-container");
  // Append child
  container.appendChild(addTaskButton());
  container.appendChild(taskForm());
  container.appendChild(tasksContainer);
  main.appendChild(container);
  return main;
};

export default main;
