import projectCard from "./projectCard";
const projectManager = (() => {
  const projects = ["Welcome", "Try Board", "Assignments"];

  const showProjects = () => {
    const projectsContainer = document.querySelector(".projects");
    for (const project of projects) {
      projectsContainer.appendChild(projectCard(project));
    }
  };
  return { showProjects };
})();

export default projectManager;
