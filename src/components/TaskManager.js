import Task from "./Task";
import taskCard from "./taskCard";
const taskManager = (() => {
  const tasks = [];

  const addTask = (obj) => {
    const task = new Task(
      obj.title,
      obj.description,
      obj.dueDate,
      obj.priority
    );
    tasks.push(task);
    showTasks();
  };

  const showTasks = () => {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      tasksContainer.appendChild(taskCard(task, i));
    }
  };

  return { addTask, showTasks };
})();

export default taskManager;
