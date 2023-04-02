import projectForm from "./projectForm";
import currentProject from "./currentProject";
import projectManager from "./projectManager";
import img1 from "../img/today.svg";
import img2 from "../img/plus.svg";
const aside = () => {
  const aside = document.createElement("aside");
  const projectsContainer = document.createElement("ul");
  projectsContainer.classList.add("projects");
  const html = `<div class="project today">
  <img src="${img1}" class="icon" alt="" />
  <p class="project-name">Today</p>
</div>
<div class="projects-container">
  <div class="header">
    Projects
    <img src="${img2}" class="icon add-project" alt="" />
  </div>`;
  aside.insertAdjacentHTML("afterbegin", html);
  aside.appendChild(projectForm());
  aside.appendChild(projectsContainer);
  // Today Project

  const today = aside.querySelector(".today");
  today.addEventListener("click", () => {
    const project = projectManager.getProject("today");
    currentProject.project = project;
    currentProject.project.tm.showTasks();
    const aside = document.querySelector("aside");
    aside.classList.toggle("show");
  });
  // New Project Form
  const addProjectButton = aside.querySelector(".add-project");
  addProjectButton.addEventListener("click", () => {
    const form = aside.querySelector("form");
    form.classList.toggle("hidden");
  });

  return aside;
};
export default aside;
