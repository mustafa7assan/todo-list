import projectCard from "./projectCard";
import Project from "./Project";
const projectManager = (() => {
  const projects = [];
  const addProject = (title) => {
    const project = new Project(title);
    projects.push(project);
    showProjects();
  };

  const deleteProject = (index) => {
    projects.splice(index, 1);
    showProjects();
  };
  const showProjects = () => {
    const projectsContainer = document.querySelector(".projects");
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      projectsContainer.appendChild(projectCard(project, i));
    }
  };
  return { addProject, deleteProject, showProjects };
})();

export default projectManager;
