import Task from "./Task";
import taskCard from "./taskCard";
const taskManager = (() => {
  const tasks = [
    new Task(
      "Task Onw",
      "if you have multiple cards with buttons and events that are associated with those buttons, you will need to ensure that the event works for the correct card when the button is clicked",
      "24/2/2022",
      "high"
    ),
    new Task(
      "Task Two",
      "if you have multiple cards with buttons and events that are associated with those buttons, you will need to ensure that the event works for the correct card when the button is clicked",
      "24/2/2022",
      "medium"
    ),

    new Task(
      "Task Three",

      "if you have multiple cards with buttons and events that are associated with those buttons, you will need to ensure that the event works for the correct card when the button is clicked",
      "24/2/2022",
      "low"
    ),
  ];

  const getTask = (index) => tasks[index];

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

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    showTasks();
  };

  const showTasks = () => {
    const tasksContainer = document.querySelector(".tasks-container");
    const dones = document.querySelector(".dones-container");
    tasksContainer.innerHTML = "";
    dones.innerHTML = "<h3>COMPLETED TASKS</h3>";
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.complete) {
        dones.appendChild(taskCard(task, i));
      } else {
        tasksContainer.appendChild(taskCard(task, i));
      }
    }
  };

  return { addTask, showTasks, deleteTask, getTask };
})();

export default taskManager;
