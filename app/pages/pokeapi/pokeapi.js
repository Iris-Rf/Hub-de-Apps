import "./style.css";

let filtro = [];
export const pokeapi = async () => {
  const container = document.querySelector("#app");
  container.innerHTML = divPokemon();
  const botonBuscador = document.querySelector("#btnInfo");
  botonBuscador.addEventListener("click", filterPokemons);
  const inputPokemon = document.querySelector("#inputPokemon");
  filterPokemons();
  getPokemons();
};

export const divPokemon = () => {
  return `
  <div>
    <input type="text" id="inputPokemon" class="inputPokemon">
    <button class="btnInfo" id="btnInfo">BUSCAR</button>
    <ul id="resultado">
    </ul>
    </div>
  <div class="containerPokemon" id="containerPokemon"></div>
  `;
};

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
    filtro = list.map((item) => ({
      image: item.sprites.other.home.front_default,
      name: item.name,
      type: item.types[0].type.name,
      weight: item.weight,
      height: item.height,
    }));
    console.log(filtro);
    printPokemos(filtro);
   
  }

  function printPokemos(list) {
    const box = document.querySelector("#containerPokemon");
    for (const item of list) {
      console.log(item);
      const template = `
      <figure class="card">
      <h2 class="name-pokemon">${item.name} - ${item.type}</h2>
      <h3 class"info-pokempm">${item.weight} ${item.height}</h3>
      <img class="image-pokemon" src="${item.image}"/>
      </figure>
      `;
      box.innerHTML += template;
     
   
   }
   container.appendChild(box);
  }
};

export const filterPokemons = () => {
  const cards = document.querySelectorAll(".card")
  const text = inputPokemon.value.toLowerCase();
  cards.forEach (card => {
    if (!card.innerHTML.includes(text)){
      card.style.display = 'none';
    } 
    else{
      card.style.display = 'block';
    }
  });

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
