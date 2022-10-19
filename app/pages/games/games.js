import { getUser } from "../../utils/getUser";

const name = getUser();
console.log(name);

export const games = () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
    <p>Hola ${name}</p>
    `
};

