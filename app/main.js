import "./style.css";
import { btnChanger } from "./components/button/button";
import { randomColor } from "./utils/colors";
import { home } from "./pages/home/home";
// menuClick();
home();
btnChanger();
randomColor();

// export const menuClick = () => {
//     const btnMenu = document.createElement("button");
//     btnMenu.innerText = "Return";
//     btnMenu.id = "menu";
//     btnMenu.classList.add("menu");
//     const app = document.querySelector("#app");
//     app.appendChild(btnMenu);
//     btnMenu.addEventListener("click", games);
//   };
  
  
//   const menu = document.querySelector(".menu");
//   menu.addEventListener("click", () => home());
  