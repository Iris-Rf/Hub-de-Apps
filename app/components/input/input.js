// import { divPokemon } from "../../pages/pokeapi/pokeapi";

// let guardarPokemonsType = [];
// export const getPokemonsSelect = async () => {
//   try {
//       const response = await fetch(`https://pokeapi.co/api/v2/type/`);
//       const dataJson = await response.json();
//       transformDt(dataJson);
//       guardarPokemonsType.push(dataJson);
//       console.log(guard);
//     }
//    catch (error) {}
// };

// export const transformDt = (list) => {
//   const containerOptions = document.querySelector("#selectPokemon")
//  list.forEach((type) => {
//   containerOptions.innerHTML += divPokemon(type.name);
//  }
//  )
// };

//   export const printPokemosSelect = (list) => {
//     for (const item of list) {
//       return`
//       <option class="typePokemon">${item.name}</option>
//       `;
//     }
//   };
