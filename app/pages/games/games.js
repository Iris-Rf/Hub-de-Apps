import { getUser } from "../../utils/getUser";
import { home } from "../home/home";
import { pokeapi } from "../pokeapi/pokeapi";
import { quiz } from "../quiz/quiz";
import "./games.css";

export const games = () => {
  const name = getUser();
  const app = document.querySelector("#app");
  app.classList.add("divContainerGames")
  app.innerHTML = `
    <p class="saludo">WELCOME ${name}</p>
    `;
    btnPokedex();
    btnQuizGames();
    menuClick();
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

export const btnQuizGames = () => {
  const btnQuiz = document.createElement("span");
  btnQuiz.innerText = "Quiz games";
  btnQuiz.id = "quiz";
  btnQuiz.classList.add("buttonQuizImage");
  const app = document.querySelector("#app");
  app.appendChild(btnQuiz);
  btnQuiz.addEventListener("click", quiz);
};

