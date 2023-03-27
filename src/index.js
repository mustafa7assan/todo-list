import "./css/style.css";
import header from "./components/header";

const app = document.querySelector(".app");
app.insertAdjacentElement("beforebegin", header());
