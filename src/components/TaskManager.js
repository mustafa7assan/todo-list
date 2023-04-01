import Task from "./Task";
import taskCard from "./taskCard";
import currentProject from "./currentProject";
class taskManager {
  constructor() {
    this.tasks = [];
  }

  getTask(index) {
    return this.tasks[index];
  }

  addTask(obj) {
    const task = new Task(
      obj.title,
      obj.description,
      obj.dueDate,
      obj.priority
    );
    this.tasks.push(task);
    this.showTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.showTasks();
  }

  showTasks() {
    const title = document.querySelector(".title");
    title.textContent = currentProject.project.title;
    const tasksContainer = document.querySelector(".tasks-container");
    const dones = document.querySelector(".dones-container");
    tasksContainer.innerHTML = "";
    dones.innerHTML = "<h3>COMPLETED TASKS</h3>";
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.complete) {
        dones.appendChild(taskCard(task, i));
      } else {
        tasksContainer.appendChild(taskCard(task, i));
      }
    }
  }
}

export default taskManager;
