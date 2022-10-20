export const pokeapi = async () => {
  getPokemons();
};

export const divPokemon = () => {
  return `
  <div class="containerPokemon" id="containerPokemon"></div>
  <input type="text" id="inputPokemon" class="inputPokemon">
  <button class="btnInfo" id="btnInfo">BUSCAR</button>
  `
};

// const buscador = document.querySelector("#inputPokemon");
// const botonBuscador = document.querySelector("#btnInfo");

// const filterPokemons = () => {
//   // console.log(inputPokemon.value);
//   const text = inputPokemon.value.toLowerCase();
//   for (const pokemon of pokemons) {
//     let name = pokemon.name.toLowerCase();
//     if (name.indexOf !== -1)
//   }
  
// }
// botonBuscador.addEventListener("click", filterPokemons);
// filterPokemons();


const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async () => {
  try {
    let pokemons = [];
    for (let i = 1; i < 152; i++) {
      const response = await fetch(`${baseURL}${i}`);
      const dataJson = await response.json();
      pokemons.push(dataJson);
    }
    transformData(pokemons);
    
  } catch (error) {
    console.log(error);
  }

  function transformData(list) {
    const mappedPokemons = list.map((item) => ({
      image: item.sprites.other.home.front_default,
      name: item.name,
      type: item.types[0].type.name,
      weight: item.weight,
      height: item.height,
    }));
    printPokemos(mappedPokemons);
    // console.log(mappedPokemons);
  }

  function printPokemos(list) {
    const container = document.querySelector("#app");
    // cleanP
    container.innerHTML = divPokemon();
    for (const item of list) {
      console.log(item);
      const template = `
      <figure>
      <h2 class="name-pokemon">${item.name} - ${item.type}</h2>
      <h3 class"info-pokempm">${item.weight} alt=${item.height}/></sh3>
      <img class="image-pokemon" src="${item.image}"/>
      </figure>
      `;
      const box = document.querySelector("#containerPokemon");
      box.innerHTML += template;
    }
  
  }

};
// const getPokemons = async (number = 151) => {
//   let pokemons = [];
//   for (let i = 1; i <= number; i++) {
//     const response = await fetch(`${baseURL}/${i}`);
//     pokemons.push(await response.json());

// dsp del mappeo
// const template = `
// <figure>
// <h2>${item.name} - ${item.type}</h2>
// <h3>${item.weight} alt=${item.height}/></h3>
// <img src=${item.sprites.other.home.front_default}/>
// </figure>
// `;
// container.innerHTML += template;

// const getPokemons = async (number = 151) => {
//       const item = list[i];
//       const template = `
//       <figure>
//       <h2>${item.name} - ${item.type}</h2>
//       <h3>${item.weight} alt=${item.height}/></h3>
//       <img src=${item.sprites.other.home.front_default}/>
//       </figure>
//       `;
//       container.innerHTML += template;
//     }
//   };

//   getPokemons();

// const getPokemons = async (number = 151) => {
//     let pokemons = []
//     for (let i = 1; i <= number; i++) {
//         const response = await fetch(`${baseURL}/${i}`)
//         pokemons.push(await response.json())
//     }

//     return pokemons
// }
