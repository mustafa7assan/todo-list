import taskManager from "./TaskManager";
const taskForm = () => {
  const form = document.createElement("form");
  form.classList.add("add-task-form");
  form.classList.add("hidden");
  const html = `
  <div class="form-row">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" required/>
  </div>
  <div class="form-row">
    <label for="description">Description</label>
    <textarea name="description" id="description" required></textarea>
  </div>
  <div class="form-row">
    <label for="duedate">Due Date</label>
    <input type="date" name="duedate" id="duedate" required/>
  </div>
  <div class="form-row">
    <label for="priority">Priority</label>
    <select name="priority" id="priority" required>
      <option value="high" selected>High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  </div>
  <div class="form-row">
    <div class="buttons">
      <button class="btn cancel" type="button">Cancel</button>
      <button class="btn" type="submit">Add task</button>
    </div>
  </div>
  `;
  form.insertAdjacentHTML("afterbegin", html);
  // Submit add form
  form.addEventListener("submit", getTaskData);
  // Cancel task adding
  const cancelButton = form.querySelector(".cancel");
  cancelButton.addEventListener("click", hideForm);
  return form;
};

const hideForm = () => {
  const form = document.querySelector(".add-task-form");
  form.reset();
  form.classList.add("hidden");
};

const getTaskData = (e) => {
  e.preventDefault();
  const form = e.target;
  const title = form.querySelector("#title").value;
  const description = form.querySelector("#description").value;
  const dueDate = form.querySelector("#duedate").value;
  const priority = form.querySelector("#priority").value;
  taskManager.addTask({ title, description, dueDate, priority });
  hideForm();
};

export default taskForm;
