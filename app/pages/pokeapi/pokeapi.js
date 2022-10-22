import { cleanPage } from "../../utils/cleanPage";

import "./pokeapi.css";
let optionsSelectPoke = [];
let filtro = [];
export const pokeapi = async () => {
  const container = document.querySelector("#app");
  container.innerHTML = divPokemon();
  const inputPokemon = document.querySelector("#inputPokemon");
  inputPokemon.addEventListener("input", filterPokemons);
  await getPokemons();
  getSelectOptions();
  filterPokemons();
};

// <label for="labelSelect">Pokemon type</label>
export const divPokemon = () => {
  return `
  <div class="buscador">
    <div class="label">
      <label class="labelInfo" id="labelInfo">SEARCH</label>
    </div>
      <input type="text" id="inputPokemon" class="inputPokemon">
      <select id="selectPokemon" class="selectPokemon" name="PUTOTYPES">
      </select>
    </div>
  <div class="containerPokemon" id="containerPokemon"></div>
  `;
};

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

let guardarPokemons = [];

const getPokemons = async () => {
  try {
    let pokemons = [];
    for (let i = 1; i < 152; i++) {
      const response = await fetch(`${baseURL}${i}`);
      const dataJson = await response.json();
      pokemons.push(dataJson);
      guardarPokemons.push(dataJson);
    }
    transformData(pokemons);
  } catch (error) {}
};

export const transformData = (list) => {
  //guardar mapeo en filtro
  filtro = list.map((item) => ({
    image: item.sprites.other.home.front_default,
    name: item.name,
    type: item.types[0].type.name,
    weight: item.weight,
    height: item.height,
  }));

  let selectPoke = new Array();
  selectPoke = filtro.map((item) => item.type);
  const setTypes = new Set(selectPoke);
  selectPoke = Array.from(setTypes);
  optionsSelectPoke = selectPoke;
  console.log(optionsSelectPoke);
  printPokemos(filtro);
  return optionsSelectPoke;
};

export const printPokemos = (list) => {
  const box = document.querySelector("#containerPokemon");
  for (const item of list) {
    const template = `
    <figure class="card">
    <h2 class="name-pokemon">${item.name}</h2>
    <img class="image-pokemon" src="${item.image}"/>
    <h3 class"info-pokempm">Weight: ${item.weight}</h3>
    <h3 class"info-pokempm">Height: ${item.height}</h3>
    <h2 class="type-pokemon">${item.type}</h2>
    </figure>
    `;
    box.innerHTML += template;
  }
};

export const filterPokemons = () => {
  const text = inputPokemon.value.toLowerCase();
  const box = document.querySelector("#containerPokemon");
  cleanPage(box);
  // guarda los resultados que se incluyen en el listado filtrado
  let resultadoGuardar = [];
  // console.log(guardarPokemons);
  guardarPokemons.forEach((param) => {
    if (param.name.includes(text)) {
      resultadoGuardar.push(param);
    }
  });
  transformData(resultadoGuardar);
};

// FILTRO POR TIPO

// export const getSelect = async () => {
//   try {
//       const response = await fetch(`https://pokeapi.co/api/v2/type/`);
//       const dataJson = await response.json();
//       console.log(dataJson);
//       transformDt(dataJson);

//     }
//    catch (error) {}
// };

export const getSelectOptions = ()=> {
  const containerOptions = document.getElementById("selectPokemon");
  // console.log(containerOptions);
  console.log(optionsSelectPoke);
  // for (const types of selectPoke) {
  //   console.log(types);
  //   containerOptions.innerText += printPokemosSelect(types);
  // }
  // selectPoke = transformData();
  optionsSelectPoke.forEach((type) => {
    console.log("hola");
    console.log(type);
    containerOptions.innerHTML += templetaOptionsSelect(type);
  });
}

export let filterTypeOptions = () => {
  selectPokemon
} 

export const templetaOptionsSelect = (item) => {
  return `
      <option value="${item}">${item}</option>
      `;
};
