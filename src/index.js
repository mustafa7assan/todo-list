import "./css/style.css";
import header from "./components/header";
import main from "./components/main";
import taskManager from "./components/TaskManager";

const app = document.querySelector(".app");
app.appendChild(header());
app.appendChild(main());
taskManager.showTasks();
