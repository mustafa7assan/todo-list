import img from "../img/github.svg";
const footer = () => {
  const footer = document.createElement("footer");
  const html = `
  <a href="#">
    <img src="${img}" class="icon" alt="" />
    Mustafa Hassan</a
  >`;
  footer.insertAdjacentHTML("afterbegin", html);
  return footer;
};

export default footer;
