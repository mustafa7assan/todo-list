const projectCard = (project) => {
  const card = document.createElement("li");
  card.classList.add("project");
  const html = `
  <p class="project-name">${project}</p>
  <img src="../src/img/dots.svg" class="icon" alt="" />
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
  return card;
};

export default projectCard;
