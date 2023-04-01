import projectManager from "./projectManager";
const projectCard = (project, index) => {
  const card = document.createElement("li");
  card.classList.add("project");
  const html = `
  <p class="project-name">${project.title}</p>
  <img src="../src/img/dots.svg" class="icon dots" alt="" />
  <div class="project-pop hidden">
    <div class="project-edit">
      <img src="../src/img/edit.svg" class="icon" alt="" /> Edit
      project
    </div>
    <div class="project-delete">
      <img src="../src/img/delete.svg" class="icon" alt="" />Delete
      project
    </div>
  </div>`;

  card.insertAdjacentHTML("afterbegin", html);
  // Dots Menu Button
  const menuButton = card.querySelector(".dots");
  menuButton.addEventListener("click", () => {
    const popper = card.querySelector(".project-pop");
    popper.classList.toggle("hidden");
  });
  // delete button project
  const deleteButton = card.querySelector(".project-delete");
  deleteButton.addEventListener("click", () => {
    projectManager.deleteProject(index);
    const popper = card.querySelector(".project-pop");
    popper.classList.toggle("hidden");
  });
  return card;
};

export default projectCard;
