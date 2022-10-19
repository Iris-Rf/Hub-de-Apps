import { games } from "../games/games";
import './style.css';

export const home = () => {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <div class="containerUser">
        <h1 class="title">GAMES</h1>
        <h2 class="inputUserName">Enter your name</h2>
        <input type="text" id="inputUserName">
        <button type="button" id="btnUserName">Click here!</button>
    </div>
    `;

  const localUserName = (userName) => {
    localStorage.setItem("name", userName);
    games();
    
  };

  const btnUserName = document.querySelector("#btnUserName");
  const input = document.querySelector("input");
  btnUserName.addEventListener("click", () => localUserName(input.value)); 
};


