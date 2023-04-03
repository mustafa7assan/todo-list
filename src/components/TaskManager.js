import Task from "./Task";
import taskCard from "./taskCard";
import currentProject from "./currentProject";
class taskManager {
  constructor(projectName) {
    this.tasks = [];
    this.projectName = projectName;
  }

  getTaskFromStorage = () => {
    const tasks = localStorage.getItem(this.projectName);
    return JSON.parse(tasks);
  };

  setTasksToStorage = (tasks) => {
    localStorage.setItem(this.projectName, JSON.stringify(tasks));
  };

  getTask(index) {
    const tasks = this.getTaskFromStorage();
    return tasks[index];
  }

  addTask(obj) {
    const task = new Task(
      obj.title,
      obj.description,
      obj.dueDate,
      obj.priority
    );
    this.tasks.push(task);
    this.setTasksToStorage(this.tasks);
    this.showTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.setTasksToStorage(this.tasks);
    this.showTasks();
  }

  editTask(index, data) {
    const tasks = this.getTaskFromStorage();
    const task = tasks[index];
    task.title = data.title;
    task.description = data.description;
    task.dueDate = data.dueDate;
    this.setTasksToStorage(tasks);
    this.showTasks();
  }
  updateTask(index) {
    const tasks = this.getTaskFromStorage();
    const task = tasks[index];
    task.complete = !task.complete;
    this.setTasksToStorage(tasks);
    this.showTasks();
  }

  showTasks() {
    const title = document.querySelector(".title");
    title.textContent = currentProject.project.title;
    const tasksContainer = document.querySelector(".tasks-container");
    const dones = document.querySelector(".dones-container");
    tasksContainer.innerHTML = "";
    dones.innerHTML = "<h3>COMPLETED TASKS</h3>";
    const tasks = this.getTaskFromStorage() || [];
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.complete) {
        dones.appendChild(taskCard(task, i));
      } else {
        tasksContainer.appendChild(taskCard(task, i));
      }
    }
  }
}

export default taskManager;
