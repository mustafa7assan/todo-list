import projectManager from "./projectManager";
import currentProject from "./currentProject";
import img1 from "../img/dots.svg";
import img3 from "../img/delete.svg";
const projectCard = (project, index) => {
  const card = document.createElement("li");
  card.classList.add("project");
  const html = `
  <p class="project-name">${project.title}</p>
  <img src="${img1}" class="icon dots" alt="" />
  <div class="project-pop hidden">
    <div class="project-delete">
      <img src="${img3}" class="icon" alt="" />Delete
      project
    </div>
  </div>`;

  card.insertAdjacentHTML("afterbegin", html);

  // Show projects tasks
  card.addEventListener("click", () => {
    const title = card
      .querySelector(".project-name")
      .textContent.trim()
      .toLowerCase();
    const project = projectManager.getProject(title);
    currentProject.project = project;
    currentProject.project.tm.showTasks();
    const aside = document.querySelector("aside");
    aside.classList.toggle("show");
  });
  // Dots Menu Button
  const menuButton = card.querySelector(".dots");
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const popper = card.querySelector(".project-pop");
    popper.classList.toggle("hidden");
  });
  // delete button project
  const deleteButton = card.querySelector(".project-delete");
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    projectManager.deleteProject(index);
    const popper = card.querySelector(".project-pop");
    popper.classList.toggle("hidden");
    // After Project is deleted
    const project = projectManager.getProject("today");
    currentProject.project = project;
    currentProject.project.tm.showTasks();
  });
  return card;
};

export default projectCard;
