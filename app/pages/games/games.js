import { getUser } from "../../utils/getUser";
import { pokeapi } from "../pokeapi/pokeapi";
import "./games.css";

export const games = () => {
  const name = getUser();
  const app = document.querySelector("#app");
  app.classList.add("divContainerGames")
  app.innerHTML = `
    <p class="saludo">WELCOME ${name}</p>
    `;
    btnPokedex();
  };

export const btnPokedex = () => {
  const btnPoke = document.createElement("span");
  // btnPoke.innerText = "PokeAPI";
  btnPoke.id = "pokedex";
  btnPoke.classList.add("buttonPokeImage");
  const app = document.querySelector("#app");
  app.appendChild(btnPoke);
  btnPoke.addEventListener("click", pokeapi);
};



