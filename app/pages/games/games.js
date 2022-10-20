import { getUser } from "../../utils/getUser";
import { pokeapi } from "../pokeapi/pokeapi";
import "./style.css";

export const games = () => {
  const name = getUser();
  console.log(name);
  const app = document.querySelector("#app");
  app.innerHTML = `
    <p class="saludo">Bienvenid@ ${name}</p>
    `;
};

export const btnPokedex = () => {
  const btnPoke = document.createElement("button");
  btnPoke.innerText = "PokeAPI";
  btnPoke.id = "pokedex";
  btnPoke.class = "btnpoke";
  const body = document.querySelector("body");
  body.appendChild(btnPoke);
  btnPoke.addEventListener("click", pokeapi);
};

btnPokedex();
