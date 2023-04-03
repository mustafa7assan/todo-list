import "./css/style.css";
import header from "./components/header";
import main from "./components/main";
import footer from "./components/footer";
import aside from "./components/aside";
import currentProject from "./components/currentProject";
import projectManager from "./components/projectManager";
const app = document.querySelector(".app");
app.appendChild(header());
app.appendChild(main());
app.appendChild(aside());
app.appendChild(footer());
projectManager.addProject("today");
const today = projectManager.getProject("today");
currentProject.project = today;
currentProject.project.tm.showTasks();

window.addEventListener("click", (e) => {
  const aside = document.querySelector("aside");
  if (!e.target.closest("aside") && !e.target.matches(".burger-menu")) {
    aside.classList.remove("show");
  }
});
