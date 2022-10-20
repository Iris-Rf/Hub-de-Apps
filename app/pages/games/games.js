import { getUser } from "../../utils/getUser";
import { pokeapi } from "../pokeapi/pokeapi";
import "./style.css";

export const games = () => {
  const name = getUser();
  console.log(name);
  const app = document.querySelector("#app");
  app.classList.add("divContainerGames")
  app.innerHTML = `
    <p class="saludo">Bienvenid@ ${name}</p>
    `;
    btnPokedex();
  };

export const btnPokedex = () => {
  const btnPoke = document.createElement("span");
  btnPoke.innerText = "PokeAPI";
  btnPoke.id = "pokedex";
  btnPoke.classList.add("buttonPokeImage");
  const app = document.querySelector("#app");
  app.appendChild(btnPoke);
  btnPoke.addEventListener("click", pokeapi);
};


