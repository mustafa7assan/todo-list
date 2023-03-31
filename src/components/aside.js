import projectForm from "./projectForm";
const aside = () => {
  const aside = document.createElement("aside");
  const projectsContainer = document.createElement("ul");
  projectsContainer.classList.add("projects");
  const html = `<div class="project today">
  <img src="../src/img/today.svg" class="icon" alt="" />
  <p class="project-name">Today</p>
</div>
<div class="projects-container">
  <div class="header">
    Projects
    <img src="../src/img/plus.svg" class="icon add-project" alt="" />
  </div>`;
  aside.insertAdjacentHTML("afterbegin", html);
  aside.appendChild(projectForm());
  aside.appendChild(projectsContainer);
  return aside;
};

const html = `

  
  <ul class="projects">
    
  </ul>
</div>
</aside>`;
export default aside;
