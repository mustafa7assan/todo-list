import "./css/style.css";
import header from "./components/header";
import main from "./components/main";

const app = document.querySelector(".app");
app.appendChild(header());
app.appendChild(main());
