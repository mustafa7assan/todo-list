import projectCard from "./projectCard";
import Project from "./Project";
const projectManager = (() => {
  const projects = JSON.parse(localStorage.getItem("PS")) || [];
  const addProject = (title) => {
    const project = new Project(title);
    projects.push(project);
    setProjects();
    showProjects();
  };
  const deleteProject = (index) => {
    projects.splice(index, 1);
    setProjects();
    showProjects();
  };

  const setProjects = () => {
    localStorage.setItem("PS", JSON.stringify(projects));
  };
  const getProjects = () => {
    return JSON.parse(localStorage.getItem("PS"));
  };
  const getProject = (title) => {
    const project = projects.find((p) => p.title === title);
    const p = new Project(project.title);
    return p;
  };
  const showProjects = () => {
    const projectsContainer = document.querySelector(".projects");
    projectsContainer.innerHTML = "";
    const projects = getProjects() || [];
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.title === "today") continue;
      projectsContainer.appendChild(projectCard(project, i));
    }
  };
  return { addProject, deleteProject, showProjects, getProject };
})();

export default projectManager;
