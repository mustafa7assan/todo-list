import img1 from "../img/list-box.svg";
import img2 from "../img/menu.svg";
const header = () => {
  const header = document.createElement("header");
  const html = `
  <nav>
    <div class="logo">
      <img src="${img1}" alt="" class="icon" />
      <h1>Todo List</h1>
    </div>
    <img src="${img2}" alt="" class="icon" />
  </nav>
`;
  header.insertAdjacentHTML("afterbegin", html);
  return header;
};

export default header;
