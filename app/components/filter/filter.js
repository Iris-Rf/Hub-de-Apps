const buscador = document.querySelector("#inputPokemon");
const botonBuscador = document.querySelector("#btnInfo");
const resultado = document.querySelector("#resultado");

export const filterPokemons = () => {
  // console.log(inputPokemon.value);
  resultado.innerHTML = "";
  const text = inputPokemon.value.toLowerCase();
  for (const pokemon of pokemons) {
    let name = pokemon.name.toLowerCase();
    if (name.indexOf(text) !== -1)
      resultado.innerHTML += `
    <li>${pokemon.name} - nombre ${pokemon.value}</li>
    `;
  }
};
if (resultado.innerHTML === "") {
  resultado.innerHTML += `
    <li>Pokemon no encontrado</li>
    `;
}

botonBuscador.addEventListener("click", filterPokemons);
inputPokemon.addEventListener("keyup", filterPokemons);
filterPokemons();
