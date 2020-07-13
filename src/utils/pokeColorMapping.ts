import { PokeType } from "./types/PokeType";

const pokeColorMapping: { [key: keyof PokeType]: string } = {
  "normal" : "#a4acaf",
  "fighting" : "#d56723",
  "flying" : "#3dc7ef",
  "poison" : "#b97fc9",
  "ground" : "#f7de3f",
  "rock" : "#a38c21",
  "bug" : "#729f3f",
  "ghost" : "#7b62a3",
  "steel" : "#9eb7b8",
  "fire" : "rgb(255, 148, 65)",
  "water" : "rgb(90, 156, 164)",
  "grass" : "rgb(57, 148, 148)",
  "electric" : "#eed535",
  "psychic" : "#f366b9",
  "ice" : "#51c4e7",
  "dragon" : "#53a4cf",
  "dark" : "#707070",
  "fairy" : "#fdb9e9"
}

export default pokeColorMapping;