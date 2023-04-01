import projectManager from "./projectManager";
const projectForm = () => {
  const form = document.createElement("form");
  form.classList.add("hidden");
  form.classList.add("project-form");
  const html = `<input type="text" required placeholder="Project title" id="project-title"/>
  <button class="btn" type="submit">Add</button>`;
  form.insertAdjacentHTML("afterbegin", html);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = form.querySelector("#project-title");
    projectManager.addProject(title.value);
    form.reset();
    form.classList.toggle("hidden");
  });
  return form;
};

export default projectForm;
