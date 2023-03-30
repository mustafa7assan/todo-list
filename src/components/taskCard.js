const taskCard = (task, index) => {
  const card = document.createElement("div");
  card.classList.add("task-card");
  const html = `
    <div class="task-done">
      <img src="../src/img/done.svg" class="icon" alt="" />
    </div>
    <div class="task-content">
      <h3 class="task-title">${task.title}</h3>
      <p class="task-description">
        ${task.description}
      </p>
      <p class="task-duedate">
        <img src="../src/img/date.svg" class="icon" alt="" /> ${task.dueDate}
      </p>
    </div>
    <div class="task-menu">
      <img src="../src/img/dots.svg" class="icon" alt="" />
    </div>
    <div class="task-pop hidden">
      <div class="task-edit">
        <img src="../src/img/edit.svg" class="icon" alt="" /> Edit task
      </div>
      <div class="task-delete">
        <img src="../src/img/delete.svg" class="icon" alt="" />Delete
        task
      </div>
    </div>
`;
  card.insertAdjacentHTML("afterbegin", html);
  const cardMenu = card.querySelector(".task-menu");
  cardMenu.addEventListener("click", () => {
    const popper = card.querySelector(".task-pop");
    popper.classList.toggle("hidden");
  });
  return card;
};

export default taskCard;
