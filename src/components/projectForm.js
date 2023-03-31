const projectForm = () => {
  const form = document.createElement("form");
  form.classList.add("hidden");
  form.classList.add("project-form");
  const html = `<input type="text" />
  <button class="btn" type="submit">Add</button>`;
  form.insertAdjacentHTML("afterbegin", html);
  return form;
};

export default projectForm;
