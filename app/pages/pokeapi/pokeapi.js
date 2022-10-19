export const pokeapi = async () => {
  //   const name = getUser();
  //   console.log(name);
  const app = document.querySelector("#app");
  app.innerHTML = `
      <p class="saludo">Bienvenid@ ${name} A POKEAPI</p>
      `;
      const pokemons = await getPokemons();
};

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (number = 151) => {
  try {
    let pokemons = [];
    for (let i = 1; i <= number; i++) {
      const response = await fetch(`${baseURL}${i}`);
      const dataJson = await response.json();
      pokemons.push(dataJson);
    }
    transformData(pokemons);
    return pokemons;
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
    console.log(mappedPokemons);
  }

  function printPokemos(list) {
    const container = document.querySelector("#app");
    for (const item of list) {
      console.log(item);
      const template = `
      <figure>
      <h2>${item.name} - ${item.type}</h2>
      <h3>${item.weight} alt=${item.height}/></h3>
      <img src="${item.image}"/>
      </figure>
      `;
      container.innerHTML += template;
    }
    return pokemons;
  }

  getPokemons();
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
