import { cleanPage } from "../../utils/cleanPage";
import "./pokeapi.css";

let optionsSelectPoke = [];
let filtro = [];
let selectPoke = new Array();

export const pokeapi = async () => {
  const container = document.querySelector("#app");
  container.innerHTML = divPokemon();
  const inputPokemon = document.querySelector("#inputPokemon");
  inputPokemon.addEventListener("input", filterPokemons);
  await getPokemons();
 await  getSelectOptions();
 await  filterPokemons();
  const containerOptions = document.getElementById("selectPokemon");
  containerOptions.addEventListener("change", async(event)=>{
  await filterTypeOptions(event.target.value)})
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

const getPokemons = async() => {
  try {
    let pokemons = [];
    for (let i = 1; i < 152; i++) {
      const response = await fetch(`${baseURL}${i}`);
      const dataJson = await response.json();
      pokemons.push(dataJson);
      guardarPokemons.push(dataJson);
    }
    await transformData(pokemons);
  } catch (error) {}
};

export const transformData = async(list) => {
  //guardar mapeo en filtro
  filtro = list.map((item) => ({
    image: item.sprites.other.home.front_default,
    name: item.name,
    type: item.types[0].type.name,
    weight: item.weight,
    height: item.height,
  }));

  selectPoke = filtro.map((item) => item.type);
  const setTypes = new Set(selectPoke);
  selectPoke = Array.from(setTypes);
  optionsSelectPoke = await filtro;
  printPokemos(filtro);
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

export const filterPokemons = async() => {
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

export const getSelectOptions = () => {
  const containerOptions = document.getElementById("selectPokemon");

  selectPoke.forEach((type) => {
    containerOptions.innerHTML += templetaOptionsSelect(type);
  });
};

export let filterTypeOptions = async(optionValue) => {
  let filteredTypePokemon = optionsSelectPoke.filter((param) => param.type === optionValue);
  console.log();
  const box = document.querySelector("#containerPokemon");
  box.innerHTML = "";
  filteredTypePokemon.forEach((item) => {
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
  });
};
filterTypeOptions();

export const templetaOptionsSelect = (item) => {
  return `
      <option value="${item}">${item}</option>
      `;
};
