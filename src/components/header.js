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
    <img src="${img2}" alt="" class="icon burger-menu" />
  </nav>
`;
  header.insertAdjacentHTML("afterbegin", html);
  const burgerMenu = header.querySelector(".burger-menu");
  burgerMenu.addEventListener("click", () => {
    const aside = document.querySelector("aside");
    aside.classList.toggle("show");
  });
  return header;
};

export default header;
