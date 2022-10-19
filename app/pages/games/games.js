import { getUser } from "../../utils/getUser";
import './style.css';

const name = getUser();
// console.log(name);

export const games = () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <p class="saludo">Bienvenid@ ${name}</p>
    `
};

