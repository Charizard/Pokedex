import { PokeType } from "./types/PokeType";

interface PokeDataType {
  abilities: [string];
  height: number;
  id: number;
  name: string;
  number: string;
  type: Array<PokeType>;
  weakness: Array<PokeType>;
  weight: number;
  featured: string;
  slug: string;
};

const pokeData: [PokeDataType] = [
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 28,
    "id": 1,
    "name": "Bulbasaur",
    "number": "001",
    "slug": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 15.2
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 39,
    "id": 2,
    "name": "Ivysaur",
    "number": "002",
    "slug": "ivysaur",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 28.7
  },
  {
    "abilities": [
      "Thick Fat"
    ],
    "featured": "true",
    "height": 94,
    "id": 3,
    "name": "Venusaur",
    "number": "003",
    "slug": "venusaur",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 342.8
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 24,
    "id": 4,
    "name": "Charmander",
    "number": "004",
    "slug": "charmander",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 43,
    "id": 5,
    "name": "Charmeleon",
    "number": "005",
    "slug": "charmeleon",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 41.9
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 1102,
    "id": 6,
    "name": "Charizard",
    "number": "006",
    "slug": "charizard",
    "type": [
      "fire",
      "flying"
    ],
    "weakness": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 20,
    "id": 7,
    "name": "Squirtle",
    "number": "007",
    "slug": "squirtle",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 19.8
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 39,
    "id": 8,
    "name": "Wartortle",
    "number": "008",
    "slug": "wartortle",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 49.6
  },
  {
    "abilities": [
      "Mega Launcher"
    ],
    "featured": "true",
    "height": 63,
    "id": 9,
    "name": "Blastoise",
    "number": "009",
    "slug": "blastoise",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 222.9
  },
  {
    "abilities": [
      "Shield Dust"
    ],
    "featured": "true",
    "height": 12,
    "id": 10,
    "name": "Caterpie",
    "number": "010",
    "slug": "caterpie",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 6.4
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 28,
    "id": 11,
    "name": "Metapod",
    "number": "011",
    "slug": "metapod",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 21.8
  },
  {
    "abilities": [
      "Compound Eyes"
    ],
    "featured": "true",
    "height": 669,
    "id": 12,
    "name": "Butterfree",
    "number": "012",
    "slug": "butterfree",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Shield Dust"
    ],
    "featured": "true",
    "height": 12,
    "id": 13,
    "name": "Weedle",
    "number": "013",
    "slug": "weedle",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 7.1
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 24,
    "id": 14,
    "name": "Kakuna",
    "number": "014",
    "slug": "kakuna",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 22
  },
  {
    "abilities": [
      "Adaptability"
    ],
    "featured": "true",
    "height": 55,
    "id": 15,
    "name": "Beedrill",
    "number": "015",
    "slug": "beedrill",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 89.3
  },
  {
    "abilities": [
      "Keen Eye",
      "Tangled Feet"
    ],
    "featured": "true",
    "height": 12,
    "id": 16,
    "name": "Pidgey",
    "number": "016",
    "slug": "pidgey",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4
  },
  {
    "abilities": [
      "Keen Eye",
      "Tangled Feet"
    ],
    "featured": "true",
    "height": 43,
    "id": 17,
    "name": "Pidgeotto",
    "number": "017",
    "slug": "pidgeotto",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 66.1
  },
  {
    "abilities": [
      "No Guard"
    ],
    "featured": "true",
    "height": 87,
    "id": 18,
    "name": "Pidgeot",
    "number": "018",
    "slug": "pidgeot",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 111.3
  },
  {
    "abilities": [
      "Gluttony",
      "Hustle"
    ],
    "featured": "true",
    "height": 12,
    "id": 19,
    "name": "Rattata",
    "number": "019",
    "slug": "rattata",
    "type": [
      "dark",
      "normal"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 8.4
  },
  {
    "abilities": [
      "Gluttony",
      "Hustle"
    ],
    "featured": "true",
    "height": 28,
    "id": 20,
    "name": "Raticate",
    "number": "020",
    "slug": "raticate",
    "type": [
      "dark",
      "normal"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 56.2
  },
  {
    "abilities": [
      "Keen Eye"
    ],
    "featured": "true",
    "height": 12,
    "id": 21,
    "name": "Spearow",
    "number": "021",
    "slug": "spearow",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4.4
  },
  {
    "abilities": [
      "Keen Eye"
    ],
    "featured": "true",
    "height": 47,
    "id": 22,
    "name": "Fearow",
    "number": "022",
    "slug": "fearow",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 83.8
  },
  {
    "abilities": [
      "Intimidate",
      "Shed Skin"
    ],
    "featured": "true",
    "height": 79,
    "id": 23,
    "name": "Ekans",
    "number": "023",
    "slug": "ekans",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 15.2
  },
  {
    "abilities": [
      "Intimidate",
      "Shed Skin"
    ],
    "featured": "true",
    "height": 138,
    "id": 24,
    "name": "Arbok",
    "number": "024",
    "slug": "arbok",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 143.3
  },
  {
    "abilities": [
      "Static"
    ],
    "featured": "true",
    "height": 827,
    "id": 25,
    "name": "Pikachu",
    "number": "025",
    "slug": "pikachu",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Surge Surfer"
    ],
    "featured": "true",
    "height": 28,
    "id": 26,
    "name": "Raichu",
    "number": "026",
    "slug": "raichu",
    "type": [
      "electric",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug",
      "Ground"
    ],
    "weight": 46.3
  },
  {
    "abilities": [
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 28,
    "id": 27,
    "name": "Sandshrew",
    "number": "027",
    "slug": "sandshrew",
    "type": [
      "ice",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 88.2
  },
  {
    "abilities": [
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 47,
    "id": 28,
    "name": "Sandslash",
    "number": "028",
    "slug": "sandslash",
    "type": [
      "ice",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 121.3
  },
  {
    "abilities": [
      "Poison Point",
      "Rivalry"
    ],
    "featured": "true",
    "height": 16,
    "id": 29,
    "name": "Nidoran♀",
    "number": "029",
    "slug": "nidoran-female",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 15.4
  },
  {
    "abilities": [
      "Poison Point",
      "Rivalry"
    ],
    "featured": "true",
    "height": 31,
    "id": 30,
    "name": "Nidorina",
    "number": "030",
    "slug": "nidorina",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 44.1
  },
  {
    "abilities": [
      "Poison Point",
      "Rivalry"
    ],
    "featured": "true",
    "height": 51,
    "id": 31,
    "name": "Nidoqueen",
    "number": "031",
    "slug": "nidoqueen",
    "type": [
      "poison",
      "ground"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Ice",
      "Ground"
    ],
    "weight": 132.3
  },
  {
    "abilities": [
      "Poison Point",
      "Rivalry"
    ],
    "featured": "true",
    "height": 20,
    "id": 32,
    "name": "Nidoran♂",
    "number": "032",
    "slug": "nidoran-male",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 19.8
  },
  {
    "abilities": [
      "Poison Point",
      "Rivalry"
    ],
    "featured": "true",
    "height": 35,
    "id": 33,
    "name": "Nidorino",
    "number": "033",
    "slug": "nidorino",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 43
  },
  {
    "abilities": [
      "Poison Point",
      "Rivalry"
    ],
    "featured": "true",
    "height": 55,
    "id": 34,
    "name": "Nidoking",
    "number": "034",
    "slug": "nidoking",
    "type": [
      "poison",
      "ground"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Ice",
      "Ground"
    ],
    "weight": 136.7
  },
  {
    "abilities": [
      "Cute Charm",
      "Magic Guard"
    ],
    "featured": "true",
    "height": 24,
    "id": 35,
    "name": "Clefairy",
    "number": "035",
    "slug": "clefairy",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 16.5
  },
  {
    "abilities": [
      "Cute Charm",
      "Magic Guard"
    ],
    "featured": "true",
    "height": 51,
    "id": 36,
    "name": "Clefable",
    "number": "036",
    "slug": "clefable",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 88.2
  },
  {
    "abilities": [
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 24,
    "id": 37,
    "name": "Vulpix",
    "number": "037",
    "slug": "vulpix",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 21.8
  },
  {
    "abilities": [
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 43,
    "id": 38,
    "name": "Ninetales",
    "number": "038",
    "slug": "ninetales",
    "type": [
      "ice",
      "fairy"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Poison",
      "Rock"
    ],
    "weight": 43.9
  },
  {
    "abilities": [
      "Competitive",
      "Cute Charm"
    ],
    "featured": "true",
    "height": 20,
    "id": 39,
    "name": "Jigglypuff",
    "number": "039",
    "slug": "jigglypuff",
    "type": [
      "normal",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 12.1
  },
  {
    "abilities": [
      "Competitive",
      "Cute Charm"
    ],
    "featured": "true",
    "height": 39,
    "id": 40,
    "name": "Wigglytuff",
    "number": "040",
    "slug": "wigglytuff",
    "type": [
      "normal",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 26.5
  },
  {
    "abilities": [
      "Inner Focus"
    ],
    "featured": "true",
    "height": 31,
    "id": 41,
    "name": "Zubat",
    "number": "041",
    "slug": "zubat",
    "type": [
      "poison",
      "flying"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 16.5
  },
  {
    "abilities": [
      "Inner Focus"
    ],
    "featured": "true",
    "height": 63,
    "id": 42,
    "name": "Golbat",
    "number": "042",
    "slug": "golbat",
    "type": [
      "poison",
      "flying"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 121.3
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 20,
    "id": 43,
    "name": "Oddish",
    "number": "043",
    "slug": "oddish",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 11.9
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 31,
    "id": 44,
    "name": "Gloom",
    "number": "044",
    "slug": "gloom",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 19
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 47,
    "id": 45,
    "name": "Vileplume",
    "number": "045",
    "slug": "vileplume",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 41
  },
  {
    "abilities": [
      "Dry Skin",
      "Effect Spore"
    ],
    "featured": "true",
    "height": 12,
    "id": 46,
    "name": "Paras",
    "number": "046",
    "slug": "paras",
    "type": [
      "bug",
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock",
      "Bug"
    ],
    "weight": 11.9
  },
  {
    "abilities": [
      "Dry Skin",
      "Effect Spore"
    ],
    "featured": "true",
    "height": 39,
    "id": 47,
    "name": "Parasect",
    "number": "047",
    "slug": "parasect",
    "type": [
      "bug",
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock",
      "Bug"
    ],
    "weight": 65
  },
  {
    "abilities": [
      "Compound Eyes",
      "Tinted Lens"
    ],
    "featured": "true",
    "height": 39,
    "id": 48,
    "name": "Venonat",
    "number": "048",
    "slug": "venonat",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 66.1
  },
  {
    "abilities": [
      "Shield Dust",
      "Tinted Lens"
    ],
    "featured": "true",
    "height": 59,
    "id": 49,
    "name": "Venomoth",
    "number": "049",
    "slug": "venomoth",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 27.6
  },
  {
    "abilities": [
      "Sand Veil",
      "Tangling Hair"
    ],
    "featured": "true",
    "height": 8,
    "id": 50,
    "name": "Diglett",
    "number": "050",
    "slug": "diglett",
    "type": [
      "ground",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Sand Veil",
      "Tangling Hair"
    ],
    "featured": "true",
    "height": 28,
    "id": 51,
    "name": "Dugtrio",
    "number": "051",
    "slug": "dugtrio",
    "type": [
      "ground",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 146.8
  },
  {
    "abilities": [
      "Pickup",
      "Technician"
    ],
    "featured": "true",
    "height": 1299,
    "id": 52,
    "name": "Meowth",
    "number": "052",
    "slug": "meowth",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Fur Coat",
      "Technician"
    ],
    "featured": "true",
    "height": 43,
    "id": 53,
    "name": "Persian",
    "number": "053",
    "slug": "persian",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 72.8
  },
  {
    "abilities": [
      "Cloud Nine",
      "Damp"
    ],
    "featured": "true",
    "height": 31,
    "id": 54,
    "name": "Psyduck",
    "number": "054",
    "slug": "psyduck",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 43.2
  },
  {
    "abilities": [
      "Cloud Nine",
      "Damp"
    ],
    "featured": "true",
    "height": 67,
    "id": 55,
    "name": "Golduck",
    "number": "055",
    "slug": "golduck",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 168.9
  },
  {
    "abilities": [
      "Anger Point",
      "Vital Spirit"
    ],
    "featured": "true",
    "height": 20,
    "id": 56,
    "name": "Mankey",
    "number": "056",
    "slug": "mankey",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Anger Point",
      "Vital Spirit"
    ],
    "featured": "true",
    "height": 39,
    "id": 57,
    "name": "Primeape",
    "number": "057",
    "slug": "primeape",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 70.5
  },
  {
    "abilities": [
      "Flash Fire",
      "Intimidate"
    ],
    "featured": "true",
    "height": 28,
    "id": 58,
    "name": "Growlithe",
    "number": "058",
    "slug": "growlithe",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 41.9
  },
  {
    "abilities": [
      "Flash Fire",
      "Intimidate"
    ],
    "featured": "true",
    "height": 75,
    "id": 59,
    "name": "Arcanine",
    "number": "059",
    "slug": "arcanine",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 341.7
  },
  {
    "abilities": [
      "Damp",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 24,
    "id": 60,
    "name": "Poliwag",
    "number": "060",
    "slug": "poliwag",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 27.3
  },
  {
    "abilities": [
      "Damp",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 39,
    "id": 61,
    "name": "Poliwhirl",
    "number": "061",
    "slug": "poliwhirl",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 44.1
  },
  {
    "abilities": [
      "Damp",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 51,
    "id": 62,
    "name": "Poliwrath",
    "number": "062",
    "slug": "poliwrath",
    "type": [
      "water",
      "fighting"
    ],
    "weakness": [
      "Fairy",
      "Grass",
      "Flying",
      "Psychic",
      "Electric"
    ],
    "weight": 119
  },
  {
    "abilities": [
      "Inner Focus",
      "Synchronize"
    ],
    "featured": "true",
    "height": 35,
    "id": 63,
    "name": "Abra",
    "number": "063",
    "slug": "abra",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 43
  },
  {
    "abilities": [
      "Inner Focus",
      "Synchronize"
    ],
    "featured": "true",
    "height": 51,
    "id": 64,
    "name": "Kadabra",
    "number": "064",
    "slug": "kadabra",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 124.6
  },
  {
    "abilities": [
      "Trace"
    ],
    "featured": "true",
    "height": 47,
    "id": 65,
    "name": "Alakazam",
    "number": "065",
    "slug": "alakazam",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 105.8
  },
  {
    "abilities": [
      "Guts",
      "No Guard"
    ],
    "featured": "true",
    "height": 31,
    "id": 66,
    "name": "Machop",
    "number": "066",
    "slug": "machop",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 43
  },
  {
    "abilities": [
      "Guts",
      "No Guard"
    ],
    "featured": "true",
    "height": 59,
    "id": 67,
    "name": "Machoke",
    "number": "067",
    "slug": "machoke",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 155.4
  },
  {
    "abilities": [
      "Guts",
      "No Guard"
    ],
    "featured": "true",
    "height": 984,
    "id": 68,
    "name": "Machamp",
    "number": "068",
    "slug": "machamp",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 28,
    "id": 69,
    "name": "Bellsprout",
    "number": "069",
    "slug": "bellsprout",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 39,
    "id": 70,
    "name": "Weepinbell",
    "number": "070",
    "slug": "weepinbell",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 14.1
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 67,
    "id": 71,
    "name": "Victreebel",
    "number": "071",
    "slug": "victreebel",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 34.2
  },
  {
    "abilities": [
      "Clear Body",
      "Liquid Ooze"
    ],
    "featured": "true",
    "height": 35,
    "id": 72,
    "name": "Tentacool",
    "number": "072",
    "slug": "tentacool",
    "type": [
      "water",
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ground"
    ],
    "weight": 100.3
  },
  {
    "abilities": [
      "Clear Body",
      "Liquid Ooze"
    ],
    "featured": "true",
    "height": 63,
    "id": 73,
    "name": "Tentacruel",
    "number": "073",
    "slug": "tentacruel",
    "type": [
      "water",
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ground"
    ],
    "weight": 121.3
  },
  {
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "featured": "true",
    "height": 16,
    "id": 74,
    "name": "Geodude",
    "number": "074",
    "slug": "geodude",
    "type": [
      "rock",
      "electric"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 44.8
  },
  {
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "featured": "true",
    "height": 39,
    "id": 75,
    "name": "Graveler",
    "number": "075",
    "slug": "graveler",
    "type": [
      "rock",
      "electric"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 242.5
  },
  {
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "featured": "true",
    "height": 67,
    "id": 76,
    "name": "Golem",
    "number": "076",
    "slug": "golem",
    "type": [
      "rock",
      "electric"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 696.7
  },
  {
    "abilities": [
      "Pastel Veil",
      "Run Away"
    ],
    "featured": "true",
    "height": 31,
    "id": 77,
    "name": "Ponyta",
    "number": "077",
    "slug": "ponyta",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 52.9
  },
  {
    "abilities": [
      "Pastel Veil",
      "Run Away"
    ],
    "featured": "true",
    "height": 67,
    "id": 78,
    "name": "Rapidash",
    "number": "078",
    "slug": "rapidash",
    "type": [
      "psychic",
      "fairy"
    ],
    "weakness": [
      "Ghost",
      "Steel",
      "Poison"
    ],
    "weight": 176.4
  },
  {
    "abilities": [
      "Oblivious",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 47,
    "id": 79,
    "name": "Slowpoke",
    "number": "079",
    "slug": "slowpoke",
    "type": [
      "water",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Electric",
      "Bug"
    ],
    "weight": 79.4
  },
  {
    "abilities": [
      "Shell Armor"
    ],
    "featured": "true",
    "height": 79,
    "id": 80,
    "name": "Slowbro",
    "number": "080",
    "slug": "slowbro",
    "type": [
      "water",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Electric",
      "Bug"
    ],
    "weight": 264.6
  },
  {
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "featured": "true",
    "height": 12,
    "id": 81,
    "name": "Magnemite",
    "number": "081",
    "slug": "magnemite",
    "type": [
      "electric",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 13.2
  },
  {
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "featured": "true",
    "height": 39,
    "id": 82,
    "name": "Magneton",
    "number": "082",
    "slug": "magneton",
    "type": [
      "electric",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 132.3
  },
  {
    "abilities": [
      "Steadfast"
    ],
    "featured": "true",
    "height": 31,
    "id": 83,
    "name": "Farfetch'd",
    "number": "083",
    "slug": "farfetchd",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 92.6
  },
  {
    "abilities": [
      "Early Bird",
      "Run Away"
    ],
    "featured": "true",
    "height": 55,
    "id": 84,
    "name": "Doduo",
    "number": "084",
    "slug": "doduo",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 86.4
  },
  {
    "abilities": [
      "Early Bird",
      "Run Away"
    ],
    "featured": "true",
    "height": 71,
    "id": 85,
    "name": "Dodrio",
    "number": "085",
    "slug": "dodrio",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 187.8
  },
  {
    "abilities": [
      "Hydration",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 43,
    "id": 86,
    "name": "Seel",
    "number": "086",
    "slug": "seel",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 198.4
  },
  {
    "abilities": [
      "Hydration",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 67,
    "id": 87,
    "name": "Dewgong",
    "number": "087",
    "slug": "dewgong",
    "type": [
      "water",
      "ice"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Rock"
    ],
    "weight": 264.6
  },
  {
    "abilities": [
      "Gluttony",
      "Poison Touch"
    ],
    "featured": "true",
    "height": 28,
    "id": 88,
    "name": "Grimer",
    "number": "088",
    "slug": "grimer",
    "type": [
      "poison",
      "dark"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 92.6
  },
  {
    "abilities": [
      "Gluttony",
      "Poison Touch"
    ],
    "featured": "true",
    "height": 39,
    "id": 89,
    "name": "Muk",
    "number": "089",
    "slug": "muk",
    "type": [
      "poison",
      "dark"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 114.6
  },
  {
    "abilities": [
      "Shell Armor",
      "Skill Link"
    ],
    "featured": "true",
    "height": 12,
    "id": 90,
    "name": "Shellder",
    "number": "090",
    "slug": "shellder",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Shell Armor",
      "Skill Link"
    ],
    "featured": "true",
    "height": 59,
    "id": 91,
    "name": "Cloyster",
    "number": "091",
    "slug": "cloyster",
    "type": [
      "water",
      "ice"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Rock"
    ],
    "weight": 292.1
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 51,
    "id": 92,
    "name": "Gastly",
    "number": "092",
    "slug": "gastly",
    "type": [
      "ghost",
      "poison"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Psychic",
      "Ground"
    ],
    "weight": 0.2
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 63,
    "id": 93,
    "name": "Haunter",
    "number": "093",
    "slug": "haunter",
    "type": [
      "ghost",
      "poison"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Psychic",
      "Ground"
    ],
    "weight": 0.2
  },
  {
    "abilities": [
      "Cursed Body"
    ],
    "featured": "true",
    "height": 787,
    "id": 94,
    "name": "Gengar",
    "number": "094",
    "slug": "gengar",
    "type": [
      "ghost",
      "poison"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Psychic",
      "Ground"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "featured": "true",
    "height": 346,
    "id": 95,
    "name": "Onix",
    "number": "095",
    "slug": "onix",
    "type": [
      "rock",
      "ground"
    ],
    "weakness": [
      "Steel",
      "Fighting",
      "Water",
      "Ice",
      "Grass",
      "Ground"
    ],
    "weight": 463
  },
  {
    "abilities": [
      "Forewarn",
      "Insomnia"
    ],
    "featured": "true",
    "height": 39,
    "id": 96,
    "name": "Drowzee",
    "number": "096",
    "slug": "drowzee",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 71.4
  },
  {
    "abilities": [
      "Forewarn",
      "Insomnia"
    ],
    "featured": "true",
    "height": 63,
    "id": 97,
    "name": "Hypno",
    "number": "097",
    "slug": "hypno",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 166.7
  },
  {
    "abilities": [
      "Hyper Cutter",
      "Shell Armor"
    ],
    "featured": "true",
    "height": 16,
    "id": 98,
    "name": "Krabby",
    "number": "098",
    "slug": "krabby",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 14.3
  },
  {
    "abilities": [
      "Hyper Cutter",
      "Shell Armor"
    ],
    "featured": "true",
    "height": 748,
    "id": 99,
    "name": "Kingler",
    "number": "099",
    "slug": "kingler",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Soundproof",
      "Static"
    ],
    "featured": "true",
    "height": 20,
    "id": 100,
    "name": "Voltorb",
    "number": "100",
    "slug": "voltorb",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 22.9
  },
  {
    "abilities": [
      "Soundproof",
      "Static"
    ],
    "featured": "true",
    "height": 47,
    "id": 101,
    "name": "Electrode",
    "number": "101",
    "slug": "electrode",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 146.8
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 16,
    "id": 102,
    "name": "Exeggcute",
    "number": "102",
    "slug": "exeggcute",
    "type": [
      "grass",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Ice",
      "Dark",
      "Poison",
      "Bug"
    ],
    "weight": 5.5
  },
  {
    "abilities": [
      "Frisk"
    ],
    "featured": "true",
    "height": 429,
    "id": 103,
    "name": "Exeggutor",
    "number": "103",
    "slug": "exeggutor",
    "type": [
      "grass",
      "dragon"
    ],
    "weakness": [
      "Flying",
      "Ice",
      "Dragon",
      "Poison",
      "Fairy",
      "Bug"
    ],
    "weight": 916.2
  },
  {
    "abilities": [
      "Lightning Rod",
      "Rock Head"
    ],
    "featured": "true",
    "height": 16,
    "id": 104,
    "name": "Cubone",
    "number": "104",
    "slug": "cubone",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 14.3
  },
  {
    "abilities": [
      "Cursed Body",
      "Lightning Rod"
    ],
    "featured": "true",
    "height": 39,
    "id": 105,
    "name": "Marowak",
    "number": "105",
    "slug": "marowak",
    "type": [
      "fire",
      "ghost"
    ],
    "weakness": [
      "Water",
      "Ghost",
      "Ground",
      "Dark",
      "Rock"
    ],
    "weight": 75
  },
  {
    "abilities": [
      "Limber",
      "Reckless"
    ],
    "featured": "true",
    "height": 59,
    "id": 106,
    "name": "Hitmonlee",
    "number": "106",
    "slug": "hitmonlee",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 109.8
  },
  {
    "abilities": [
      "Iron Fist",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 55,
    "id": 107,
    "name": "Hitmonchan",
    "number": "107",
    "slug": "hitmonchan",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 110.7
  },
  {
    "abilities": [
      "Oblivious",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 47,
    "id": 108,
    "name": "Lickitung",
    "number": "108",
    "slug": "lickitung",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 144.4
  },
  {
    "abilities": [
      "Levitate",
      "Neutralizing Gas"
    ],
    "featured": "true",
    "height": 24,
    "id": 109,
    "name": "Koffing",
    "number": "109",
    "slug": "koffing",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Levitate",
      "Neutralizing Gas"
    ],
    "featured": "true",
    "height": 118,
    "id": 110,
    "name": "Weezing",
    "number": "110",
    "slug": "weezing",
    "type": [
      "poison",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Psychic",
      "Ground"
    ],
    "weight": 35.3
  },
  {
    "abilities": [
      "Lightning Rod",
      "Rock Head"
    ],
    "featured": "true",
    "height": 39,
    "id": 111,
    "name": "Rhyhorn",
    "number": "111",
    "slug": "rhyhorn",
    "type": [
      "ground",
      "rock"
    ],
    "weakness": [
      "Steel",
      "Ice",
      "Water",
      "Fighting",
      "Grass",
      "Ground"
    ],
    "weight": 253.5
  },
  {
    "abilities": [
      "Lightning Rod",
      "Rock Head"
    ],
    "featured": "true",
    "height": 75,
    "id": 112,
    "name": "Rhydon",
    "number": "112",
    "slug": "rhydon",
    "type": [
      "ground",
      "rock"
    ],
    "weakness": [
      "Steel",
      "Ice",
      "Water",
      "Fighting",
      "Grass",
      "Ground"
    ],
    "weight": 264.6
  },
  {
    "abilities": [
      "Natural Cure",
      "Serene Grace"
    ],
    "featured": "true",
    "height": 43,
    "id": 113,
    "name": "Chansey",
    "number": "113",
    "slug": "chansey",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 76.3
  },
  {
    "abilities": [
      "Chlorophyll",
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 39,
    "id": 114,
    "name": "Tangela",
    "number": "114",
    "slug": "tangela",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 77.2
  },
  {
    "abilities": [
      "Parental Bond"
    ],
    "featured": "true",
    "height": 87,
    "id": 115,
    "name": "Kangaskhan",
    "number": "115",
    "slug": "kangaskhan",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 220.5
  },
  {
    "abilities": [
      "Sniper",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 16,
    "id": 116,
    "name": "Horsea",
    "number": "116",
    "slug": "horsea",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 17.6
  },
  {
    "abilities": [
      "Poison Point",
      "Sniper"
    ],
    "featured": "true",
    "height": 47,
    "id": 117,
    "name": "Seadra",
    "number": "117",
    "slug": "seadra",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 55.1
  },
  {
    "abilities": [
      "Swift Swim",
      "Water Veil"
    ],
    "featured": "true",
    "height": 24,
    "id": 118,
    "name": "Goldeen",
    "number": "118",
    "slug": "goldeen",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 33.1
  },
  {
    "abilities": [
      "Swift Swim",
      "Water Veil"
    ],
    "featured": "true",
    "height": 51,
    "id": 119,
    "name": "Seaking",
    "number": "119",
    "slug": "seaking",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 86
  },
  {
    "abilities": [
      "Illuminate",
      "Natural Cure"
    ],
    "featured": "true",
    "height": 31,
    "id": 120,
    "name": "Staryu",
    "number": "120",
    "slug": "staryu",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 76.1
  },
  {
    "abilities": [
      "Illuminate",
      "Natural Cure"
    ],
    "featured": "true",
    "height": 43,
    "id": 121,
    "name": "Starmie",
    "number": "121",
    "slug": "starmie",
    "type": [
      "water",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Electric",
      "Bug"
    ],
    "weight": 176.4
  },
  {
    "abilities": [
      "Screen Cleaner",
      "Vital Spirit"
    ],
    "featured": "true",
    "height": 55,
    "id": 122,
    "name": "Mr. Mime",
    "number": "122",
    "slug": "mr-mime",
    "type": [
      "ice",
      "psychic"
    ],
    "weakness": [
      "Steel",
      "Ghost",
      "Fire",
      "Dark",
      "Rock",
      "Bug"
    ],
    "weight": 125.2
  },
  {
    "abilities": [
      "Swarm",
      "Technician"
    ],
    "featured": "true",
    "height": 59,
    "id": 123,
    "name": "Scyther",
    "number": "123",
    "slug": "scyther",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 123.5
  },
  {
    "abilities": [
      "Forewarn",
      "Oblivious"
    ],
    "featured": "true",
    "height": 55,
    "id": 124,
    "name": "Jynx",
    "number": "124",
    "slug": "jynx",
    "type": [
      "ice",
      "psychic"
    ],
    "weakness": [
      "Steel",
      "Ghost",
      "Fire",
      "Dark",
      "Rock",
      "Bug"
    ],
    "weight": 89.5
  },
  {
    "abilities": [
      "Static"
    ],
    "featured": "true",
    "height": 43,
    "id": 125,
    "name": "Electabuzz",
    "number": "125",
    "slug": "electabuzz",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 66.1
  },
  {
    "abilities": [
      "Flame Body"
    ],
    "featured": "true",
    "height": 51,
    "id": 126,
    "name": "Magmar",
    "number": "126",
    "slug": "magmar",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 98.1
  },
  {
    "abilities": [
      "Aerilate"
    ],
    "featured": "true",
    "height": 67,
    "id": 127,
    "name": "Pinsir",
    "number": "127",
    "slug": "pinsir",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 130.1
  },
  {
    "abilities": [
      "Anger Point",
      "Intimidate"
    ],
    "featured": "true",
    "height": 55,
    "id": 128,
    "name": "Tauros",
    "number": "128",
    "slug": "tauros",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 194.9
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 35,
    "id": 129,
    "name": "Magikarp",
    "number": "129",
    "slug": "magikarp",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 22
  },
  {
    "abilities": [
      "Mold Breaker"
    ],
    "featured": "true",
    "height": 256,
    "id": 130,
    "name": "Gyarados",
    "number": "130",
    "slug": "gyarados",
    "type": [
      "water",
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Grass",
      "Electric",
      "Fighting",
      "Bug"
    ],
    "weight": 672.4
  },
  {
    "abilities": [
      "Shell Armor",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 945,
    "id": 131,
    "name": "Lapras",
    "number": "131",
    "slug": "lapras",
    "type": [
      "water",
      "ice"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Rock"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Limber"
    ],
    "featured": "true",
    "height": 12,
    "id": 132,
    "name": "Ditto",
    "number": "132",
    "slug": "ditto",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Adaptability",
      "Run Away"
    ],
    "featured": "true",
    "height": 709,
    "id": 133,
    "name": "Eevee",
    "number": "133",
    "slug": "eevee",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Water Absorb"
    ],
    "featured": "true",
    "height": 39,
    "id": 134,
    "name": "Vaporeon",
    "number": "134",
    "slug": "vaporeon",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 63.9
  },
  {
    "abilities": [
      "Volt Absorb"
    ],
    "featured": "true",
    "height": 31,
    "id": 135,
    "name": "Jolteon",
    "number": "135",
    "slug": "jolteon",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 54
  },
  {
    "abilities": [
      "Flash Fire"
    ],
    "featured": "true",
    "height": 35,
    "id": 136,
    "name": "Flareon",
    "number": "136",
    "slug": "flareon",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 55.1
  },
  {
    "abilities": [
      "Download",
      "Trace"
    ],
    "featured": "true",
    "height": 31,
    "id": 137,
    "name": "Porygon",
    "number": "137",
    "slug": "porygon",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 80.5
  },
  {
    "abilities": [
      "Shell Armor",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 16,
    "id": 138,
    "name": "Omanyte",
    "number": "138",
    "slug": "omanyte",
    "type": [
      "rock",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 16.5
  },
  {
    "abilities": [
      "Shell Armor",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 39,
    "id": 139,
    "name": "Omastar",
    "number": "139",
    "slug": "omastar",
    "type": [
      "rock",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 77.2
  },
  {
    "abilities": [
      "Battle Armor",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 20,
    "id": 140,
    "name": "Kabuto",
    "number": "140",
    "slug": "kabuto",
    "type": [
      "rock",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 25.4
  },
  {
    "abilities": [
      "Battle Armor",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 51,
    "id": 141,
    "name": "Kabutops",
    "number": "141",
    "slug": "kabutops",
    "type": [
      "rock",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 89.3
  },
  {
    "abilities": [
      "Tough Claws"
    ],
    "featured": "true",
    "height": 83,
    "id": 142,
    "name": "Aerodactyl",
    "number": "142",
    "slug": "aerodactyl",
    "type": [
      "rock",
      "flying"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 174.2
  },
  {
    "abilities": [
      "Immunity",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 1378,
    "id": 143,
    "name": "Snorlax",
    "number": "143",
    "slug": "snorlax",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 67,
    "id": 144,
    "name": "Articuno",
    "number": "144",
    "slug": "articuno",
    "type": [
      "ice",
      "flying"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Electric",
      "Rock"
    ],
    "weight": 122.1
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 63,
    "id": 145,
    "name": "Zapdos",
    "number": "145",
    "slug": "zapdos",
    "type": [
      "electric",
      "flying"
    ],
    "weakness": [
      "Ice",
      "Rock"
    ],
    "weight": 116
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 79,
    "id": 146,
    "name": "Moltres",
    "number": "146",
    "slug": "moltres",
    "type": [
      "fire",
      "flying"
    ],
    "weakness": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weight": 132.3
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 71,
    "id": 147,
    "name": "Dratini",
    "number": "147",
    "slug": "dratini",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 7.3
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 157,
    "id": 148,
    "name": "Dragonair",
    "number": "148",
    "slug": "dragonair",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 36.4
  },
  {
    "abilities": [
      "Inner Focus"
    ],
    "featured": "true",
    "height": 87,
    "id": 149,
    "name": "Dragonite",
    "number": "149",
    "slug": "dragonite",
    "type": [
      "dragon",
      "flying"
    ],
    "weakness": [
      "Fairy",
      "Dragon",
      "Ice",
      "Rock"
    ],
    "weight": 463
  },
  {
    "abilities": [
      "Insomnia"
    ],
    "featured": "true",
    "height": 59,
    "id": 150,
    "name": "Mewtwo",
    "number": "150",
    "slug": "mewtwo",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 72.8
  },
  {
    "abilities": [
      "Synchronize"
    ],
    "featured": "true",
    "height": 16,
    "id": 151,
    "name": "Mew",
    "number": "151",
    "slug": "mew",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 35,
    "id": 152,
    "name": "Chikorita",
    "number": "152",
    "slug": "chikorita",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 14.1
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 47,
    "id": 153,
    "name": "Bayleef",
    "number": "153",
    "slug": "bayleef",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 34.8
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 71,
    "id": 154,
    "name": "Meganium",
    "number": "154",
    "slug": "meganium",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 221.6
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 20,
    "id": 155,
    "name": "Cyndaquil",
    "number": "155",
    "slug": "cyndaquil",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 17.4
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 35,
    "id": 156,
    "name": "Quilava",
    "number": "156",
    "slug": "quilava",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 41.9
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 67,
    "id": 157,
    "name": "Typhlosion",
    "number": "157",
    "slug": "typhlosion",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 175.3
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 24,
    "id": 158,
    "name": "Totodile",
    "number": "158",
    "slug": "totodile",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 20.9
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 43,
    "id": 159,
    "name": "Croconaw",
    "number": "159",
    "slug": "croconaw",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 55.1
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 91,
    "id": 160,
    "name": "Feraligatr",
    "number": "160",
    "slug": "feraligatr",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 195.8
  },
  {
    "abilities": [
      "Keen Eye",
      "Run Away"
    ],
    "featured": "true",
    "height": 31,
    "id": 161,
    "name": "Sentret",
    "number": "161",
    "slug": "sentret",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 13.2
  },
  {
    "abilities": [
      "Keen Eye",
      "Run Away"
    ],
    "featured": "true",
    "height": 71,
    "id": 162,
    "name": "Furret",
    "number": "162",
    "slug": "furret",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 71.7
  },
  {
    "abilities": [
      "Insomnia",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 28,
    "id": 163,
    "name": "Hoothoot",
    "number": "163",
    "slug": "hoothoot",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 46.7
  },
  {
    "abilities": [
      "Insomnia",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 63,
    "id": 164,
    "name": "Noctowl",
    "number": "164",
    "slug": "noctowl",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 89.9
  },
  {
    "abilities": [
      "Early Bird",
      "Swarm"
    ],
    "featured": "true",
    "height": 39,
    "id": 165,
    "name": "Ledyba",
    "number": "165",
    "slug": "ledyba",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 23.8
  },
  {
    "abilities": [
      "Early Bird",
      "Swarm"
    ],
    "featured": "true",
    "height": 55,
    "id": 166,
    "name": "Ledian",
    "number": "166",
    "slug": "ledian",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 78.5
  },
  {
    "abilities": [
      "Insomnia",
      "Swarm"
    ],
    "featured": "true",
    "height": 20,
    "id": 167,
    "name": "Spinarak",
    "number": "167",
    "slug": "spinarak",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "Insomnia",
      "Swarm"
    ],
    "featured": "true",
    "height": 43,
    "id": 168,
    "name": "Ariados",
    "number": "168",
    "slug": "ariados",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 73.9
  },
  {
    "abilities": [
      "Inner Focus"
    ],
    "featured": "true",
    "height": 71,
    "id": 169,
    "name": "Crobat",
    "number": "169",
    "slug": "crobat",
    "type": [
      "poison",
      "flying"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 165.3
  },
  {
    "abilities": [
      "Illuminate",
      "Volt Absorb"
    ],
    "featured": "true",
    "height": 20,
    "id": 170,
    "name": "Chinchou",
    "number": "170",
    "slug": "chinchou",
    "type": [
      "water",
      "electric"
    ],
    "weakness": [
      "Grass",
      "Ground"
    ],
    "weight": 26.5
  },
  {
    "abilities": [
      "Illuminate",
      "Volt Absorb"
    ],
    "featured": "true",
    "height": 47,
    "id": 171,
    "name": "Lanturn",
    "number": "171",
    "slug": "lanturn",
    "type": [
      "water",
      "electric"
    ],
    "weakness": [
      "Grass",
      "Ground"
    ],
    "weight": 49.6
  },
  {
    "abilities": [
      "Static"
    ],
    "featured": "true",
    "height": 12,
    "id": 172,
    "name": "Pichu",
    "number": "172",
    "slug": "pichu",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 4.4
  },
  {
    "abilities": [
      "Cute Charm",
      "Magic Guard"
    ],
    "featured": "true",
    "height": 12,
    "id": 173,
    "name": "Cleffa",
    "number": "173",
    "slug": "cleffa",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 6.6
  },
  {
    "abilities": [
      "Competitive",
      "Cute Charm"
    ],
    "featured": "true",
    "height": 12,
    "id": 174,
    "name": "Igglybuff",
    "number": "174",
    "slug": "igglybuff",
    "type": [
      "normal",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Hustle",
      "Serene Grace"
    ],
    "featured": "true",
    "height": 12,
    "id": 175,
    "name": "Togepi",
    "number": "175",
    "slug": "togepi",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 3.3
  },
  {
    "abilities": [
      "Hustle",
      "Serene Grace"
    ],
    "featured": "true",
    "height": 24,
    "id": 176,
    "name": "Togetic",
    "number": "176",
    "slug": "togetic",
    "type": [
      "fairy",
      "flying"
    ],
    "weakness": [
      "Steel",
      "Poison",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 7.1
  },
  {
    "abilities": [
      "Early Bird",
      "Synchronize"
    ],
    "featured": "true",
    "height": 8,
    "id": 177,
    "name": "Natu",
    "number": "177",
    "slug": "natu",
    "type": [
      "psychic",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4.4
  },
  {
    "abilities": [
      "Early Bird",
      "Synchronize"
    ],
    "featured": "true",
    "height": 59,
    "id": 178,
    "name": "Xatu",
    "number": "178",
    "slug": "xatu",
    "type": [
      "psychic",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 33.1
  },
  {
    "abilities": [
      "Static"
    ],
    "featured": "true",
    "height": 24,
    "id": 179,
    "name": "Mareep",
    "number": "179",
    "slug": "mareep",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 17.2
  },
  {
    "abilities": [
      "Static"
    ],
    "featured": "true",
    "height": 31,
    "id": 180,
    "name": "Flaaffy",
    "number": "180",
    "slug": "flaaffy",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 29.3
  },
  {
    "abilities": [
      "Mold Breaker"
    ],
    "featured": "true",
    "height": 55,
    "id": 181,
    "name": "Ampharos",
    "number": "181",
    "slug": "ampharos",
    "type": [
      "electric",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ground",
      "Ice",
      "Dragon"
    ],
    "weight": 135.6
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 16,
    "id": 182,
    "name": "Bellossom",
    "number": "182",
    "slug": "bellossom",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 12.8
  },
  {
    "abilities": [
      "Huge Power",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 16,
    "id": 183,
    "name": "Marill",
    "number": "183",
    "slug": "marill",
    "type": [
      "water",
      "fairy"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Poison"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "Huge Power",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 31,
    "id": 184,
    "name": "Azumarill",
    "number": "184",
    "slug": "azumarill",
    "type": [
      "water",
      "fairy"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Poison"
    ],
    "weight": 62.8
  },
  {
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "featured": "true",
    "height": 47,
    "id": 185,
    "name": "Sudowoodo",
    "number": "185",
    "slug": "sudowoodo",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 83.8
  },
  {
    "abilities": [
      "Damp",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 43,
    "id": 186,
    "name": "Politoed",
    "number": "186",
    "slug": "politoed",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 74.7
  },
  {
    "abilities": [
      "Chlorophyll",
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 16,
    "id": 187,
    "name": "Hoppip",
    "number": "187",
    "slug": "hoppip",
    "type": [
      "grass",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock"
    ],
    "weight": 1.1
  },
  {
    "abilities": [
      "Chlorophyll",
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 24,
    "id": 188,
    "name": "Skiploom",
    "number": "188",
    "slug": "skiploom",
    "type": [
      "grass",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Chlorophyll",
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 31,
    "id": 189,
    "name": "Jumpluff",
    "number": "189",
    "slug": "jumpluff",
    "type": [
      "grass",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock"
    ],
    "weight": 6.6
  },
  {
    "abilities": [
      "Pickup",
      "Run Away"
    ],
    "featured": "true",
    "height": 31,
    "id": 190,
    "name": "Aipom",
    "number": "190",
    "slug": "aipom",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 25.4
  },
  {
    "abilities": [
      "Chlorophyll",
      "Solar Power"
    ],
    "featured": "true",
    "height": 12,
    "id": 191,
    "name": "Sunkern",
    "number": "191",
    "slug": "sunkern",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 4
  },
  {
    "abilities": [
      "Chlorophyll",
      "Solar Power"
    ],
    "featured": "true",
    "height": 31,
    "id": 192,
    "name": "Sunflora",
    "number": "192",
    "slug": "sunflora",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "Compound Eyes",
      "Speed Boost"
    ],
    "featured": "true",
    "height": 47,
    "id": 193,
    "name": "Yanma",
    "number": "193",
    "slug": "yanma",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 83.8
  },
  {
    "abilities": [
      "Damp",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 16,
    "id": 194,
    "name": "Wooper",
    "number": "194",
    "slug": "wooper",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "Damp",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 55,
    "id": 195,
    "name": "Quagsire",
    "number": "195",
    "slug": "quagsire",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 165.3
  },
  {
    "abilities": [
      "Synchronize"
    ],
    "featured": "true",
    "height": 35,
    "id": 196,
    "name": "Espeon",
    "number": "196",
    "slug": "espeon",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 58.4
  },
  {
    "abilities": [
      "Synchronize"
    ],
    "featured": "true",
    "height": 39,
    "id": 197,
    "name": "Umbreon",
    "number": "197",
    "slug": "umbreon",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 59.5
  },
  {
    "abilities": [
      "Insomnia",
      "Super Luck"
    ],
    "featured": "true",
    "height": 20,
    "id": 198,
    "name": "Murkrow",
    "number": "198",
    "slug": "murkrow",
    "type": [
      "dark",
      "flying"
    ],
    "weakness": [
      "Fairy",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4.6
  },
  {
    "abilities": [
      "Oblivious",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 79,
    "id": 199,
    "name": "Slowking",
    "number": "199",
    "slug": "slowking",
    "type": [
      "water",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Electric",
      "Bug"
    ],
    "weight": 175.3
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 28,
    "id": 200,
    "name": "Misdreavus",
    "number": "200",
    "slug": "misdreavus",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 20,
    "id": 201,
    "name": "Unown",
    "number": "201",
    "slug": "unown",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Shadow Tag"
    ],
    "featured": "true",
    "height": 51,
    "id": 202,
    "name": "Wobbuffet",
    "number": "202",
    "slug": "wobbuffet",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 62.8
  },
  {
    "abilities": [
      "Early Bird",
      "Inner Focus"
    ],
    "featured": "true",
    "height": 59,
    "id": 203,
    "name": "Girafarig",
    "number": "203",
    "slug": "girafarig",
    "type": [
      "normal",
      "psychic"
    ],
    "weakness": [
      "Dark",
      "Bug"
    ],
    "weight": 91.5
  },
  {
    "abilities": [
      "Sturdy"
    ],
    "featured": "true",
    "height": 24,
    "id": 204,
    "name": "Pineco",
    "number": "204",
    "slug": "pineco",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 15.9
  },
  {
    "abilities": [
      "Sturdy"
    ],
    "featured": "true",
    "height": 47,
    "id": 205,
    "name": "Forretress",
    "number": "205",
    "slug": "forretress",
    "type": [
      "bug",
      "steel"
    ],
    "weakness": [
      "Fire"
    ],
    "weight": 277.3
  },
  {
    "abilities": [
      "Run Away",
      "Serene Grace"
    ],
    "featured": "true",
    "height": 59,
    "id": 206,
    "name": "Dunsparce",
    "number": "206",
    "slug": "dunsparce",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 30.9
  },
  {
    "abilities": [
      "Hyper Cutter",
      "Sand Veil"
    ],
    "featured": "true",
    "height": 43,
    "id": 207,
    "name": "Gligar",
    "number": "207",
    "slug": "gligar",
    "type": [
      "ground",
      "flying"
    ],
    "weakness": [
      "Water",
      "Ice"
    ],
    "weight": 142.9
  },
  {
    "abilities": [
      "Sand Force"
    ],
    "featured": "true",
    "height": 413,
    "id": 208,
    "name": "Steelix",
    "number": "208",
    "slug": "steelix",
    "type": [
      "steel",
      "ground"
    ],
    "weakness": [
      "Fire",
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 1631.4
  },
  {
    "abilities": [
      "Intimidate",
      "Run Away"
    ],
    "featured": "true",
    "height": 24,
    "id": 209,
    "name": "Snubbull",
    "number": "209",
    "slug": "snubbull",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 17.2
  },
  {
    "abilities": [
      "Intimidate",
      "Quick Feet"
    ],
    "featured": "true",
    "height": 55,
    "id": 210,
    "name": "Granbull",
    "number": "210",
    "slug": "granbull",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 107.4
  },
  {
    "abilities": [
      "Poison Point",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 20,
    "id": 211,
    "name": "Qwilfish",
    "number": "211",
    "slug": "qwilfish",
    "type": [
      "water",
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ground"
    ],
    "weight": 8.6
  },
  {
    "abilities": [
      "Technician"
    ],
    "featured": "true",
    "height": 79,
    "id": 212,
    "name": "Scizor",
    "number": "212",
    "slug": "scizor",
    "type": [
      "bug",
      "steel"
    ],
    "weakness": [
      "Fire"
    ],
    "weight": 275.6
  },
  {
    "abilities": [
      "Gluttony",
      "Sturdy"
    ],
    "featured": "true",
    "height": 24,
    "id": 213,
    "name": "Shuckle",
    "number": "213",
    "slug": "shuckle",
    "type": [
      "bug",
      "rock"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Rock"
    ],
    "weight": 45.2
  },
  {
    "abilities": [
      "Skill Link"
    ],
    "featured": "true",
    "height": 67,
    "id": 214,
    "name": "Heracross",
    "number": "214",
    "slug": "heracross",
    "type": [
      "bug",
      "fighting"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 137.8
  },
  {
    "abilities": [
      "Inner Focus",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 35,
    "id": 215,
    "name": "Sneasel",
    "number": "215",
    "slug": "sneasel",
    "type": [
      "dark",
      "ice"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Fighting",
      "Rock",
      "Fairy",
      "Bug"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Pickup",
      "Quick Feet"
    ],
    "featured": "true",
    "height": 24,
    "id": 216,
    "name": "Teddiursa",
    "number": "216",
    "slug": "teddiursa",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 19.4
  },
  {
    "abilities": [
      "Guts",
      "Quick Feet"
    ],
    "featured": "true",
    "height": 71,
    "id": 217,
    "name": "Ursaring",
    "number": "217",
    "slug": "ursaring",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 277.3
  },
  {
    "abilities": [
      "Flame Body",
      "Magma Armor"
    ],
    "featured": "true",
    "height": 28,
    "id": 218,
    "name": "Slugma",
    "number": "218",
    "slug": "slugma",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 77.2
  },
  {
    "abilities": [
      "Flame Body",
      "Magma Armor"
    ],
    "featured": "true",
    "height": 31,
    "id": 219,
    "name": "Magcargo",
    "number": "219",
    "slug": "magcargo",
    "type": [
      "fire",
      "rock"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 121.3
  },
  {
    "abilities": [
      "Oblivious",
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 16,
    "id": 220,
    "name": "Swinub",
    "number": "220",
    "slug": "swinub",
    "type": [
      "ice",
      "ground"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Grass",
      "Water",
      "Fighting"
    ],
    "weight": 14.3
  },
  {
    "abilities": [
      "Oblivious",
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 43,
    "id": 221,
    "name": "Piloswine",
    "number": "221",
    "slug": "piloswine",
    "type": [
      "ice",
      "ground"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Grass",
      "Water",
      "Fighting"
    ],
    "weight": 123
  },
  {
    "abilities": [
      "Weak Armor"
    ],
    "featured": "true",
    "height": 24,
    "id": 222,
    "name": "Corsola",
    "number": "222",
    "slug": "corsola",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 1.1
  },
  {
    "abilities": [
      "Hustle",
      "Sniper"
    ],
    "featured": "true",
    "height": 24,
    "id": 223,
    "name": "Remoraid",
    "number": "223",
    "slug": "remoraid",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 26.5
  },
  {
    "abilities": [
      "Sniper",
      "Suction Cups"
    ],
    "featured": "true",
    "height": 35,
    "id": 224,
    "name": "Octillery",
    "number": "224",
    "slug": "octillery",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 62.8
  },
  {
    "abilities": [
      "Hustle",
      "Vital Spirit"
    ],
    "featured": "true",
    "height": 35,
    "id": 225,
    "name": "Delibird",
    "number": "225",
    "slug": "delibird",
    "type": [
      "ice",
      "flying"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Electric",
      "Rock"
    ],
    "weight": 35.3
  },
  {
    "abilities": [
      "Swift Swim",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 83,
    "id": 226,
    "name": "Mantine",
    "number": "226",
    "slug": "mantine",
    "type": [
      "water",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Rock"
    ],
    "weight": 485
  },
  {
    "abilities": [
      "Keen Eye",
      "Sturdy"
    ],
    "featured": "true",
    "height": 67,
    "id": 227,
    "name": "Skarmory",
    "number": "227",
    "slug": "skarmory",
    "type": [
      "steel",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Electric"
    ],
    "weight": 111.3
  },
  {
    "abilities": [
      "Early Bird",
      "Flash Fire"
    ],
    "featured": "true",
    "height": 24,
    "id": 228,
    "name": "Houndour",
    "number": "228",
    "slug": "houndour",
    "type": [
      "dark",
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 23.8
  },
  {
    "abilities": [
      "Solar Power"
    ],
    "featured": "true",
    "height": 75,
    "id": 229,
    "name": "Houndoom",
    "number": "229",
    "slug": "houndoom",
    "type": [
      "dark",
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 109.1
  },
  {
    "abilities": [
      "Sniper",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 71,
    "id": 230,
    "name": "Kingdra",
    "number": "230",
    "slug": "kingdra",
    "type": [
      "water",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Dragon"
    ],
    "weight": 335.1
  },
  {
    "abilities": [
      "Pickup"
    ],
    "featured": "true",
    "height": 20,
    "id": 231,
    "name": "Phanpy",
    "number": "231",
    "slug": "phanpy",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 73.9
  },
  {
    "abilities": [
      "Sturdy"
    ],
    "featured": "true",
    "height": 43,
    "id": 232,
    "name": "Donphan",
    "number": "232",
    "slug": "donphan",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 264.6
  },
  {
    "abilities": [
      "Download",
      "Trace"
    ],
    "featured": "true",
    "height": 24,
    "id": 233,
    "name": "Porygon2",
    "number": "233",
    "slug": "porygon2",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 71.7
  },
  {
    "abilities": [
      "Frisk",
      "Intimidate"
    ],
    "featured": "true",
    "height": 55,
    "id": 234,
    "name": "Stantler",
    "number": "234",
    "slug": "stantler",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 157
  },
  {
    "abilities": [
      "Own Tempo",
      "Technician"
    ],
    "featured": "true",
    "height": 47,
    "id": 235,
    "name": "Smeargle",
    "number": "235",
    "slug": "smeargle",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 127.9
  },
  {
    "abilities": [
      "Guts",
      "Steadfast"
    ],
    "featured": "true",
    "height": 28,
    "id": 236,
    "name": "Tyrogue",
    "number": "236",
    "slug": "tyrogue",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 46.3
  },
  {
    "abilities": [
      "Intimidate",
      "Technician"
    ],
    "featured": "true",
    "height": 55,
    "id": 237,
    "name": "Hitmontop",
    "number": "237",
    "slug": "hitmontop",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 105.8
  },
  {
    "abilities": [
      "Forewarn",
      "Oblivious"
    ],
    "featured": "true",
    "height": 16,
    "id": 238,
    "name": "Smoochum",
    "number": "238",
    "slug": "smoochum",
    "type": [
      "ice",
      "psychic"
    ],
    "weakness": [
      "Steel",
      "Ghost",
      "Fire",
      "Dark",
      "Rock",
      "Bug"
    ],
    "weight": 13.2
  },
  {
    "abilities": [
      "Static"
    ],
    "featured": "true",
    "height": 24,
    "id": 239,
    "name": "Elekid",
    "number": "239",
    "slug": "elekid",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 51.8
  },
  {
    "abilities": [
      "Flame Body"
    ],
    "featured": "true",
    "height": 28,
    "id": 240,
    "name": "Magby",
    "number": "240",
    "slug": "magby",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 47.2
  },
  {
    "abilities": [
      "Scrappy",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 47,
    "id": 241,
    "name": "Miltank",
    "number": "241",
    "slug": "miltank",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 166.4
  },
  {
    "abilities": [
      "Natural Cure",
      "Serene Grace"
    ],
    "featured": "true",
    "height": 59,
    "id": 242,
    "name": "Blissey",
    "number": "242",
    "slug": "blissey",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 103.2
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 75,
    "id": 243,
    "name": "Raikou",
    "number": "243",
    "slug": "raikou",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 392.4
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 83,
    "id": 244,
    "name": "Entei",
    "number": "244",
    "slug": "entei",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 436.5
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 79,
    "id": 245,
    "name": "Suicune",
    "number": "245",
    "slug": "suicune",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 412.3
  },
  {
    "abilities": [
      "Guts"
    ],
    "featured": "true",
    "height": 24,
    "id": 246,
    "name": "Larvitar",
    "number": "246",
    "slug": "larvitar",
    "type": [
      "rock",
      "ground"
    ],
    "weakness": [
      "Steel",
      "Fighting",
      "Water",
      "Ice",
      "Grass",
      "Ground"
    ],
    "weight": 158.7
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 47,
    "id": 247,
    "name": "Pupitar",
    "number": "247",
    "slug": "pupitar",
    "type": [
      "rock",
      "ground"
    ],
    "weakness": [
      "Steel",
      "Fighting",
      "Water",
      "Ice",
      "Grass",
      "Ground"
    ],
    "weight": 335.1
  },
  {
    "abilities": [
      "Sand Stream"
    ],
    "featured": "true",
    "height": 98,
    "id": 248,
    "name": "Tyranitar",
    "number": "248",
    "slug": "tyranitar",
    "type": [
      "rock",
      "dark"
    ],
    "weakness": [
      "Steel",
      "Fighting",
      "Water",
      "Fairy",
      "Grass",
      "Bug",
      "Ground"
    ],
    "weight": 562.2
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 205,
    "id": 249,
    "name": "Lugia",
    "number": "249",
    "slug": "lugia",
    "type": [
      "psychic",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 476.2
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 150,
    "id": 250,
    "name": "Ho-Oh",
    "number": "250",
    "slug": "ho-oh",
    "type": [
      "fire",
      "flying"
    ],
    "weakness": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weight": 438.7
  },
  {
    "abilities": [
      "Natural Cure"
    ],
    "featured": "true",
    "height": 24,
    "id": 251,
    "name": "Celebi",
    "number": "251",
    "slug": "celebi",
    "type": [
      "psychic",
      "grass"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Ice",
      "Dark",
      "Poison",
      "Bug"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 20,
    "id": 252,
    "name": "Treecko",
    "number": "252",
    "slug": "treecko",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 35,
    "id": 253,
    "name": "Grovyle",
    "number": "253",
    "slug": "grovyle",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 47.6
  },
  {
    "abilities": [
      "Lightning Rod"
    ],
    "featured": "true",
    "height": 75,
    "id": 254,
    "name": "Sceptile",
    "number": "254",
    "slug": "sceptile",
    "type": [
      "grass",
      "dragon"
    ],
    "weakness": [
      "Flying",
      "Ice",
      "Dragon",
      "Poison",
      "Fairy",
      "Bug"
    ],
    "weight": 121.7
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 16,
    "id": 255,
    "name": "Torchic",
    "number": "255",
    "slug": "torchic",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 5.5
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 35,
    "id": 256,
    "name": "Combusken",
    "number": "256",
    "slug": "combusken",
    "type": [
      "fire",
      "fighting"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Flying",
      "Ground"
    ],
    "weight": 43
  },
  {
    "abilities": [
      "Speed Boost"
    ],
    "featured": "true",
    "height": 75,
    "id": 257,
    "name": "Blaziken",
    "number": "257",
    "slug": "blaziken",
    "type": [
      "fire",
      "fighting"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Flying",
      "Ground"
    ],
    "weight": 114.6
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 16,
    "id": 258,
    "name": "Mudkip",
    "number": "258",
    "slug": "mudkip",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 16.8
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 28,
    "id": 259,
    "name": "Marshtomp",
    "number": "259",
    "slug": "marshtomp",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 75,
    "id": 260,
    "name": "Swampert",
    "number": "260",
    "slug": "swampert",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 224.9
  },
  {
    "abilities": [
      "Quick Feet",
      "Run Away"
    ],
    "featured": "true",
    "height": 20,
    "id": 261,
    "name": "Poochyena",
    "number": "261",
    "slug": "poochyena",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 30
  },
  {
    "abilities": [
      "Intimidate",
      "Quick Feet"
    ],
    "featured": "true",
    "height": 39,
    "id": 262,
    "name": "Mightyena",
    "number": "262",
    "slug": "mightyena",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 81.6
  },
  {
    "abilities": [
      "Gluttony",
      "Pickup"
    ],
    "featured": "true",
    "height": 16,
    "id": 263,
    "name": "Zigzagoon",
    "number": "263",
    "slug": "zigzagoon",
    "type": [
      "dark",
      "normal"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 38.6
  },
  {
    "abilities": [
      "Gluttony",
      "Pickup"
    ],
    "featured": "true",
    "height": 20,
    "id": 264,
    "name": "Linoone",
    "number": "264",
    "slug": "linoone",
    "type": [
      "dark",
      "normal"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 71.7
  },
  {
    "abilities": [
      "Shield Dust"
    ],
    "featured": "true",
    "height": 12,
    "id": 265,
    "name": "Wurmple",
    "number": "265",
    "slug": "wurmple",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 7.9
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 24,
    "id": 266,
    "name": "Silcoon",
    "number": "266",
    "slug": "silcoon",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 22
  },
  {
    "abilities": [
      "Swarm"
    ],
    "featured": "true",
    "height": 39,
    "id": 267,
    "name": "Beautifly",
    "number": "267",
    "slug": "beautifly",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 62.6
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 28,
    "id": 268,
    "name": "Cascoon",
    "number": "268",
    "slug": "cascoon",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 25.4
  },
  {
    "abilities": [
      "Shield Dust"
    ],
    "featured": "true",
    "height": 47,
    "id": 269,
    "name": "Dustox",
    "number": "269",
    "slug": "dustox",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 69.7
  },
  {
    "abilities": [
      "Rain Dish",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 20,
    "id": 270,
    "name": "Lotad",
    "number": "270",
    "slug": "lotad",
    "type": [
      "water",
      "grass"
    ],
    "weakness": [
      "Flying",
      "Bug",
      "Poison"
    ],
    "weight": 5.7
  },
  {
    "abilities": [
      "Rain Dish",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 47,
    "id": 271,
    "name": "Lombre",
    "number": "271",
    "slug": "lombre",
    "type": [
      "water",
      "grass"
    ],
    "weakness": [
      "Flying",
      "Bug",
      "Poison"
    ],
    "weight": 71.7
  },
  {
    "abilities": [
      "Rain Dish",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 59,
    "id": 272,
    "name": "Ludicolo",
    "number": "272",
    "slug": "ludicolo",
    "type": [
      "water",
      "grass"
    ],
    "weakness": [
      "Flying",
      "Bug",
      "Poison"
    ],
    "weight": 121.3
  },
  {
    "abilities": [
      "Chlorophyll",
      "Early Bird"
    ],
    "featured": "true",
    "height": 20,
    "id": 273,
    "name": "Seedot",
    "number": "273",
    "slug": "seedot",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Chlorophyll",
      "Early Bird"
    ],
    "featured": "true",
    "height": 39,
    "id": 274,
    "name": "Nuzleaf",
    "number": "274",
    "slug": "nuzleaf",
    "type": [
      "grass",
      "dark"
    ],
    "weakness": [
      "Ice",
      "Fire",
      "Flying",
      "Poison",
      "Fighting",
      "Fairy",
      "Bug"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Chlorophyll",
      "Early Bird"
    ],
    "featured": "true",
    "height": 51,
    "id": 275,
    "name": "Shiftry",
    "number": "275",
    "slug": "shiftry",
    "type": [
      "grass",
      "dark"
    ],
    "weakness": [
      "Ice",
      "Fire",
      "Flying",
      "Poison",
      "Fighting",
      "Fairy",
      "Bug"
    ],
    "weight": 131.4
  },
  {
    "abilities": [
      "Guts"
    ],
    "featured": "true",
    "height": 12,
    "id": 276,
    "name": "Taillow",
    "number": "276",
    "slug": "taillow",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 5.1
  },
  {
    "abilities": [
      "Guts"
    ],
    "featured": "true",
    "height": 28,
    "id": 277,
    "name": "Swellow",
    "number": "277",
    "slug": "swellow",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 43.7
  },
  {
    "abilities": [
      "Hydration",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 24,
    "id": 278,
    "name": "Wingull",
    "number": "278",
    "slug": "wingull",
    "type": [
      "water",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Rock"
    ],
    "weight": 20.9
  },
  {
    "abilities": [
      "Drizzle",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 47,
    "id": 279,
    "name": "Pelipper",
    "number": "279",
    "slug": "pelipper",
    "type": [
      "water",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Rock"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Synchronize",
      "Trace"
    ],
    "featured": "true",
    "height": 16,
    "id": 280,
    "name": "Ralts",
    "number": "280",
    "slug": "ralts",
    "type": [
      "psychic",
      "fairy"
    ],
    "weakness": [
      "Ghost",
      "Steel",
      "Poison"
    ],
    "weight": 14.6
  },
  {
    "abilities": [
      "Synchronize",
      "Trace"
    ],
    "featured": "true",
    "height": 31,
    "id": 281,
    "name": "Kirlia",
    "number": "281",
    "slug": "kirlia",
    "type": [
      "psychic",
      "fairy"
    ],
    "weakness": [
      "Ghost",
      "Steel",
      "Poison"
    ],
    "weight": 44.5
  },
  {
    "abilities": [
      "Pixilate"
    ],
    "featured": "true",
    "height": 63,
    "id": 282,
    "name": "Gardevoir",
    "number": "282",
    "slug": "gardevoir",
    "type": [
      "psychic",
      "fairy"
    ],
    "weakness": [
      "Ghost",
      "Steel",
      "Poison"
    ],
    "weight": 106.7
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 20,
    "id": 283,
    "name": "Surskit",
    "number": "283",
    "slug": "surskit",
    "type": [
      "bug",
      "water"
    ],
    "weakness": [
      "Flying",
      "Electric",
      "Rock"
    ],
    "weight": 3.7
  },
  {
    "abilities": [
      "Intimidate"
    ],
    "featured": "true",
    "height": 31,
    "id": 284,
    "name": "Masquerain",
    "number": "284",
    "slug": "masquerain",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 7.9
  },
  {
    "abilities": [
      "Effect Spore",
      "Poison Heal"
    ],
    "featured": "true",
    "height": 16,
    "id": 285,
    "name": "Shroomish",
    "number": "285",
    "slug": "shroomish",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 9.9
  },
  {
    "abilities": [
      "Effect Spore",
      "Poison Heal"
    ],
    "featured": "true",
    "height": 47,
    "id": 286,
    "name": "Breloom",
    "number": "286",
    "slug": "breloom",
    "type": [
      "grass",
      "fighting"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice",
      "Poison",
      "Fairy"
    ],
    "weight": 86.4
  },
  {
    "abilities": [
      "Truant"
    ],
    "featured": "true",
    "height": 31,
    "id": 287,
    "name": "Slakoth",
    "number": "287",
    "slug": "slakoth",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 52.9
  },
  {
    "abilities": [
      "Vital Spirit"
    ],
    "featured": "true",
    "height": 55,
    "id": 288,
    "name": "Vigoroth",
    "number": "288",
    "slug": "vigoroth",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 102.5
  },
  {
    "abilities": [
      "Truant"
    ],
    "featured": "true",
    "height": 79,
    "id": 289,
    "name": "Slaking",
    "number": "289",
    "slug": "slaking",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 287.7
  },
  {
    "abilities": [
      "Compound Eyes"
    ],
    "featured": "true",
    "height": 20,
    "id": 290,
    "name": "Nincada",
    "number": "290",
    "slug": "nincada",
    "type": [
      "bug",
      "ground"
    ],
    "weakness": [
      "Fire",
      "Water",
      "Flying",
      "Ice"
    ],
    "weight": 12.1
  },
  {
    "abilities": [
      "Speed Boost"
    ],
    "featured": "true",
    "height": 31,
    "id": 291,
    "name": "Ninjask",
    "number": "291",
    "slug": "ninjask",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 26.5
  },
  {
    "abilities": [
      "Wonder Guard"
    ],
    "featured": "true",
    "height": 31,
    "id": 292,
    "name": "Shedinja",
    "number": "292",
    "slug": "shedinja",
    "type": [
      "bug",
      "ghost"
    ],
    "weakness": [
      "Fire",
      "Ghost",
      "Flying",
      "Dark",
      "Rock"
    ],
    "weight": 2.6
  },
  {
    "abilities": [
      "Soundproof"
    ],
    "featured": "true",
    "height": 24,
    "id": 293,
    "name": "Whismur",
    "number": "293",
    "slug": "whismur",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 35.9
  },
  {
    "abilities": [
      "Soundproof"
    ],
    "featured": "true",
    "height": 39,
    "id": 294,
    "name": "Loudred",
    "number": "294",
    "slug": "loudred",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 89.3
  },
  {
    "abilities": [
      "Soundproof"
    ],
    "featured": "true",
    "height": 59,
    "id": 295,
    "name": "Exploud",
    "number": "295",
    "slug": "exploud",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 185.2
  },
  {
    "abilities": [
      "Guts",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 39,
    "id": 296,
    "name": "Makuhita",
    "number": "296",
    "slug": "makuhita",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 190.5
  },
  {
    "abilities": [
      "Guts",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 91,
    "id": 297,
    "name": "Hariyama",
    "number": "297",
    "slug": "hariyama",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 559.5
  },
  {
    "abilities": [
      "Huge Power",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 8,
    "id": 298,
    "name": "Azurill",
    "number": "298",
    "slug": "azurill",
    "type": [
      "normal",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 4.4
  },
  {
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "featured": "true",
    "height": 39,
    "id": 299,
    "name": "Nosepass",
    "number": "299",
    "slug": "nosepass",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 213.8
  },
  {
    "abilities": [
      "Cute Charm",
      "Normalize"
    ],
    "featured": "true",
    "height": 24,
    "id": 300,
    "name": "Skitty",
    "number": "300",
    "slug": "skitty",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 24.3
  },
  {
    "abilities": [
      "Cute Charm",
      "Normalize"
    ],
    "featured": "true",
    "height": 43,
    "id": 301,
    "name": "Delcatty",
    "number": "301",
    "slug": "delcatty",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 71.9
  },
  {
    "abilities": [
      "Magic Bounce"
    ],
    "featured": "true",
    "height": 20,
    "id": 302,
    "name": "Sableye",
    "number": "302",
    "slug": "sableye",
    "type": [
      "dark",
      "ghost"
    ],
    "weakness": [
      "Fairy"
    ],
    "weight": 354.9
  },
  {
    "abilities": [
      "Huge Power"
    ],
    "featured": "true",
    "height": 39,
    "id": 303,
    "name": "Mawile",
    "number": "303",
    "slug": "mawile",
    "type": [
      "steel",
      "fairy"
    ],
    "weakness": [
      "Fire",
      "Ground"
    ],
    "weight": 51.8
  },
  {
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "featured": "true",
    "height": 16,
    "id": 304,
    "name": "Aron",
    "number": "304",
    "slug": "aron",
    "type": [
      "steel",
      "rock"
    ],
    "weakness": [
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 132.3
  },
  {
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "featured": "true",
    "height": 35,
    "id": 305,
    "name": "Lairon",
    "number": "305",
    "slug": "lairon",
    "type": [
      "steel",
      "rock"
    ],
    "weakness": [
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 264.6
  },
  {
    "abilities": [
      "Filter"
    ],
    "featured": "true",
    "height": 87,
    "id": 306,
    "name": "Aggron",
    "number": "306",
    "slug": "aggron",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 870.8
  },
  {
    "abilities": [
      "Pure Power"
    ],
    "featured": "true",
    "height": 24,
    "id": 307,
    "name": "Meditite",
    "number": "307",
    "slug": "meditite",
    "type": [
      "fighting",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fairy",
      "Flying"
    ],
    "weight": 24.7
  },
  {
    "abilities": [
      "Pure Power"
    ],
    "featured": "true",
    "height": 51,
    "id": 308,
    "name": "Medicham",
    "number": "308",
    "slug": "medicham",
    "type": [
      "fighting",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fairy",
      "Flying"
    ],
    "weight": 69.4
  },
  {
    "abilities": [
      "Lightning Rod",
      "Static"
    ],
    "featured": "true",
    "height": 24,
    "id": 309,
    "name": "Electrike",
    "number": "309",
    "slug": "electrike",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 33.5
  },
  {
    "abilities": [
      "Intimidate"
    ],
    "featured": "true",
    "height": 71,
    "id": 310,
    "name": "Manectric",
    "number": "310",
    "slug": "manectric",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 97
  },
  {
    "abilities": [
      "Plus"
    ],
    "featured": "true",
    "height": 16,
    "id": 311,
    "name": "Plusle",
    "number": "311",
    "slug": "plusle",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 9.3
  },
  {
    "abilities": [
      "Minus"
    ],
    "featured": "true",
    "height": 16,
    "id": 312,
    "name": "Minun",
    "number": "312",
    "slug": "minun",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 9.3
  },
  {
    "abilities": [
      "Illuminate",
      "Swarm"
    ],
    "featured": "true",
    "height": 28,
    "id": 313,
    "name": "Volbeat",
    "number": "313",
    "slug": "volbeat",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 39
  },
  {
    "abilities": [
      "Oblivious",
      "Tinted Lens"
    ],
    "featured": "true",
    "height": 24,
    "id": 314,
    "name": "Illumise",
    "number": "314",
    "slug": "illumise",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 39
  },
  {
    "abilities": [
      "Natural Cure",
      "Poison Point"
    ],
    "featured": "true",
    "height": 12,
    "id": 315,
    "name": "Roselia",
    "number": "315",
    "slug": "roselia",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 4.4
  },
  {
    "abilities": [
      "Liquid Ooze",
      "Sticky Hold"
    ],
    "featured": "true",
    "height": 16,
    "id": 316,
    "name": "Gulpin",
    "number": "316",
    "slug": "gulpin",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 22.7
  },
  {
    "abilities": [
      "Liquid Ooze",
      "Sticky Hold"
    ],
    "featured": "true",
    "height": 67,
    "id": 317,
    "name": "Swalot",
    "number": "317",
    "slug": "swalot",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 176.4
  },
  {
    "abilities": [
      "Rough Skin"
    ],
    "featured": "true",
    "height": 31,
    "id": 318,
    "name": "Carvanha",
    "number": "318",
    "slug": "carvanha",
    "type": [
      "water",
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Grass",
      "Electric",
      "Fighting",
      "Bug"
    ],
    "weight": 45.9
  },
  {
    "abilities": [
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 98,
    "id": 319,
    "name": "Sharpedo",
    "number": "319",
    "slug": "sharpedo",
    "type": [
      "water",
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Grass",
      "Electric",
      "Fighting",
      "Bug"
    ],
    "weight": 287.3
  },
  {
    "abilities": [
      "Oblivious",
      "Water Veil"
    ],
    "featured": "true",
    "height": 79,
    "id": 320,
    "name": "Wailmer",
    "number": "320",
    "slug": "wailmer",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 286.6
  },
  {
    "abilities": [
      "Oblivious",
      "Water Veil"
    ],
    "featured": "true",
    "height": 571,
    "id": 321,
    "name": "Wailord",
    "number": "321",
    "slug": "wailord",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 877.4
  },
  {
    "abilities": [
      "Oblivious",
      "Simple"
    ],
    "featured": "true",
    "height": 28,
    "id": 322,
    "name": "Numel",
    "number": "322",
    "slug": "numel",
    "type": [
      "fire",
      "ground"
    ],
    "weakness": [
      "Water",
      "Ground"
    ],
    "weight": 52.9
  },
  {
    "abilities": [
      "Sheer Force"
    ],
    "featured": "true",
    "height": 98,
    "id": 323,
    "name": "Camerupt",
    "number": "323",
    "slug": "camerupt",
    "type": [
      "fire",
      "ground"
    ],
    "weakness": [
      "Water",
      "Ground"
    ],
    "weight": 706.6
  },
  {
    "abilities": [
      "Drought",
      "White Smoke"
    ],
    "featured": "true",
    "height": 20,
    "id": 324,
    "name": "Torkoal",
    "number": "324",
    "slug": "torkoal",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 177.3
  },
  {
    "abilities": [
      "Own Tempo",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 28,
    "id": 325,
    "name": "Spoink",
    "number": "325",
    "slug": "spoink",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 67.5
  },
  {
    "abilities": [
      "Own Tempo",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 35,
    "id": 326,
    "name": "Grumpig",
    "number": "326",
    "slug": "grumpig",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 157.6
  },
  {
    "abilities": [
      "Own Tempo",
      "Tangled Feet"
    ],
    "featured": "true",
    "height": 43,
    "id": 327,
    "name": "Spinda",
    "number": "327",
    "slug": "spinda",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Arena Trap",
      "Hyper Cutter"
    ],
    "featured": "true",
    "height": 28,
    "id": 328,
    "name": "Trapinch",
    "number": "328",
    "slug": "trapinch",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 33.1
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 43,
    "id": 329,
    "name": "Vibrava",
    "number": "329",
    "slug": "vibrava",
    "type": [
      "ground",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 33.7
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 79,
    "id": 330,
    "name": "Flygon",
    "number": "330",
    "slug": "flygon",
    "type": [
      "ground",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 180.8
  },
  {
    "abilities": [
      "Sand Veil"
    ],
    "featured": "true",
    "height": 16,
    "id": 331,
    "name": "Cacnea",
    "number": "331",
    "slug": "cacnea",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 113.1
  },
  {
    "abilities": [
      "Sand Veil"
    ],
    "featured": "true",
    "height": 51,
    "id": 332,
    "name": "Cacturne",
    "number": "332",
    "slug": "cacturne",
    "type": [
      "grass",
      "dark"
    ],
    "weakness": [
      "Ice",
      "Fire",
      "Flying",
      "Poison",
      "Fighting",
      "Fairy",
      "Bug"
    ],
    "weight": 170.6
  },
  {
    "abilities": [
      "Natural Cure"
    ],
    "featured": "true",
    "height": 16,
    "id": 333,
    "name": "Swablu",
    "number": "333",
    "slug": "swablu",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 2.6
  },
  {
    "abilities": [
      "Pixilate"
    ],
    "featured": "true",
    "height": 59,
    "id": 334,
    "name": "Altaria",
    "number": "334",
    "slug": "altaria",
    "type": [
      "dragon",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fairy",
      "Ice",
      "Poison"
    ],
    "weight": 45.4
  },
  {
    "abilities": [
      "Immunity"
    ],
    "featured": "true",
    "height": 51,
    "id": 335,
    "name": "Zangoose",
    "number": "335",
    "slug": "zangoose",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 88.8
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 106,
    "id": 336,
    "name": "Seviper",
    "number": "336",
    "slug": "seviper",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 115.7
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 39,
    "id": 337,
    "name": "Lunatone",
    "number": "337",
    "slug": "lunatone",
    "type": [
      "rock",
      "psychic"
    ],
    "weakness": [
      "Steel",
      "Ghost",
      "Water",
      "Dark",
      "Grass",
      "Bug",
      "Ground"
    ],
    "weight": 370.4
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 47,
    "id": 338,
    "name": "Solrock",
    "number": "338",
    "slug": "solrock",
    "type": [
      "rock",
      "psychic"
    ],
    "weakness": [
      "Steel",
      "Ghost",
      "Water",
      "Dark",
      "Grass",
      "Bug",
      "Ground"
    ],
    "weight": 339.5
  },
  {
    "abilities": [
      "Anticipation",
      "Oblivious"
    ],
    "featured": "true",
    "height": 16,
    "id": 339,
    "name": "Barboach",
    "number": "339",
    "slug": "barboach",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 4.2
  },
  {
    "abilities": [
      "Anticipation",
      "Oblivious"
    ],
    "featured": "true",
    "height": 35,
    "id": 340,
    "name": "Whiscash",
    "number": "340",
    "slug": "whiscash",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 52
  },
  {
    "abilities": [
      "Hyper Cutter",
      "Shell Armor"
    ],
    "featured": "true",
    "height": 24,
    "id": 341,
    "name": "Corphish",
    "number": "341",
    "slug": "corphish",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 25.4
  },
  {
    "abilities": [
      "Hyper Cutter",
      "Shell Armor"
    ],
    "featured": "true",
    "height": 43,
    "id": 342,
    "name": "Crawdaunt",
    "number": "342",
    "slug": "crawdaunt",
    "type": [
      "water",
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Grass",
      "Electric",
      "Fighting",
      "Bug"
    ],
    "weight": 72.3
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 20,
    "id": 343,
    "name": "Baltoy",
    "number": "343",
    "slug": "baltoy",
    "type": [
      "ground",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Water",
      "Ice",
      "Dark",
      "Grass",
      "Bug"
    ],
    "weight": 47.4
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 59,
    "id": 344,
    "name": "Claydol",
    "number": "344",
    "slug": "claydol",
    "type": [
      "ground",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Water",
      "Ice",
      "Dark",
      "Grass",
      "Bug"
    ],
    "weight": 238.1
  },
  {
    "abilities": [
      "Suction Cups"
    ],
    "featured": "true",
    "height": 39,
    "id": 345,
    "name": "Lileep",
    "number": "345",
    "slug": "lileep",
    "type": [
      "rock",
      "grass"
    ],
    "weakness": [
      "Steel",
      "Ice",
      "Fighting",
      "Bug"
    ],
    "weight": 52.5
  },
  {
    "abilities": [
      "Suction Cups"
    ],
    "featured": "true",
    "height": 59,
    "id": 346,
    "name": "Cradily",
    "number": "346",
    "slug": "cradily",
    "type": [
      "rock",
      "grass"
    ],
    "weakness": [
      "Steel",
      "Ice",
      "Fighting",
      "Bug"
    ],
    "weight": 133.2
  },
  {
    "abilities": [
      "Battle Armor"
    ],
    "featured": "true",
    "height": 28,
    "id": 347,
    "name": "Anorith",
    "number": "347",
    "slug": "anorith",
    "type": [
      "rock",
      "bug"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Rock"
    ],
    "weight": 27.6
  },
  {
    "abilities": [
      "Battle Armor"
    ],
    "featured": "true",
    "height": 59,
    "id": 348,
    "name": "Armaldo",
    "number": "348",
    "slug": "armaldo",
    "type": [
      "rock",
      "bug"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Rock"
    ],
    "weight": 150.4
  },
  {
    "abilities": [
      "Oblivious",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 24,
    "id": 349,
    "name": "Feebas",
    "number": "349",
    "slug": "feebas",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 16.3
  },
  {
    "abilities": [
      "Competitive",
      "Marvel Scale"
    ],
    "featured": "true",
    "height": 244,
    "id": 350,
    "name": "Milotic",
    "number": "350",
    "slug": "milotic",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 357.1
  },
  {
    "abilities": [
      "Forecast"
    ],
    "featured": "true",
    "height": 12,
    "id": 351,
    "name": "Castform",
    "number": "351",
    "slug": "castform",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 1.8
  },
  {
    "abilities": [
      "Color Change"
    ],
    "featured": "true",
    "height": 39,
    "id": 352,
    "name": "Kecleon",
    "number": "352",
    "slug": "kecleon",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 48.5
  },
  {
    "abilities": [
      "Frisk",
      "Insomnia"
    ],
    "featured": "true",
    "height": 24,
    "id": 353,
    "name": "Shuppet",
    "number": "353",
    "slug": "shuppet",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 5.1
  },
  {
    "abilities": [
      "Prankster"
    ],
    "featured": "true",
    "height": 47,
    "id": 354,
    "name": "Banette",
    "number": "354",
    "slug": "banette",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 28.7
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 31,
    "id": 355,
    "name": "Duskull",
    "number": "355",
    "slug": "duskull",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 33.1
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 63,
    "id": 356,
    "name": "Dusclops",
    "number": "356",
    "slug": "dusclops",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 67.5
  },
  {
    "abilities": [
      "Chlorophyll",
      "Solar Power"
    ],
    "featured": "true",
    "height": 79,
    "id": 357,
    "name": "Tropius",
    "number": "357",
    "slug": "tropius",
    "type": [
      "grass",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock"
    ],
    "weight": 220.5
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 24,
    "id": 358,
    "name": "Chimecho",
    "number": "358",
    "slug": "chimecho",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Magic Bounce"
    ],
    "featured": "true",
    "height": 47,
    "id": 359,
    "name": "Absol",
    "number": "359",
    "slug": "absol",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 108
  },
  {
    "abilities": [
      "Shadow Tag"
    ],
    "featured": "true",
    "height": 24,
    "id": 360,
    "name": "Wynaut",
    "number": "360",
    "slug": "wynaut",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 30.9
  },
  {
    "abilities": [
      "Ice Body",
      "Inner Focus"
    ],
    "featured": "true",
    "height": 28,
    "id": 361,
    "name": "Snorunt",
    "number": "361",
    "slug": "snorunt",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 37
  },
  {
    "abilities": [
      "Refrigerate"
    ],
    "featured": "true",
    "height": 83,
    "id": 362,
    "name": "Glalie",
    "number": "362",
    "slug": "glalie",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 772.1
  },
  {
    "abilities": [
      "Ice Body",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 31,
    "id": 363,
    "name": "Spheal",
    "number": "363",
    "slug": "spheal",
    "type": [
      "ice",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Rock"
    ],
    "weight": 87.1
  },
  {
    "abilities": [
      "Ice Body",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 43,
    "id": 364,
    "name": "Sealeo",
    "number": "364",
    "slug": "sealeo",
    "type": [
      "ice",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Rock"
    ],
    "weight": 193.1
  },
  {
    "abilities": [
      "Ice Body",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 55,
    "id": 365,
    "name": "Walrein",
    "number": "365",
    "slug": "walrein",
    "type": [
      "ice",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Rock"
    ],
    "weight": 332
  },
  {
    "abilities": [
      "Shell Armor"
    ],
    "featured": "true",
    "height": 16,
    "id": 366,
    "name": "Clamperl",
    "number": "366",
    "slug": "clamperl",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 115.7
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 67,
    "id": 367,
    "name": "Huntail",
    "number": "367",
    "slug": "huntail",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 59.5
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 71,
    "id": 368,
    "name": "Gorebyss",
    "number": "368",
    "slug": "gorebyss",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 49.8
  },
  {
    "abilities": [
      "Rock Head",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 39,
    "id": 369,
    "name": "Relicanth",
    "number": "369",
    "slug": "relicanth",
    "type": [
      "water",
      "rock"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 51.6
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 24,
    "id": 370,
    "name": "Luvdisc",
    "number": "370",
    "slug": "luvdisc",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 19.2
  },
  {
    "abilities": [
      "Rock Head"
    ],
    "featured": "true",
    "height": 24,
    "id": 371,
    "name": "Bagon",
    "number": "371",
    "slug": "bagon",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 92.8
  },
  {
    "abilities": [
      "Rock Head"
    ],
    "featured": "true",
    "height": 43,
    "id": 372,
    "name": "Shelgon",
    "number": "372",
    "slug": "shelgon",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 243.6
  },
  {
    "abilities": [
      "Aerilate"
    ],
    "featured": "true",
    "height": 71,
    "id": 373,
    "name": "Salamence",
    "number": "373",
    "slug": "salamence",
    "type": [
      "dragon",
      "flying"
    ],
    "weakness": [
      "Fairy",
      "Dragon",
      "Ice",
      "Rock"
    ],
    "weight": 248.2
  },
  {
    "abilities": [
      "Clear Body"
    ],
    "featured": "true",
    "height": 24,
    "id": 374,
    "name": "Beldum",
    "number": "374",
    "slug": "beldum",
    "type": [
      "steel",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Dark",
      "Ground"
    ],
    "weight": 209.9
  },
  {
    "abilities": [
      "Clear Body"
    ],
    "featured": "true",
    "height": 47,
    "id": 375,
    "name": "Metang",
    "number": "375",
    "slug": "metang",
    "type": [
      "steel",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Dark",
      "Ground"
    ],
    "weight": 446.4
  },
  {
    "abilities": [
      "Tough Claws"
    ],
    "featured": "true",
    "height": 98,
    "id": 376,
    "name": "Metagross",
    "number": "376",
    "slug": "metagross",
    "type": [
      "steel",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Dark",
      "Ground"
    ],
    "weight": 2078.7
  },
  {
    "abilities": [
      "Clear Body"
    ],
    "featured": "true",
    "height": 67,
    "id": 377,
    "name": "Regirock",
    "number": "377",
    "slug": "regirock",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 507.1
  },
  {
    "abilities": [
      "Clear Body"
    ],
    "featured": "true",
    "height": 71,
    "id": 378,
    "name": "Regice",
    "number": "378",
    "slug": "regice",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 385.8
  },
  {
    "abilities": [
      "Clear Body"
    ],
    "featured": "true",
    "height": 75,
    "id": 379,
    "name": "Registeel",
    "number": "379",
    "slug": "registeel",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 451.9
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 71,
    "id": 380,
    "name": "Latias",
    "number": "380",
    "slug": "latias",
    "type": [
      "dragon",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Ice",
      "Dragon",
      "Dark",
      "Fairy",
      "Bug"
    ],
    "weight": 114.6
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 91,
    "id": 381,
    "name": "Latios",
    "number": "381",
    "slug": "latios",
    "type": [
      "dragon",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Ice",
      "Dragon",
      "Dark",
      "Fairy",
      "Bug"
    ],
    "weight": 154.3
  },
  {
    "abilities": [
      "Primordial Sea"
    ],
    "featured": "true",
    "height": 386,
    "id": 382,
    "name": "Kyogre",
    "number": "382",
    "slug": "kyogre",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 948
  },
  {
    "abilities": [
      "Desolate Land"
    ],
    "featured": "true",
    "height": 197,
    "id": 383,
    "name": "Groudon",
    "number": "383",
    "slug": "groudon",
    "type": [
      "ground",
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground"
    ],
    "weight": 2204
  },
  {
    "abilities": [
      "Delta Stream"
    ],
    "featured": "true",
    "height": 425,
    "id": 384,
    "name": "Rayquaza",
    "number": "384",
    "slug": "rayquaza",
    "type": [
      "dragon",
      "flying"
    ],
    "weakness": [
      "Fairy",
      "Dragon",
      "Ice",
      "Rock"
    ],
    "weight": 864.2
  },
  {
    "abilities": [
      "Serene Grace"
    ],
    "featured": "true",
    "height": 12,
    "id": 385,
    "name": "Jirachi",
    "number": "385",
    "slug": "jirachi",
    "type": [
      "steel",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Dark",
      "Ground"
    ],
    "weight": 2.4
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 67,
    "id": 386,
    "name": "Deoxys",
    "number": "386",
    "slug": "deoxys",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 134
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 16,
    "id": 387,
    "name": "Turtwig",
    "number": "387",
    "slug": "turtwig",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 22.5
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 43,
    "id": 388,
    "name": "Grotle",
    "number": "388",
    "slug": "grotle",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 213.8
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 87,
    "id": 389,
    "name": "Torterra",
    "number": "389",
    "slug": "torterra",
    "type": [
      "grass",
      "ground"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Bug",
      "Ice"
    ],
    "weight": 683.4
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 20,
    "id": 390,
    "name": "Chimchar",
    "number": "390",
    "slug": "chimchar",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 13.7
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 35,
    "id": 391,
    "name": "Monferno",
    "number": "391",
    "slug": "monferno",
    "type": [
      "fire",
      "fighting"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Flying",
      "Ground"
    ],
    "weight": 48.5
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 47,
    "id": 392,
    "name": "Infernape",
    "number": "392",
    "slug": "infernape",
    "type": [
      "fire",
      "fighting"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Flying",
      "Ground"
    ],
    "weight": 121.3
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 16,
    "id": 393,
    "name": "Piplup",
    "number": "393",
    "slug": "piplup",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 11.5
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 31,
    "id": 394,
    "name": "Prinplup",
    "number": "394",
    "slug": "prinplup",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 50.7
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 67,
    "id": 395,
    "name": "Empoleon",
    "number": "395",
    "slug": "empoleon",
    "type": [
      "water",
      "steel"
    ],
    "weakness": [
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 186.3
  },
  {
    "abilities": [
      "Keen Eye"
    ],
    "featured": "true",
    "height": 12,
    "id": 396,
    "name": "Starly",
    "number": "396",
    "slug": "starly",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4.4
  },
  {
    "abilities": [
      "Intimidate"
    ],
    "featured": "true",
    "height": 24,
    "id": 397,
    "name": "Staravia",
    "number": "397",
    "slug": "staravia",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 34.2
  },
  {
    "abilities": [
      "Intimidate"
    ],
    "featured": "true",
    "height": 47,
    "id": 398,
    "name": "Staraptor",
    "number": "398",
    "slug": "staraptor",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 54.9
  },
  {
    "abilities": [
      "Simple",
      "Unaware"
    ],
    "featured": "true",
    "height": 20,
    "id": 399,
    "name": "Bidoof",
    "number": "399",
    "slug": "bidoof",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 44.1
  },
  {
    "abilities": [
      "Simple",
      "Unaware"
    ],
    "featured": "true",
    "height": 39,
    "id": 400,
    "name": "Bibarel",
    "number": "400",
    "slug": "bibarel",
    "type": [
      "normal",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting"
    ],
    "weight": 69.4
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 12,
    "id": 401,
    "name": "Kricketot",
    "number": "401",
    "slug": "kricketot",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 4.9
  },
  {
    "abilities": [
      "Swarm"
    ],
    "featured": "true",
    "height": 39,
    "id": 402,
    "name": "Kricketune",
    "number": "402",
    "slug": "kricketune",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 56.2
  },
  {
    "abilities": [
      "Intimidate",
      "Rivalry"
    ],
    "featured": "true",
    "height": 20,
    "id": 403,
    "name": "Shinx",
    "number": "403",
    "slug": "shinx",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 20.9
  },
  {
    "abilities": [
      "Intimidate",
      "Rivalry"
    ],
    "featured": "true",
    "height": 35,
    "id": 404,
    "name": "Luxio",
    "number": "404",
    "slug": "luxio",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 67.2
  },
  {
    "abilities": [
      "Intimidate",
      "Rivalry"
    ],
    "featured": "true",
    "height": 55,
    "id": 405,
    "name": "Luxray",
    "number": "405",
    "slug": "luxray",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 92.6
  },
  {
    "abilities": [
      "Natural Cure",
      "Poison Point"
    ],
    "featured": "true",
    "height": 8,
    "id": 406,
    "name": "Budew",
    "number": "406",
    "slug": "budew",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 2.6
  },
  {
    "abilities": [
      "Natural Cure",
      "Poison Point"
    ],
    "featured": "true",
    "height": 35,
    "id": 407,
    "name": "Roserade",
    "number": "407",
    "slug": "roserade",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 32
  },
  {
    "abilities": [
      "Mold Breaker"
    ],
    "featured": "true",
    "height": 35,
    "id": 408,
    "name": "Cranidos",
    "number": "408",
    "slug": "cranidos",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 69.4
  },
  {
    "abilities": [
      "Mold Breaker"
    ],
    "featured": "true",
    "height": 63,
    "id": 409,
    "name": "Rampardos",
    "number": "409",
    "slug": "rampardos",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 226
  },
  {
    "abilities": [
      "Sturdy"
    ],
    "featured": "true",
    "height": 20,
    "id": 410,
    "name": "Shieldon",
    "number": "410",
    "slug": "shieldon",
    "type": [
      "rock",
      "steel"
    ],
    "weakness": [
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 125.7
  },
  {
    "abilities": [
      "Sturdy"
    ],
    "featured": "true",
    "height": 51,
    "id": 411,
    "name": "Bastiodon",
    "number": "411",
    "slug": "bastiodon",
    "type": [
      "rock",
      "steel"
    ],
    "weakness": [
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 329.6
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 8,
    "id": 412,
    "name": "Burmy",
    "number": "412",
    "slug": "burmy",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 7.5
  },
  {
    "abilities": [
      "Anticipation"
    ],
    "featured": "true",
    "height": 20,
    "id": 413,
    "name": "Wormadam",
    "number": "413",
    "slug": "wormadam",
    "type": [
      "bug",
      "steel"
    ],
    "weakness": [
      "Fire"
    ],
    "weight": 14.3
  },
  {
    "abilities": [
      "Swarm"
    ],
    "featured": "true",
    "height": 35,
    "id": 414,
    "name": "Mothim",
    "number": "414",
    "slug": "mothim",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 51.4
  },
  {
    "abilities": [
      "Honey Gather"
    ],
    "featured": "true",
    "height": 12,
    "id": 415,
    "name": "Combee",
    "number": "415",
    "slug": "combee",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 12.1
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 47,
    "id": 416,
    "name": "Vespiquen",
    "number": "416",
    "slug": "vespiquen",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 84.9
  },
  {
    "abilities": [
      "Pickup",
      "Run Away"
    ],
    "featured": "true",
    "height": 16,
    "id": 417,
    "name": "Pachirisu",
    "number": "417",
    "slug": "pachirisu",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 8.6
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 28,
    "id": 418,
    "name": "Buizel",
    "number": "418",
    "slug": "buizel",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 65
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 43,
    "id": 419,
    "name": "Floatzel",
    "number": "419",
    "slug": "floatzel",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 73.9
  },
  {
    "abilities": [
      "Chlorophyll"
    ],
    "featured": "true",
    "height": 16,
    "id": 420,
    "name": "Cherubi",
    "number": "420",
    "slug": "cherubi",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 7.3
  },
  {
    "abilities": [
      "Flower Gift"
    ],
    "featured": "true",
    "height": 20,
    "id": 421,
    "name": "Cherrim",
    "number": "421",
    "slug": "cherrim",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 20.5
  },
  {
    "abilities": [
      "Sticky Hold",
      "Storm Drain"
    ],
    "featured": "true",
    "height": 12,
    "id": 422,
    "name": "Shellos",
    "number": "422",
    "slug": "shellos",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 13.9
  },
  {
    "abilities": [
      "Sticky Hold",
      "Storm Drain"
    ],
    "featured": "true",
    "height": 35,
    "id": 423,
    "name": "Gastrodon",
    "number": "423",
    "slug": "gastrodon",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 65.9
  },
  {
    "abilities": [
      "Pickup",
      "Technician"
    ],
    "featured": "true",
    "height": 47,
    "id": 424,
    "name": "Ambipom",
    "number": "424",
    "slug": "ambipom",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 44.8
  },
  {
    "abilities": [
      "Aftermath",
      "Unburden"
    ],
    "featured": "true",
    "height": 16,
    "id": 425,
    "name": "Drifloon",
    "number": "425",
    "slug": "drifloon",
    "type": [
      "ghost",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 2.6
  },
  {
    "abilities": [
      "Aftermath",
      "Unburden"
    ],
    "featured": "true",
    "height": 47,
    "id": 426,
    "name": "Drifblim",
    "number": "426",
    "slug": "drifblim",
    "type": [
      "ghost",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 33.1
  },
  {
    "abilities": [
      "Klutz",
      "Run Away"
    ],
    "featured": "true",
    "height": 16,
    "id": 427,
    "name": "Buneary",
    "number": "427",
    "slug": "buneary",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 12.1
  },
  {
    "abilities": [
      "Scrappy"
    ],
    "featured": "true",
    "height": 51,
    "id": 428,
    "name": "Lopunny",
    "number": "428",
    "slug": "lopunny",
    "type": [
      "normal",
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy",
      "Fighting"
    ],
    "weight": 62.4
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 35,
    "id": 429,
    "name": "Mismagius",
    "number": "429",
    "slug": "mismagius",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 9.7
  },
  {
    "abilities": [
      "Insomnia",
      "Super Luck"
    ],
    "featured": "true",
    "height": 35,
    "id": 430,
    "name": "Honchkrow",
    "number": "430",
    "slug": "honchkrow",
    "type": [
      "dark",
      "flying"
    ],
    "weakness": [
      "Fairy",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 60.2
  },
  {
    "abilities": [
      "Limber",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 20,
    "id": 431,
    "name": "Glameow",
    "number": "431",
    "slug": "glameow",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 8.6
  },
  {
    "abilities": [
      "Own Tempo",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 39,
    "id": 432,
    "name": "Purugly",
    "number": "432",
    "slug": "purugly",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 96.6
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 8,
    "id": 433,
    "name": "Chingling",
    "number": "433",
    "slug": "chingling",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 1.3
  },
  {
    "abilities": [
      "Aftermath",
      "Stench"
    ],
    "featured": "true",
    "height": 16,
    "id": 434,
    "name": "Stunky",
    "number": "434",
    "slug": "stunky",
    "type": [
      "poison",
      "dark"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 42.3
  },
  {
    "abilities": [
      "Aftermath",
      "Stench"
    ],
    "featured": "true",
    "height": 39,
    "id": 435,
    "name": "Skuntank",
    "number": "435",
    "slug": "skuntank",
    "type": [
      "poison",
      "dark"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 83.8
  },
  {
    "abilities": [
      "Heatproof",
      "Levitate"
    ],
    "featured": "true",
    "height": 20,
    "id": 436,
    "name": "Bronzor",
    "number": "436",
    "slug": "bronzor",
    "type": [
      "steel",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Dark",
      "Ground"
    ],
    "weight": 133.4
  },
  {
    "abilities": [
      "Heatproof",
      "Levitate"
    ],
    "featured": "true",
    "height": 51,
    "id": 437,
    "name": "Bronzong",
    "number": "437",
    "slug": "bronzong",
    "type": [
      "steel",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Dark",
      "Ground"
    ],
    "weight": 412.3
  },
  {
    "abilities": [
      "Rock Head",
      "Sturdy"
    ],
    "featured": "true",
    "height": 20,
    "id": 438,
    "name": "Bonsly",
    "number": "438",
    "slug": "bonsly",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 33.1
  },
  {
    "abilities": [
      "Filter",
      "Soundproof"
    ],
    "featured": "true",
    "height": 24,
    "id": 439,
    "name": "Mime Jr.",
    "number": "439",
    "slug": "mime-jr",
    "type": [
      "psychic",
      "fairy"
    ],
    "weakness": [
      "Ghost",
      "Steel",
      "Poison"
    ],
    "weight": 28.7
  },
  {
    "abilities": [
      "Natural Cure",
      "Serene Grace"
    ],
    "featured": "true",
    "height": 24,
    "id": 440,
    "name": "Happiny",
    "number": "440",
    "slug": "happiny",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 53.8
  },
  {
    "abilities": [
      "Keen Eye",
      "Tangled Feet"
    ],
    "featured": "true",
    "height": 20,
    "id": 441,
    "name": "Chatot",
    "number": "441",
    "slug": "chatot",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4.2
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 39,
    "id": 442,
    "name": "Spiritomb",
    "number": "442",
    "slug": "spiritomb",
    "type": [
      "ghost",
      "dark"
    ],
    "weakness": [
      "Fairy"
    ],
    "weight": 238.1
  },
  {
    "abilities": [
      "Sand Veil"
    ],
    "featured": "true",
    "height": 28,
    "id": 443,
    "name": "Gible",
    "number": "443",
    "slug": "gible",
    "type": [
      "dragon",
      "ground"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 45.2
  },
  {
    "abilities": [
      "Sand Veil"
    ],
    "featured": "true",
    "height": 55,
    "id": 444,
    "name": "Gabite",
    "number": "444",
    "slug": "gabite",
    "type": [
      "dragon",
      "ground"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 123.5
  },
  {
    "abilities": [
      "Sand Force"
    ],
    "featured": "true",
    "height": 75,
    "id": 445,
    "name": "Garchomp",
    "number": "445",
    "slug": "garchomp",
    "type": [
      "dragon",
      "ground"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 209.4
  },
  {
    "abilities": [
      "Pickup",
      "Thick Fat"
    ],
    "featured": "true",
    "height": 24,
    "id": 446,
    "name": "Munchlax",
    "number": "446",
    "slug": "munchlax",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 231.5
  },
  {
    "abilities": [
      "Inner Focus",
      "Steadfast"
    ],
    "featured": "true",
    "height": 28,
    "id": 447,
    "name": "Riolu",
    "number": "447",
    "slug": "riolu",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 44.5
  },
  {
    "abilities": [
      "Adaptability"
    ],
    "featured": "true",
    "height": 51,
    "id": 448,
    "name": "Lucario",
    "number": "448",
    "slug": "lucario",
    "type": [
      "fighting",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 126.8
  },
  {
    "abilities": [
      "Sand Stream"
    ],
    "featured": "true",
    "height": 31,
    "id": 449,
    "name": "Hippopotas",
    "number": "449",
    "slug": "hippopotas",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 109.1
  },
  {
    "abilities": [
      "Sand Stream"
    ],
    "featured": "true",
    "height": 79,
    "id": 450,
    "name": "Hippowdon",
    "number": "450",
    "slug": "hippowdon",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 661.4
  },
  {
    "abilities": [
      "Battle Armor",
      "Sniper"
    ],
    "featured": "true",
    "height": 31,
    "id": 451,
    "name": "Skorupi",
    "number": "451",
    "slug": "skorupi",
    "type": [
      "poison",
      "bug"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 26.5
  },
  {
    "abilities": [
      "Battle Armor",
      "Sniper"
    ],
    "featured": "true",
    "height": 51,
    "id": 452,
    "name": "Drapion",
    "number": "452",
    "slug": "drapion",
    "type": [
      "poison",
      "dark"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 135.6
  },
  {
    "abilities": [
      "Anticipation",
      "Dry Skin"
    ],
    "featured": "true",
    "height": 28,
    "id": 453,
    "name": "Croagunk",
    "number": "453",
    "slug": "croagunk",
    "type": [
      "poison",
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Ground"
    ],
    "weight": 50.7
  },
  {
    "abilities": [
      "Anticipation",
      "Dry Skin"
    ],
    "featured": "true",
    "height": 51,
    "id": 454,
    "name": "Toxicroak",
    "number": "454",
    "slug": "toxicroak",
    "type": [
      "poison",
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Ground"
    ],
    "weight": 97.9
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 55,
    "id": 455,
    "name": "Carnivine",
    "number": "455",
    "slug": "carnivine",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 59.5
  },
  {
    "abilities": [
      "Storm Drain",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 16,
    "id": 456,
    "name": "Finneon",
    "number": "456",
    "slug": "finneon",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 15.4
  },
  {
    "abilities": [
      "Storm Drain",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 47,
    "id": 457,
    "name": "Lumineon",
    "number": "457",
    "slug": "lumineon",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 52.9
  },
  {
    "abilities": [
      "Swift Swim",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 39,
    "id": 458,
    "name": "Mantyke",
    "number": "458",
    "slug": "mantyke",
    "type": [
      "water",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Rock"
    ],
    "weight": 143.3
  },
  {
    "abilities": [
      "Snow Warning"
    ],
    "featured": "true",
    "height": 39,
    "id": 459,
    "name": "Snover",
    "number": "459",
    "slug": "snover",
    "type": [
      "grass",
      "ice"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Flying",
      "Poison",
      "Fighting",
      "Rock",
      "Bug"
    ],
    "weight": 111.3
  },
  {
    "abilities": [
      "Snow Warning"
    ],
    "featured": "true",
    "height": 106,
    "id": 460,
    "name": "Abomasnow",
    "number": "460",
    "slug": "abomasnow",
    "type": [
      "grass",
      "ice"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Flying",
      "Poison",
      "Fighting",
      "Rock",
      "Bug"
    ],
    "weight": 407.9
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 43,
    "id": 461,
    "name": "Weavile",
    "number": "461",
    "slug": "weavile",
    "type": [
      "dark",
      "ice"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Fighting",
      "Rock",
      "Fairy",
      "Bug"
    ],
    "weight": 75
  },
  {
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "featured": "true",
    "height": 47,
    "id": 462,
    "name": "Magnezone",
    "number": "462",
    "slug": "magnezone",
    "type": [
      "electric",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 396.8
  },
  {
    "abilities": [
      "Oblivious",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 67,
    "id": 463,
    "name": "Lickilicky",
    "number": "463",
    "slug": "lickilicky",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 308.6
  },
  {
    "abilities": [
      "Lightning Rod",
      "Solid Rock"
    ],
    "featured": "true",
    "height": 94,
    "id": 464,
    "name": "Rhyperior",
    "number": "464",
    "slug": "rhyperior",
    "type": [
      "ground",
      "rock"
    ],
    "weakness": [
      "Steel",
      "Ice",
      "Water",
      "Fighting",
      "Grass",
      "Ground"
    ],
    "weight": 623.5
  },
  {
    "abilities": [
      "Chlorophyll",
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 79,
    "id": 465,
    "name": "Tangrowth",
    "number": "465",
    "slug": "tangrowth",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 283.5
  },
  {
    "abilities": [
      "Motor Drive"
    ],
    "featured": "true",
    "height": 71,
    "id": 466,
    "name": "Electivire",
    "number": "466",
    "slug": "electivire",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 305.6
  },
  {
    "abilities": [
      "Flame Body"
    ],
    "featured": "true",
    "height": 63,
    "id": 467,
    "name": "Magmortar",
    "number": "467",
    "slug": "magmortar",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 149.9
  },
  {
    "abilities": [
      "Hustle",
      "Serene Grace"
    ],
    "featured": "true",
    "height": 59,
    "id": 468,
    "name": "Togekiss",
    "number": "468",
    "slug": "togekiss",
    "type": [
      "fairy",
      "flying"
    ],
    "weakness": [
      "Steel",
      "Poison",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 83.8
  },
  {
    "abilities": [
      "Speed Boost",
      "Tinted Lens"
    ],
    "featured": "true",
    "height": 75,
    "id": 469,
    "name": "Yanmega",
    "number": "469",
    "slug": "yanmega",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 113.5
  },
  {
    "abilities": [
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 39,
    "id": 470,
    "name": "Leafeon",
    "number": "470",
    "slug": "leafeon",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 56.2
  },
  {
    "abilities": [
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 31,
    "id": 471,
    "name": "Glaceon",
    "number": "471",
    "slug": "glaceon",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 57.1
  },
  {
    "abilities": [
      "Hyper Cutter",
      "Sand Veil"
    ],
    "featured": "true",
    "height": 79,
    "id": 472,
    "name": "Gliscor",
    "number": "472",
    "slug": "gliscor",
    "type": [
      "ground",
      "flying"
    ],
    "weakness": [
      "Water",
      "Ice"
    ],
    "weight": 93.7
  },
  {
    "abilities": [
      "Oblivious",
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 98,
    "id": 473,
    "name": "Mamoswine",
    "number": "473",
    "slug": "mamoswine",
    "type": [
      "ice",
      "ground"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Grass",
      "Water",
      "Fighting"
    ],
    "weight": 641.5
  },
  {
    "abilities": [
      "Adaptability",
      "Download"
    ],
    "featured": "true",
    "height": 35,
    "id": 474,
    "name": "Porygon-Z",
    "number": "474",
    "slug": "porygon-z",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 75
  },
  {
    "abilities": [
      "Inner Focus"
    ],
    "featured": "true",
    "height": 63,
    "id": 475,
    "name": "Gallade",
    "number": "475",
    "slug": "gallade",
    "type": [
      "psychic",
      "fighting"
    ],
    "weakness": [
      "Ghost",
      "Fairy",
      "Flying"
    ],
    "weight": 124.3
  },
  {
    "abilities": [
      "Magnet Pull",
      "Sturdy"
    ],
    "featured": "true",
    "height": 55,
    "id": 476,
    "name": "Probopass",
    "number": "476",
    "slug": "probopass",
    "type": [
      "rock",
      "steel"
    ],
    "weakness": [
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 749.6
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 87,
    "id": 477,
    "name": "Dusknoir",
    "number": "477",
    "slug": "dusknoir",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 235
  },
  {
    "abilities": [
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 51,
    "id": 478,
    "name": "Froslass",
    "number": "478",
    "slug": "froslass",
    "type": [
      "ice",
      "ghost"
    ],
    "weakness": [
      "Steel",
      "Ghost",
      "Fire",
      "Dark",
      "Rock"
    ],
    "weight": 58.6
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 12,
    "id": 479,
    "name": "Rotom",
    "number": "479",
    "slug": "rotom",
    "type": [
      "electric",
      "grass"
    ],
    "weakness": [
      "Fire",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 0.7
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 12,
    "id": 480,
    "name": "Uxie",
    "number": "480",
    "slug": "uxie",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 0.7
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 12,
    "id": 481,
    "name": "Mesprit",
    "number": "481",
    "slug": "mesprit",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 0.7
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 12,
    "id": 482,
    "name": "Azelf",
    "number": "482",
    "slug": "azelf",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 0.7
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 213,
    "id": 483,
    "name": "Dialga",
    "number": "483",
    "slug": "dialga",
    "type": [
      "steel",
      "dragon"
    ],
    "weakness": [
      "Fighting",
      "Ground"
    ],
    "weight": 1505.8
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 165,
    "id": 484,
    "name": "Palkia",
    "number": "484",
    "slug": "palkia",
    "type": [
      "water",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Dragon"
    ],
    "weight": 740.8
  },
  {
    "abilities": [
      "Flash Fire"
    ],
    "featured": "true",
    "height": 67,
    "id": 485,
    "name": "Heatran",
    "number": "485",
    "slug": "heatran",
    "type": [
      "fire",
      "steel"
    ],
    "weakness": [
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 948
  },
  {
    "abilities": [
      "Slow Start"
    ],
    "featured": "true",
    "height": 146,
    "id": 486,
    "name": "Regigigas",
    "number": "486",
    "slug": "regigigas",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 925.9
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 272,
    "id": 487,
    "name": "Giratina",
    "number": "487",
    "slug": "giratina",
    "type": [
      "ghost",
      "dragon"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 1433
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 59,
    "id": 488,
    "name": "Cresselia",
    "number": "488",
    "slug": "cresselia",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 188.7
  },
  {
    "abilities": [
      "Hydration"
    ],
    "featured": "true",
    "height": 16,
    "id": 489,
    "name": "Phione",
    "number": "489",
    "slug": "phione",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 6.8
  },
  {
    "abilities": [
      "Hydration"
    ],
    "featured": "true",
    "height": 12,
    "id": 490,
    "name": "Manaphy",
    "number": "490",
    "slug": "manaphy",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 3.1
  },
  {
    "abilities": [
      "Bad Dreams"
    ],
    "featured": "true",
    "height": 59,
    "id": 491,
    "name": "Darkrai",
    "number": "491",
    "slug": "darkrai",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 111.3
  },
  {
    "abilities": [
      "Serene Grace"
    ],
    "featured": "true",
    "height": 16,
    "id": 492,
    "name": "Shaymin",
    "number": "492",
    "slug": "shaymin",
    "type": [
      "grass",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock"
    ],
    "weight": 11.5
  },
  {
    "abilities": [
      "Multitype"
    ],
    "featured": "true",
    "height": 126,
    "id": 493,
    "name": "Arceus",
    "number": "493",
    "slug": "arceus",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 705.5
  },
  {
    "abilities": [
      "Victory Star"
    ],
    "featured": "true",
    "height": 16,
    "id": 494,
    "name": "Victini",
    "number": "494",
    "slug": "victini",
    "type": [
      "psychic",
      "fire"
    ],
    "weakness": [
      "Ghost",
      "Water",
      "Ground",
      "Dark",
      "Rock"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 24,
    "id": 495,
    "name": "Snivy",
    "number": "495",
    "slug": "snivy",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 17.9
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 31,
    "id": 496,
    "name": "Servine",
    "number": "496",
    "slug": "servine",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 35.3
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 130,
    "id": 497,
    "name": "Serperior",
    "number": "497",
    "slug": "serperior",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 138.9
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 20,
    "id": 498,
    "name": "Tepig",
    "number": "498",
    "slug": "tepig",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 21.8
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 39,
    "id": 499,
    "name": "Pignite",
    "number": "499",
    "slug": "pignite",
    "type": [
      "fire",
      "fighting"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Flying",
      "Ground"
    ],
    "weight": 122.4
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 63,
    "id": 500,
    "name": "Emboar",
    "number": "500",
    "slug": "emboar",
    "type": [
      "fire",
      "fighting"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Flying",
      "Ground"
    ],
    "weight": 330.7
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 20,
    "id": 501,
    "name": "Oshawott",
    "number": "501",
    "slug": "oshawott",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 13
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 31,
    "id": 502,
    "name": "Dewott",
    "number": "502",
    "slug": "dewott",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 54
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 59,
    "id": 503,
    "name": "Samurott",
    "number": "503",
    "slug": "samurott",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 208.6
  },
  {
    "abilities": [
      "Keen Eye",
      "Run Away"
    ],
    "featured": "true",
    "height": 20,
    "id": 504,
    "name": "Patrat",
    "number": "504",
    "slug": "patrat",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 25.6
  },
  {
    "abilities": [
      "Illuminate",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 43,
    "id": 505,
    "name": "Watchog",
    "number": "505",
    "slug": "watchog",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 59.5
  },
  {
    "abilities": [
      "Pickup",
      "Vital Spirit"
    ],
    "featured": "true",
    "height": 16,
    "id": 506,
    "name": "Lillipup",
    "number": "506",
    "slug": "lillipup",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 9
  },
  {
    "abilities": [
      "Intimidate",
      "Sand Rush"
    ],
    "featured": "true",
    "height": 35,
    "id": 507,
    "name": "Herdier",
    "number": "507",
    "slug": "herdier",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 32.4
  },
  {
    "abilities": [
      "Intimidate",
      "Sand Rush"
    ],
    "featured": "true",
    "height": 47,
    "id": 508,
    "name": "Stoutland",
    "number": "508",
    "slug": "stoutland",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 134.5
  },
  {
    "abilities": [
      "Limber",
      "Unburden"
    ],
    "featured": "true",
    "height": 16,
    "id": 509,
    "name": "Purrloin",
    "number": "509",
    "slug": "purrloin",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 22.3
  },
  {
    "abilities": [
      "Limber",
      "Unburden"
    ],
    "featured": "true",
    "height": 43,
    "id": 510,
    "name": "Liepard",
    "number": "510",
    "slug": "liepard",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 82.7
  },
  {
    "abilities": [
      "Gluttony"
    ],
    "featured": "true",
    "height": 24,
    "id": 511,
    "name": "Pansage",
    "number": "511",
    "slug": "pansage",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 23.1
  },
  {
    "abilities": [
      "Gluttony"
    ],
    "featured": "true",
    "height": 43,
    "id": 512,
    "name": "Simisage",
    "number": "512",
    "slug": "simisage",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 67.2
  },
  {
    "abilities": [
      "Gluttony"
    ],
    "featured": "true",
    "height": 24,
    "id": 513,
    "name": "Pansear",
    "number": "513",
    "slug": "pansear",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 24.3
  },
  {
    "abilities": [
      "Gluttony"
    ],
    "featured": "true",
    "height": 39,
    "id": 514,
    "name": "Simisear",
    "number": "514",
    "slug": "simisear",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Gluttony"
    ],
    "featured": "true",
    "height": 24,
    "id": 515,
    "name": "Panpour",
    "number": "515",
    "slug": "panpour",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 29.8
  },
  {
    "abilities": [
      "Gluttony"
    ],
    "featured": "true",
    "height": 39,
    "id": 516,
    "name": "Simipour",
    "number": "516",
    "slug": "simipour",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 63.9
  },
  {
    "abilities": [
      "Forewarn",
      "Synchronize"
    ],
    "featured": "true",
    "height": 24,
    "id": 517,
    "name": "Munna",
    "number": "517",
    "slug": "munna",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 51.4
  },
  {
    "abilities": [
      "Forewarn",
      "Synchronize"
    ],
    "featured": "true",
    "height": 43,
    "id": 518,
    "name": "Musharna",
    "number": "518",
    "slug": "musharna",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 133.4
  },
  {
    "abilities": [
      "Big Pecks",
      "Super Luck"
    ],
    "featured": "true",
    "height": 12,
    "id": 519,
    "name": "Pidove",
    "number": "519",
    "slug": "pidove",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4.6
  },
  {
    "abilities": [
      "Big Pecks",
      "Super Luck"
    ],
    "featured": "true",
    "height": 24,
    "id": 520,
    "name": "Tranquill",
    "number": "520",
    "slug": "tranquill",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 33.1
  },
  {
    "abilities": [
      "Big Pecks",
      "Super Luck"
    ],
    "featured": "true",
    "height": 47,
    "id": 521,
    "name": "Unfezant",
    "number": "521",
    "slug": "unfezant",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 63.9
  },
  {
    "abilities": [
      "Lightning Rod",
      "Motor Drive"
    ],
    "featured": "true",
    "height": 31,
    "id": 522,
    "name": "Blitzle",
    "number": "522",
    "slug": "blitzle",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 65.7
  },
  {
    "abilities": [
      "Lightning Rod",
      "Motor Drive"
    ],
    "featured": "true",
    "height": 63,
    "id": 523,
    "name": "Zebstrika",
    "number": "523",
    "slug": "zebstrika",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 175.3
  },
  {
    "abilities": [
      "Sturdy",
      "Weak Armor"
    ],
    "featured": "true",
    "height": 16,
    "id": 524,
    "name": "Roggenrola",
    "number": "524",
    "slug": "roggenrola",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 39.7
  },
  {
    "abilities": [
      "Sturdy",
      "Weak Armor"
    ],
    "featured": "true",
    "height": 35,
    "id": 525,
    "name": "Boldore",
    "number": "525",
    "slug": "boldore",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 224.9
  },
  {
    "abilities": [
      "Sand Stream",
      "Sturdy"
    ],
    "featured": "true",
    "height": 67,
    "id": 526,
    "name": "Gigalith",
    "number": "526",
    "slug": "gigalith",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 573.2
  },
  {
    "abilities": [
      "Klutz",
      "Unaware"
    ],
    "featured": "true",
    "height": 16,
    "id": 527,
    "name": "Woobat",
    "number": "527",
    "slug": "woobat",
    "type": [
      "psychic",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4.6
  },
  {
    "abilities": [
      "Klutz",
      "Unaware"
    ],
    "featured": "true",
    "height": 35,
    "id": 528,
    "name": "Swoobat",
    "number": "528",
    "slug": "swoobat",
    "type": [
      "psychic",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 23.1
  },
  {
    "abilities": [
      "Sand Force",
      "Sand Rush"
    ],
    "featured": "true",
    "height": 12,
    "id": 529,
    "name": "Drilbur",
    "number": "529",
    "slug": "drilbur",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "Sand Force",
      "Sand Rush"
    ],
    "featured": "true",
    "height": 28,
    "id": 530,
    "name": "Excadrill",
    "number": "530",
    "slug": "excadrill",
    "type": [
      "ground",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 89.1
  },
  {
    "abilities": [
      "Healer"
    ],
    "featured": "true",
    "height": 59,
    "id": 531,
    "name": "Audino",
    "number": "531",
    "slug": "audino",
    "type": [
      "normal",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 70.5
  },
  {
    "abilities": [
      "Guts",
      "Sheer Force"
    ],
    "featured": "true",
    "height": 24,
    "id": 532,
    "name": "Timburr",
    "number": "532",
    "slug": "timburr",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 27.6
  },
  {
    "abilities": [
      "Guts",
      "Sheer Force"
    ],
    "featured": "true",
    "height": 47,
    "id": 533,
    "name": "Gurdurr",
    "number": "533",
    "slug": "gurdurr",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 88.2
  },
  {
    "abilities": [
      "Guts",
      "Sheer Force"
    ],
    "featured": "true",
    "height": 55,
    "id": 534,
    "name": "Conkeldurr",
    "number": "534",
    "slug": "conkeldurr",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 191.8
  },
  {
    "abilities": [
      "Hydration",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 20,
    "id": 535,
    "name": "Tympole",
    "number": "535",
    "slug": "tympole",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 9.9
  },
  {
    "abilities": [
      "Hydration",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 31,
    "id": 536,
    "name": "Palpitoad",
    "number": "536",
    "slug": "palpitoad",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 37.5
  },
  {
    "abilities": [
      "Poison Touch",
      "Swift Swim"
    ],
    "featured": "true",
    "height": 59,
    "id": 537,
    "name": "Seismitoad",
    "number": "537",
    "slug": "seismitoad",
    "type": [
      "water",
      "ground"
    ],
    "weakness": [
      "Grass"
    ],
    "weight": 136.7
  },
  {
    "abilities": [
      "Guts",
      "Inner Focus"
    ],
    "featured": "true",
    "height": 51,
    "id": 538,
    "name": "Throh",
    "number": "538",
    "slug": "throh",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 122.4
  },
  {
    "abilities": [
      "Inner Focus",
      "Sturdy"
    ],
    "featured": "true",
    "height": 55,
    "id": 539,
    "name": "Sawk",
    "number": "539",
    "slug": "sawk",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 112.4
  },
  {
    "abilities": [
      "Chlorophyll",
      "Swarm"
    ],
    "featured": "true",
    "height": 12,
    "id": 540,
    "name": "Sewaddle",
    "number": "540",
    "slug": "sewaddle",
    "type": [
      "bug",
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock",
      "Bug"
    ],
    "weight": 5.5
  },
  {
    "abilities": [
      "Chlorophyll",
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 20,
    "id": 541,
    "name": "Swadloon",
    "number": "541",
    "slug": "swadloon",
    "type": [
      "bug",
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock",
      "Bug"
    ],
    "weight": 16.1
  },
  {
    "abilities": [
      "Chlorophyll",
      "Swarm"
    ],
    "featured": "true",
    "height": 47,
    "id": 542,
    "name": "Leavanny",
    "number": "542",
    "slug": "leavanny",
    "type": [
      "bug",
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock",
      "Bug"
    ],
    "weight": 45.2
  },
  {
    "abilities": [
      "Poison Point",
      "Swarm"
    ],
    "featured": "true",
    "height": 16,
    "id": 543,
    "name": "Venipede",
    "number": "543",
    "slug": "venipede",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 11.7
  },
  {
    "abilities": [
      "Poison Point",
      "Swarm"
    ],
    "featured": "true",
    "height": 47,
    "id": 544,
    "name": "Whirlipede",
    "number": "544",
    "slug": "whirlipede",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 129
  },
  {
    "abilities": [
      "Poison Point",
      "Swarm"
    ],
    "featured": "true",
    "height": 98,
    "id": 545,
    "name": "Scolipede",
    "number": "545",
    "slug": "scolipede",
    "type": [
      "bug",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Rock"
    ],
    "weight": 442
  },
  {
    "abilities": [
      "Infiltrator",
      "Prankster"
    ],
    "featured": "true",
    "height": 12,
    "id": 546,
    "name": "Cottonee",
    "number": "546",
    "slug": "cottonee",
    "type": [
      "grass",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Flying",
      "Ice",
      "Poison"
    ],
    "weight": 1.3
  },
  {
    "abilities": [
      "Infiltrator",
      "Prankster"
    ],
    "featured": "true",
    "height": 28,
    "id": 547,
    "name": "Whimsicott",
    "number": "547",
    "slug": "whimsicott",
    "type": [
      "grass",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Flying",
      "Ice",
      "Poison"
    ],
    "weight": 14.6
  },
  {
    "abilities": [
      "Chlorophyll",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 20,
    "id": 548,
    "name": "Petilil",
    "number": "548",
    "slug": "petilil",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 14.6
  },
  {
    "abilities": [
      "Chlorophyll",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 43,
    "id": 549,
    "name": "Lilligant",
    "number": "549",
    "slug": "lilligant",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 35.9
  },
  {
    "abilities": [
      "Adaptability",
      "Rock Head"
    ],
    "featured": "true",
    "height": 39,
    "id": 550,
    "name": "Basculin",
    "number": "550",
    "slug": "basculin",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 39.7
  },
  {
    "abilities": [
      "Intimidate",
      "Moxie"
    ],
    "featured": "true",
    "height": 28,
    "id": 551,
    "name": "Sandile",
    "number": "551",
    "slug": "sandile",
    "type": [
      "ground",
      "dark"
    ],
    "weakness": [
      "Ice",
      "Water",
      "Fighting",
      "Fairy",
      "Grass",
      "Bug"
    ],
    "weight": 33.5
  },
  {
    "abilities": [
      "Intimidate",
      "Moxie"
    ],
    "featured": "true",
    "height": 39,
    "id": 552,
    "name": "Krokorok",
    "number": "552",
    "slug": "krokorok",
    "type": [
      "ground",
      "dark"
    ],
    "weakness": [
      "Ice",
      "Water",
      "Fighting",
      "Fairy",
      "Grass",
      "Bug"
    ],
    "weight": 73.6
  },
  {
    "abilities": [
      "Intimidate",
      "Moxie"
    ],
    "featured": "true",
    "height": 59,
    "id": 553,
    "name": "Krookodile",
    "number": "553",
    "slug": "krookodile",
    "type": [
      "ground",
      "dark"
    ],
    "weakness": [
      "Ice",
      "Water",
      "Fighting",
      "Fairy",
      "Grass",
      "Bug"
    ],
    "weight": 212.3
  },
  {
    "abilities": [
      "Hustle"
    ],
    "featured": "true",
    "height": 28,
    "id": 554,
    "name": "Darumaka",
    "number": "554",
    "slug": "darumaka",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 88.2
  },
  {
    "abilities": [
      "Gorilla Tactics"
    ],
    "featured": "true",
    "height": 67,
    "id": 555,
    "name": "Darmanitan",
    "number": "555",
    "slug": "darmanitan",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 264.6
  },
  {
    "abilities": [
      "Chlorophyll",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 39,
    "id": 556,
    "name": "Maractus",
    "number": "556",
    "slug": "maractus",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Shell Armor",
      "Sturdy"
    ],
    "featured": "true",
    "height": 12,
    "id": 557,
    "name": "Dwebble",
    "number": "557",
    "slug": "dwebble",
    "type": [
      "bug",
      "rock"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Rock"
    ],
    "weight": 32
  },
  {
    "abilities": [
      "Shell Armor",
      "Sturdy"
    ],
    "featured": "true",
    "height": 55,
    "id": 558,
    "name": "Crustle",
    "number": "558",
    "slug": "crustle",
    "type": [
      "bug",
      "rock"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Rock"
    ],
    "weight": 440.9
  },
  {
    "abilities": [
      "Moxie",
      "Shed Skin"
    ],
    "featured": "true",
    "height": 24,
    "id": 559,
    "name": "Scraggy",
    "number": "559",
    "slug": "scraggy",
    "type": [
      "dark",
      "fighting"
    ],
    "weakness": [
      "Fairy",
      "Flying",
      "Fighting"
    ],
    "weight": 26
  },
  {
    "abilities": [
      "Moxie",
      "Shed Skin"
    ],
    "featured": "true",
    "height": 43,
    "id": 560,
    "name": "Scrafty",
    "number": "560",
    "slug": "scrafty",
    "type": [
      "dark",
      "fighting"
    ],
    "weakness": [
      "Fairy",
      "Flying",
      "Fighting"
    ],
    "weight": 66.1
  },
  {
    "abilities": [
      "Magic Guard",
      "Wonder Skin"
    ],
    "featured": "true",
    "height": 55,
    "id": 561,
    "name": "Sigilyph",
    "number": "561",
    "slug": "sigilyph",
    "type": [
      "psychic",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 30.9
  },
  {
    "abilities": [
      "Wandering Spirit"
    ],
    "featured": "true",
    "height": 20,
    "id": 562,
    "name": "Yamask",
    "number": "562",
    "slug": "yamask",
    "type": [
      "ground",
      "ghost"
    ],
    "weakness": [
      "Water",
      "Ghost",
      "Grass",
      "Dark",
      "Ice"
    ],
    "weight": 3.3
  },
  {
    "abilities": [
      "Mummy"
    ],
    "featured": "true",
    "height": 67,
    "id": 563,
    "name": "Cofagrigus",
    "number": "563",
    "slug": "cofagrigus",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 168.7
  },
  {
    "abilities": [
      "Solid Rock",
      "Sturdy"
    ],
    "featured": "true",
    "height": 28,
    "id": 564,
    "name": "Tirtouga",
    "number": "564",
    "slug": "tirtouga",
    "type": [
      "water",
      "rock"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 36.4
  },
  {
    "abilities": [
      "Solid Rock",
      "Sturdy"
    ],
    "featured": "true",
    "height": 47,
    "id": 565,
    "name": "Carracosta",
    "number": "565",
    "slug": "carracosta",
    "type": [
      "water",
      "rock"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 178.6
  },
  {
    "abilities": [
      "Defeatist"
    ],
    "featured": "true",
    "height": 20,
    "id": 566,
    "name": "Archen",
    "number": "566",
    "slug": "archen",
    "type": [
      "rock",
      "flying"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 20.9
  },
  {
    "abilities": [
      "Defeatist"
    ],
    "featured": "true",
    "height": 55,
    "id": 567,
    "name": "Archeops",
    "number": "567",
    "slug": "archeops",
    "type": [
      "rock",
      "flying"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 70.5
  },
  {
    "abilities": [
      "Stench",
      "Sticky Hold"
    ],
    "featured": "true",
    "height": 24,
    "id": 568,
    "name": "Trubbish",
    "number": "568",
    "slug": "trubbish",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 68.3
  },
  {
    "abilities": [
      "Stench",
      "Weak Armor"
    ],
    "featured": "true",
    "height": 827,
    "id": 569,
    "name": "Garbodor",
    "number": "569",
    "slug": "garbodor",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Illusion"
    ],
    "featured": "true",
    "height": 28,
    "id": 570,
    "name": "Zorua",
    "number": "570",
    "slug": "zorua",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 27.6
  },
  {
    "abilities": [
      "Illusion"
    ],
    "featured": "true",
    "height": 63,
    "id": 571,
    "name": "Zoroark",
    "number": "571",
    "slug": "zoroark",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 178.8
  },
  {
    "abilities": [
      "Cute Charm",
      "Technician"
    ],
    "featured": "true",
    "height": 16,
    "id": 572,
    "name": "Minccino",
    "number": "572",
    "slug": "minccino",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 12.8
  },
  {
    "abilities": [
      "Cute Charm",
      "Technician"
    ],
    "featured": "true",
    "height": 20,
    "id": 573,
    "name": "Cinccino",
    "number": "573",
    "slug": "cinccino",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 16.5
  },
  {
    "abilities": [
      "Competitive",
      "Frisk"
    ],
    "featured": "true",
    "height": 16,
    "id": 574,
    "name": "Gothita",
    "number": "574",
    "slug": "gothita",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 12.8
  },
  {
    "abilities": [
      "Competitive",
      "Frisk"
    ],
    "featured": "true",
    "height": 28,
    "id": 575,
    "name": "Gothorita",
    "number": "575",
    "slug": "gothorita",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 39.7
  },
  {
    "abilities": [
      "Competitive",
      "Frisk"
    ],
    "featured": "true",
    "height": 59,
    "id": 576,
    "name": "Gothitelle",
    "number": "576",
    "slug": "gothitelle",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 97
  },
  {
    "abilities": [
      "Magic Guard",
      "Overcoat"
    ],
    "featured": "true",
    "height": 12,
    "id": 577,
    "name": "Solosis",
    "number": "577",
    "slug": "solosis",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Magic Guard",
      "Overcoat"
    ],
    "featured": "true",
    "height": 24,
    "id": 578,
    "name": "Duosion",
    "number": "578",
    "slug": "duosion",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 17.6
  },
  {
    "abilities": [
      "Magic Guard",
      "Overcoat"
    ],
    "featured": "true",
    "height": 39,
    "id": 579,
    "name": "Reuniclus",
    "number": "579",
    "slug": "reuniclus",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 44.3
  },
  {
    "abilities": [
      "Big Pecks",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 20,
    "id": 580,
    "name": "Ducklett",
    "number": "580",
    "slug": "ducklett",
    "type": [
      "water",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Rock"
    ],
    "weight": 12.1
  },
  {
    "abilities": [
      "Big Pecks",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 51,
    "id": 581,
    "name": "Swanna",
    "number": "581",
    "slug": "swanna",
    "type": [
      "water",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Rock"
    ],
    "weight": 53.4
  },
  {
    "abilities": [
      "Ice Body",
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 16,
    "id": 582,
    "name": "Vanillite",
    "number": "582",
    "slug": "vanillite",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 12.6
  },
  {
    "abilities": [
      "Ice Body",
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 43,
    "id": 583,
    "name": "Vanillish",
    "number": "583",
    "slug": "vanillish",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 90.4
  },
  {
    "abilities": [
      "Ice Body",
      "Snow Warning"
    ],
    "featured": "true",
    "height": 51,
    "id": 584,
    "name": "Vanilluxe",
    "number": "584",
    "slug": "vanilluxe",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 126.8
  },
  {
    "abilities": [
      "Chlorophyll",
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 24,
    "id": 585,
    "name": "Deerling",
    "number": "585",
    "slug": "deerling",
    "type": [
      "normal",
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Fighting",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 43
  },
  {
    "abilities": [
      "Chlorophyll",
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 75,
    "id": 586,
    "name": "Sawsbuck",
    "number": "586",
    "slug": "sawsbuck",
    "type": [
      "normal",
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Fighting",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 203.9
  },
  {
    "abilities": [
      "Static"
    ],
    "featured": "true",
    "height": 16,
    "id": 587,
    "name": "Emolga",
    "number": "587",
    "slug": "emolga",
    "type": [
      "electric",
      "flying"
    ],
    "weakness": [
      "Ice",
      "Rock"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Shed Skin",
      "Swarm"
    ],
    "featured": "true",
    "height": 20,
    "id": 588,
    "name": "Karrablast",
    "number": "588",
    "slug": "karrablast",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 13
  },
  {
    "abilities": [
      "Shell Armor",
      "Swarm"
    ],
    "featured": "true",
    "height": 39,
    "id": 589,
    "name": "Escavalier",
    "number": "589",
    "slug": "escavalier",
    "type": [
      "bug",
      "steel"
    ],
    "weakness": [
      "Fire"
    ],
    "weight": 72.8
  },
  {
    "abilities": [
      "Effect Spore"
    ],
    "featured": "true",
    "height": 8,
    "id": 590,
    "name": "Foongus",
    "number": "590",
    "slug": "foongus",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Effect Spore"
    ],
    "featured": "true",
    "height": 24,
    "id": 591,
    "name": "Amoonguss",
    "number": "591",
    "slug": "amoonguss",
    "type": [
      "grass",
      "poison"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "weight": 23.1
  },
  {
    "abilities": [
      "Cursed Body",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 47,
    "id": 592,
    "name": "Frillish",
    "number": "592",
    "slug": "frillish",
    "type": [
      "water",
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Electric"
    ],
    "weight": 72.8
  },
  {
    "abilities": [
      "Cursed Body",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 87,
    "id": 593,
    "name": "Jellicent",
    "number": "593",
    "slug": "jellicent",
    "type": [
      "water",
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Electric"
    ],
    "weight": 297.6
  },
  {
    "abilities": [
      "Healer",
      "Hydration"
    ],
    "featured": "true",
    "height": 47,
    "id": 594,
    "name": "Alomomola",
    "number": "594",
    "slug": "alomomola",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 69.7
  },
  {
    "abilities": [
      "Compound Eyes",
      "Unnerve"
    ],
    "featured": "true",
    "height": 4,
    "id": 595,
    "name": "Joltik",
    "number": "595",
    "slug": "joltik",
    "type": [
      "bug",
      "electric"
    ],
    "weakness": [
      "Fire",
      "Rock"
    ],
    "weight": 1.3
  },
  {
    "abilities": [
      "Compound Eyes",
      "Unnerve"
    ],
    "featured": "true",
    "height": 31,
    "id": 596,
    "name": "Galvantula",
    "number": "596",
    "slug": "galvantula",
    "type": [
      "bug",
      "electric"
    ],
    "weakness": [
      "Fire",
      "Rock"
    ],
    "weight": 31.5
  },
  {
    "abilities": [
      "Iron Barbs"
    ],
    "featured": "true",
    "height": 24,
    "id": 597,
    "name": "Ferroseed",
    "number": "597",
    "slug": "ferroseed",
    "type": [
      "grass",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting"
    ],
    "weight": 41.4
  },
  {
    "abilities": [
      "Iron Barbs"
    ],
    "featured": "true",
    "height": 39,
    "id": 598,
    "name": "Ferrothorn",
    "number": "598",
    "slug": "ferrothorn",
    "type": [
      "grass",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting"
    ],
    "weight": 242.5
  },
  {
    "abilities": [
      "Minus",
      "Plus"
    ],
    "featured": "true",
    "height": 12,
    "id": 599,
    "name": "Klink",
    "number": "599",
    "slug": "klink",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 46.3
  },
  {
    "abilities": [
      "Minus",
      "Plus"
    ],
    "featured": "true",
    "height": 24,
    "id": 600,
    "name": "Klang",
    "number": "600",
    "slug": "klang",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 112.4
  },
  {
    "abilities": [
      "Minus",
      "Plus"
    ],
    "featured": "true",
    "height": 24,
    "id": 601,
    "name": "Klinklang",
    "number": "601",
    "slug": "klinklang",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 178.6
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 8,
    "id": 602,
    "name": "Tynamo",
    "number": "602",
    "slug": "tynamo",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 0.7
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 47,
    "id": 603,
    "name": "Eelektrik",
    "number": "603",
    "slug": "eelektrik",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 48.5
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 83,
    "id": 604,
    "name": "Eelektross",
    "number": "604",
    "slug": "eelektross",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 177.5
  },
  {
    "abilities": [
      "Synchronize",
      "Telepathy"
    ],
    "featured": "true",
    "height": 20,
    "id": 605,
    "name": "Elgyem",
    "number": "605",
    "slug": "elgyem",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 19.8
  },
  {
    "abilities": [
      "Synchronize",
      "Telepathy"
    ],
    "featured": "true",
    "height": 39,
    "id": 606,
    "name": "Beheeyem",
    "number": "606",
    "slug": "beheeyem",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 76.1
  },
  {
    "abilities": [
      "Flame Body",
      "Flash Fire"
    ],
    "featured": "true",
    "height": 12,
    "id": 607,
    "name": "Litwick",
    "number": "607",
    "slug": "litwick",
    "type": [
      "ghost",
      "fire"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Ground",
      "Water",
      "Rock"
    ],
    "weight": 6.8
  },
  {
    "abilities": [
      "Flame Body",
      "Flash Fire"
    ],
    "featured": "true",
    "height": 24,
    "id": 608,
    "name": "Lampent",
    "number": "608",
    "slug": "lampent",
    "type": [
      "ghost",
      "fire"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Ground",
      "Water",
      "Rock"
    ],
    "weight": 28.7
  },
  {
    "abilities": [
      "Flame Body",
      "Flash Fire"
    ],
    "featured": "true",
    "height": 39,
    "id": 609,
    "name": "Chandelure",
    "number": "609",
    "slug": "chandelure",
    "type": [
      "ghost",
      "fire"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Ground",
      "Water",
      "Rock"
    ],
    "weight": 75.6
  },
  {
    "abilities": [
      "Mold Breaker",
      "Rivalry"
    ],
    "featured": "true",
    "height": 24,
    "id": 610,
    "name": "Axew",
    "number": "610",
    "slug": "axew",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 39.7
  },
  {
    "abilities": [
      "Mold Breaker",
      "Rivalry"
    ],
    "featured": "true",
    "height": 39,
    "id": 611,
    "name": "Fraxure",
    "number": "611",
    "slug": "fraxure",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 79.4
  },
  {
    "abilities": [
      "Mold Breaker",
      "Rivalry"
    ],
    "featured": "true",
    "height": 71,
    "id": 612,
    "name": "Haxorus",
    "number": "612",
    "slug": "haxorus",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 232.6
  },
  {
    "abilities": [
      "Slush Rush",
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 20,
    "id": 613,
    "name": "Cubchoo",
    "number": "613",
    "slug": "cubchoo",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "Slush Rush",
      "Snow Cloak"
    ],
    "featured": "true",
    "height": 102,
    "id": 614,
    "name": "Beartic",
    "number": "614",
    "slug": "beartic",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 573.2
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 43,
    "id": 615,
    "name": "Cryogonal",
    "number": "615",
    "slug": "cryogonal",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 326.3
  },
  {
    "abilities": [
      "Hydration",
      "Shell Armor"
    ],
    "featured": "true",
    "height": 16,
    "id": 616,
    "name": "Shelmet",
    "number": "616",
    "slug": "shelmet",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 17
  },
  {
    "abilities": [
      "Hydration",
      "Sticky Hold"
    ],
    "featured": "true",
    "height": 31,
    "id": 617,
    "name": "Accelgor",
    "number": "617",
    "slug": "accelgor",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 55.8
  },
  {
    "abilities": [
      "Mimicry"
    ],
    "featured": "true",
    "height": 28,
    "id": 618,
    "name": "Stunfisk",
    "number": "618",
    "slug": "stunfisk",
    "type": [
      "ground",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 45.2
  },
  {
    "abilities": [
      "Inner Focus",
      "Regenerator"
    ],
    "featured": "true",
    "height": 35,
    "id": 619,
    "name": "Mienfoo",
    "number": "619",
    "slug": "mienfoo",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 44.1
  },
  {
    "abilities": [
      "Inner Focus",
      "Regenerator"
    ],
    "featured": "true",
    "height": 55,
    "id": 620,
    "name": "Mienshao",
    "number": "620",
    "slug": "mienshao",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 78.3
  },
  {
    "abilities": [
      "Rough Skin",
      "Sheer Force"
    ],
    "featured": "true",
    "height": 63,
    "id": 621,
    "name": "Druddigon",
    "number": "621",
    "slug": "druddigon",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 306.4
  },
  {
    "abilities": [
      "Iron Fist",
      "Klutz"
    ],
    "featured": "true",
    "height": 39,
    "id": 622,
    "name": "Golett",
    "number": "622",
    "slug": "golett",
    "type": [
      "ground",
      "ghost"
    ],
    "weakness": [
      "Water",
      "Ghost",
      "Grass",
      "Dark",
      "Ice"
    ],
    "weight": 202.8
  },
  {
    "abilities": [
      "Iron Fist",
      "Klutz"
    ],
    "featured": "true",
    "height": 110,
    "id": 623,
    "name": "Golurk",
    "number": "623",
    "slug": "golurk",
    "type": [
      "ground",
      "ghost"
    ],
    "weakness": [
      "Water",
      "Ghost",
      "Grass",
      "Dark",
      "Ice"
    ],
    "weight": 727.5
  },
  {
    "abilities": [
      "Defiant",
      "Inner Focus"
    ],
    "featured": "true",
    "height": 20,
    "id": 624,
    "name": "Pawniard",
    "number": "624",
    "slug": "pawniard",
    "type": [
      "dark",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 22.5
  },
  {
    "abilities": [
      "Defiant",
      "Inner Focus"
    ],
    "featured": "true",
    "height": 63,
    "id": 625,
    "name": "Bisharp",
    "number": "625",
    "slug": "bisharp",
    "type": [
      "dark",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 154.3
  },
  {
    "abilities": [
      "Reckless",
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 63,
    "id": 626,
    "name": "Bouffalant",
    "number": "626",
    "slug": "bouffalant",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 208.6
  },
  {
    "abilities": [
      "Keen Eye",
      "Sheer Force"
    ],
    "featured": "true",
    "height": 20,
    "id": 627,
    "name": "Rufflet",
    "number": "627",
    "slug": "rufflet",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 23.1
  },
  {
    "abilities": [
      "Keen Eye",
      "Sheer Force"
    ],
    "featured": "true",
    "height": 59,
    "id": 628,
    "name": "Braviary",
    "number": "628",
    "slug": "braviary",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 90.4
  },
  {
    "abilities": [
      "Big Pecks",
      "Overcoat"
    ],
    "featured": "true",
    "height": 20,
    "id": 629,
    "name": "Vullaby",
    "number": "629",
    "slug": "vullaby",
    "type": [
      "dark",
      "flying"
    ],
    "weakness": [
      "Fairy",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 19.8
  },
  {
    "abilities": [
      "Big Pecks",
      "Overcoat"
    ],
    "featured": "true",
    "height": 47,
    "id": 630,
    "name": "Mandibuzz",
    "number": "630",
    "slug": "mandibuzz",
    "type": [
      "dark",
      "flying"
    ],
    "weakness": [
      "Fairy",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 87.1
  },
  {
    "abilities": [
      "Flash Fire",
      "Gluttony"
    ],
    "featured": "true",
    "height": 55,
    "id": 631,
    "name": "Heatmor",
    "number": "631",
    "slug": "heatmor",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 127.9
  },
  {
    "abilities": [
      "Hustle",
      "Swarm"
    ],
    "featured": "true",
    "height": 12,
    "id": 632,
    "name": "Durant",
    "number": "632",
    "slug": "durant",
    "type": [
      "bug",
      "steel"
    ],
    "weakness": [
      "Fire"
    ],
    "weight": 72.8
  },
  {
    "abilities": [
      "Hustle"
    ],
    "featured": "true",
    "height": 31,
    "id": 633,
    "name": "Deino",
    "number": "633",
    "slug": "deino",
    "type": [
      "dark",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Fighting",
      "Bug",
      "Ice",
      "Dragon"
    ],
    "weight": 38.1
  },
  {
    "abilities": [
      "Hustle"
    ],
    "featured": "true",
    "height": 55,
    "id": 634,
    "name": "Zweilous",
    "number": "634",
    "slug": "zweilous",
    "type": [
      "dark",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Fighting",
      "Bug",
      "Ice",
      "Dragon"
    ],
    "weight": 110.2
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 71,
    "id": 635,
    "name": "Hydreigon",
    "number": "635",
    "slug": "hydreigon",
    "type": [
      "dark",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Fighting",
      "Bug",
      "Ice",
      "Dragon"
    ],
    "weight": 352.7
  },
  {
    "abilities": [
      "Flame Body"
    ],
    "featured": "true",
    "height": 43,
    "id": 636,
    "name": "Larvesta",
    "number": "636",
    "slug": "larvesta",
    "type": [
      "bug",
      "fire"
    ],
    "weakness": [
      "Water",
      "Flying",
      "Rock"
    ],
    "weight": 63.5
  },
  {
    "abilities": [
      "Flame Body"
    ],
    "featured": "true",
    "height": 63,
    "id": 637,
    "name": "Volcarona",
    "number": "637",
    "slug": "volcarona",
    "type": [
      "bug",
      "fire"
    ],
    "weakness": [
      "Water",
      "Flying",
      "Rock"
    ],
    "weight": 101.4
  },
  {
    "abilities": [
      "Justified"
    ],
    "featured": "true",
    "height": 83,
    "id": 638,
    "name": "Cobalion",
    "number": "638",
    "slug": "cobalion",
    "type": [
      "steel",
      "fighting"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 551.2
  },
  {
    "abilities": [
      "Justified"
    ],
    "featured": "true",
    "height": 75,
    "id": 639,
    "name": "Terrakion",
    "number": "639",
    "slug": "terrakion",
    "type": [
      "rock",
      "fighting"
    ],
    "weakness": [
      "Steel",
      "Psychic",
      "Fighting",
      "Water",
      "Fairy",
      "Grass",
      "Ground"
    ],
    "weight": 573.2
  },
  {
    "abilities": [
      "Justified"
    ],
    "featured": "true",
    "height": 79,
    "id": 640,
    "name": "Virizion",
    "number": "640",
    "slug": "virizion",
    "type": [
      "grass",
      "fighting"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice",
      "Poison",
      "Fairy"
    ],
    "weight": 440.9
  },
  {
    "abilities": [
      "Regenerator"
    ],
    "featured": "true",
    "height": 55,
    "id": 641,
    "name": "Tornadus",
    "number": "641",
    "slug": "tornadus",
    "type": [
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 138.9
  },
  {
    "abilities": [
      "Volt Absorb"
    ],
    "featured": "true",
    "height": 118,
    "id": 642,
    "name": "Thundurus",
    "number": "642",
    "slug": "thundurus",
    "type": [
      "electric",
      "flying"
    ],
    "weakness": [
      "Ice",
      "Rock"
    ],
    "weight": 134.5
  },
  {
    "abilities": [
      "Turboblaze"
    ],
    "featured": "true",
    "height": 126,
    "id": 643,
    "name": "Reshiram",
    "number": "643",
    "slug": "reshiram",
    "type": [
      "dragon",
      "fire"
    ],
    "weakness": [
      "Ground",
      "Rock",
      "Dragon"
    ],
    "weight": 727.5
  },
  {
    "abilities": [
      "Teravolt"
    ],
    "featured": "true",
    "height": 114,
    "id": 644,
    "name": "Zekrom",
    "number": "644",
    "slug": "zekrom",
    "type": [
      "dragon",
      "electric"
    ],
    "weakness": [
      "Fairy",
      "Dragon",
      "Ice",
      "Ground"
    ],
    "weight": 760.6
  },
  {
    "abilities": [
      "Intimidate"
    ],
    "featured": "true",
    "height": 51,
    "id": 645,
    "name": "Landorus",
    "number": "645",
    "slug": "landorus",
    "type": [
      "ground",
      "flying"
    ],
    "weakness": [
      "Water",
      "Ice"
    ],
    "weight": 149.9
  },
  {
    "abilities": [
      "Teravolt"
    ],
    "featured": "true",
    "height": 130,
    "id": 646,
    "name": "Kyurem",
    "number": "646",
    "slug": "kyurem",
    "type": [
      "dragon",
      "ice"
    ],
    "weakness": [
      "Steel",
      "Fairy",
      "Rock",
      "Fighting",
      "Dragon"
    ],
    "weight": 716.5
  },
  {
    "abilities": [
      "Justified"
    ],
    "featured": "true",
    "height": 55,
    "id": 647,
    "name": "Keldeo",
    "number": "647",
    "slug": "keldeo",
    "type": [
      "water",
      "fighting"
    ],
    "weakness": [
      "Fairy",
      "Grass",
      "Flying",
      "Psychic",
      "Electric"
    ],
    "weight": 106.9
  },
  {
    "abilities": [
      "Serene Grace"
    ],
    "featured": "true",
    "height": 24,
    "id": 648,
    "name": "Meloetta",
    "number": "648",
    "slug": "meloetta",
    "type": [
      "normal",
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy",
      "Fighting"
    ],
    "weight": 14.3
  },
  {
    "abilities": [
      "Download"
    ],
    "featured": "true",
    "height": 59,
    "id": 649,
    "name": "Genesect",
    "number": "649",
    "slug": "genesect",
    "type": [
      "bug",
      "steel"
    ],
    "weakness": [
      "Fire"
    ],
    "weight": 181.9
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 16,
    "id": 650,
    "name": "Chespin",
    "number": "650",
    "slug": "chespin",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 19.8
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 28,
    "id": 651,
    "name": "Quilladin",
    "number": "651",
    "slug": "quilladin",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 63.9
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 63,
    "id": 652,
    "name": "Chesnaught",
    "number": "652",
    "slug": "chesnaught",
    "type": [
      "grass",
      "fighting"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice",
      "Poison",
      "Fairy"
    ],
    "weight": 198.4
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 16,
    "id": 653,
    "name": "Fennekin",
    "number": "653",
    "slug": "fennekin",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 20.7
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 39,
    "id": 654,
    "name": "Braixen",
    "number": "654",
    "slug": "braixen",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 32
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 59,
    "id": 655,
    "name": "Delphox",
    "number": "655",
    "slug": "delphox",
    "type": [
      "fire",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Ground",
      "Water",
      "Rock"
    ],
    "weight": 86
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 12,
    "id": 656,
    "name": "Froakie",
    "number": "656",
    "slug": "froakie",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 15.4
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 24,
    "id": 657,
    "name": "Frogadier",
    "number": "657",
    "slug": "frogadier",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 24
  },
  {
    "abilities": [
      "Battle Bond"
    ],
    "featured": "true",
    "height": 59,
    "id": 658,
    "name": "Greninja",
    "number": "658",
    "slug": "greninja",
    "type": [
      "water",
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Grass",
      "Electric",
      "Fighting",
      "Bug"
    ],
    "weight": 88.2
  },
  {
    "abilities": [
      "Cheek Pouch",
      "Pickup"
    ],
    "featured": "true",
    "height": 16,
    "id": 659,
    "name": "Bunnelby",
    "number": "659",
    "slug": "bunnelby",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Cheek Pouch",
      "Pickup"
    ],
    "featured": "true",
    "height": 39,
    "id": 660,
    "name": "Diggersby",
    "number": "660",
    "slug": "diggersby",
    "type": [
      "normal",
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Fighting",
      "Ice"
    ],
    "weight": 93.5
  },
  {
    "abilities": [
      "Big Pecks"
    ],
    "featured": "true",
    "height": 12,
    "id": 661,
    "name": "Fletchling",
    "number": "661",
    "slug": "fletchling",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 3.7
  },
  {
    "abilities": [
      "Flame Body"
    ],
    "featured": "true",
    "height": 28,
    "id": 662,
    "name": "Fletchinder",
    "number": "662",
    "slug": "fletchinder",
    "type": [
      "fire",
      "flying"
    ],
    "weakness": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weight": 35.3
  },
  {
    "abilities": [
      "Flame Body"
    ],
    "featured": "true",
    "height": 47,
    "id": 663,
    "name": "Talonflame",
    "number": "663",
    "slug": "talonflame",
    "type": [
      "fire",
      "flying"
    ],
    "weakness": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weight": 54
  },
  {
    "abilities": [
      "Compound Eyes",
      "Shield Dust"
    ],
    "featured": "true",
    "height": 12,
    "id": 664,
    "name": "Scatterbug",
    "number": "664",
    "slug": "scatterbug",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 5.5
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "featured": "true",
    "height": 12,
    "id": 665,
    "name": "Spewpa",
    "number": "665",
    "slug": "spewpa",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 18.5
  },
  {
    "abilities": [
      "Compound Eyes",
      "Shield Dust"
    ],
    "featured": "true",
    "height": 47,
    "id": 666,
    "name": "Vivillon",
    "number": "666",
    "slug": "vivillon",
    "type": [
      "bug",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 37.5
  },
  {
    "abilities": [
      "Rivalry",
      "Unnerve"
    ],
    "featured": "true",
    "height": 24,
    "id": 667,
    "name": "Litleo",
    "number": "667",
    "slug": "litleo",
    "type": [
      "fire",
      "normal"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 29.8
  },
  {
    "abilities": [
      "Rivalry",
      "Unnerve"
    ],
    "featured": "true",
    "height": 59,
    "id": 668,
    "name": "Pyroar",
    "number": "668",
    "slug": "pyroar",
    "type": [
      "fire",
      "normal"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 179.7
  },
  {
    "abilities": [
      "Flower Veil"
    ],
    "featured": "true",
    "height": 4,
    "id": 669,
    "name": "Flabébé",
    "number": "669",
    "slug": "flabebe",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 0.2
  },
  {
    "abilities": [
      "Flower Veil"
    ],
    "featured": "true",
    "height": 8,
    "id": 670,
    "name": "Floette",
    "number": "670",
    "slug": "floette",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 2
  },
  {
    "abilities": [
      "Flower Veil"
    ],
    "featured": "true",
    "height": 43,
    "id": 671,
    "name": "Florges",
    "number": "671",
    "slug": "florges",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 22
  },
  {
    "abilities": [
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 35,
    "id": 672,
    "name": "Skiddo",
    "number": "672",
    "slug": "skiddo",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 68.3
  },
  {
    "abilities": [
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 67,
    "id": 673,
    "name": "Gogoat",
    "number": "673",
    "slug": "gogoat",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 200.6
  },
  {
    "abilities": [
      "Iron Fist",
      "Mold Breaker"
    ],
    "featured": "true",
    "height": 24,
    "id": 674,
    "name": "Pancham",
    "number": "674",
    "slug": "pancham",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 17.6
  },
  {
    "abilities": [
      "Iron Fist",
      "Mold Breaker"
    ],
    "featured": "true",
    "height": 83,
    "id": 675,
    "name": "Pangoro",
    "number": "675",
    "slug": "pangoro",
    "type": [
      "fighting",
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Flying",
      "Fighting"
    ],
    "weight": 299.8
  },
  {
    "abilities": [
      "Fur Coat"
    ],
    "featured": "true",
    "height": 47,
    "id": 676,
    "name": "Furfrou",
    "number": "676",
    "slug": "furfrou",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Infiltrator",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 12,
    "id": 677,
    "name": "Espurr",
    "number": "677",
    "slug": "espurr",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 7.7
  },
  {
    "abilities": [
      "Infiltrator",
      "Keen Eye"
    ],
    "featured": "true",
    "height": 24,
    "id": 678,
    "name": "Meowstic",
    "number": "678",
    "slug": "meowstic",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "No Guard"
    ],
    "featured": "true",
    "height": 31,
    "id": 679,
    "name": "Honedge",
    "number": "679",
    "slug": "honedge",
    "type": [
      "steel",
      "ghost"
    ],
    "weakness": [
      "Fire",
      "Ghost",
      "Dark",
      "Ground"
    ],
    "weight": 4.4
  },
  {
    "abilities": [
      "No Guard"
    ],
    "featured": "true",
    "height": 31,
    "id": 680,
    "name": "Doublade",
    "number": "680",
    "slug": "doublade",
    "type": [
      "steel",
      "ghost"
    ],
    "weakness": [
      "Fire",
      "Ghost",
      "Dark",
      "Ground"
    ],
    "weight": 9.9
  },
  {
    "abilities": [
      "Stance Change"
    ],
    "featured": "true",
    "height": 67,
    "id": 681,
    "name": "Aegislash",
    "number": "681",
    "slug": "aegislash",
    "type": [
      "steel",
      "ghost"
    ],
    "weakness": [
      "Fire",
      "Ghost",
      "Dark",
      "Ground"
    ],
    "weight": 116.8
  },
  {
    "abilities": [
      "Healer"
    ],
    "featured": "true",
    "height": 8,
    "id": 682,
    "name": "Spritzee",
    "number": "682",
    "slug": "spritzee",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 1.1
  },
  {
    "abilities": [
      "Healer"
    ],
    "featured": "true",
    "height": 31,
    "id": 683,
    "name": "Aromatisse",
    "number": "683",
    "slug": "aromatisse",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 34.2
  },
  {
    "abilities": [
      "Sweet Veil"
    ],
    "featured": "true",
    "height": 16,
    "id": 684,
    "name": "Swirlix",
    "number": "684",
    "slug": "swirlix",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 7.7
  },
  {
    "abilities": [
      "Sweet Veil"
    ],
    "featured": "true",
    "height": 31,
    "id": 685,
    "name": "Slurpuff",
    "number": "685",
    "slug": "slurpuff",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Contrary",
      "Suction Cups"
    ],
    "featured": "true",
    "height": 16,
    "id": 686,
    "name": "Inkay",
    "number": "686",
    "slug": "inkay",
    "type": [
      "dark",
      "psychic"
    ],
    "weakness": [
      "Fairy",
      "Bug"
    ],
    "weight": 7.7
  },
  {
    "abilities": [
      "Contrary",
      "Suction Cups"
    ],
    "featured": "true",
    "height": 59,
    "id": 687,
    "name": "Malamar",
    "number": "687",
    "slug": "malamar",
    "type": [
      "dark",
      "psychic"
    ],
    "weakness": [
      "Fairy",
      "Bug"
    ],
    "weight": 103.6
  },
  {
    "abilities": [
      "Sniper",
      "Tough Claws"
    ],
    "featured": "true",
    "height": 20,
    "id": 688,
    "name": "Binacle",
    "number": "688",
    "slug": "binacle",
    "type": [
      "rock",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 68.3
  },
  {
    "abilities": [
      "Sniper",
      "Tough Claws"
    ],
    "featured": "true",
    "height": 51,
    "id": 689,
    "name": "Barbaracle",
    "number": "689",
    "slug": "barbaracle",
    "type": [
      "rock",
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 211.6
  },
  {
    "abilities": [
      "Poison Point",
      "Poison Touch"
    ],
    "featured": "true",
    "height": 20,
    "id": 690,
    "name": "Skrelp",
    "number": "690",
    "slug": "skrelp",
    "type": [
      "poison",
      "water"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ground"
    ],
    "weight": 16.1
  },
  {
    "abilities": [
      "Poison Point",
      "Poison Touch"
    ],
    "featured": "true",
    "height": 71,
    "id": 691,
    "name": "Dragalge",
    "number": "691",
    "slug": "dragalge",
    "type": [
      "poison",
      "dragon"
    ],
    "weakness": [
      "Psychic",
      "Ground",
      "Ice",
      "Dragon"
    ],
    "weight": 179.7
  },
  {
    "abilities": [
      "Mega Launcher"
    ],
    "featured": "true",
    "height": 20,
    "id": 692,
    "name": "Clauncher",
    "number": "692",
    "slug": "clauncher",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 18.3
  },
  {
    "abilities": [
      "Mega Launcher"
    ],
    "featured": "true",
    "height": 51,
    "id": 693,
    "name": "Clawitzer",
    "number": "693",
    "slug": "clawitzer",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 77.8
  },
  {
    "abilities": [
      "Dry Skin",
      "Sand Veil"
    ],
    "featured": "true",
    "height": 20,
    "id": 694,
    "name": "Helioptile",
    "number": "694",
    "slug": "helioptile",
    "type": [
      "electric",
      "normal"
    ],
    "weakness": [
      "Fighting",
      "Ground"
    ],
    "weight": 13.2
  },
  {
    "abilities": [
      "Dry Skin",
      "Sand Veil"
    ],
    "featured": "true",
    "height": 39,
    "id": 695,
    "name": "Heliolisk",
    "number": "695",
    "slug": "heliolisk",
    "type": [
      "electric",
      "normal"
    ],
    "weakness": [
      "Fighting",
      "Ground"
    ],
    "weight": 46.3
  },
  {
    "abilities": [
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 31,
    "id": 696,
    "name": "Tyrunt",
    "number": "696",
    "slug": "tyrunt",
    "type": [
      "rock",
      "dragon"
    ],
    "weakness": [
      "Steel",
      "Fighting",
      "Dragon",
      "Ice",
      "Fairy",
      "Ground"
    ],
    "weight": 57.3
  },
  {
    "abilities": [
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 98,
    "id": 697,
    "name": "Tyrantrum",
    "number": "697",
    "slug": "tyrantrum",
    "type": [
      "rock",
      "dragon"
    ],
    "weakness": [
      "Steel",
      "Fighting",
      "Dragon",
      "Ice",
      "Fairy",
      "Ground"
    ],
    "weight": 595.2
  },
  {
    "abilities": [
      "Refrigerate"
    ],
    "featured": "true",
    "height": 51,
    "id": 698,
    "name": "Amaura",
    "number": "698",
    "slug": "amaura",
    "type": [
      "rock",
      "ice"
    ],
    "weakness": [
      "Steel",
      "Fighting",
      "Water",
      "Rock",
      "Grass",
      "Ground"
    ],
    "weight": 55.6
  },
  {
    "abilities": [
      "Refrigerate"
    ],
    "featured": "true",
    "height": 106,
    "id": 699,
    "name": "Aurorus",
    "number": "699",
    "slug": "aurorus",
    "type": [
      "rock",
      "ice"
    ],
    "weakness": [
      "Steel",
      "Fighting",
      "Water",
      "Rock",
      "Grass",
      "Ground"
    ],
    "weight": 496
  },
  {
    "abilities": [
      "Cute Charm"
    ],
    "featured": "true",
    "height": 39,
    "id": 700,
    "name": "Sylveon",
    "number": "700",
    "slug": "sylveon",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 51.8
  },
  {
    "abilities": [
      "Limber",
      "Unburden"
    ],
    "featured": "true",
    "height": 31,
    "id": 701,
    "name": "Hawlucha",
    "number": "701",
    "slug": "hawlucha",
    "type": [
      "fighting",
      "flying"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy",
      "Electric",
      "Ice"
    ],
    "weight": 47.4
  },
  {
    "abilities": [
      "Cheek Pouch",
      "Pickup"
    ],
    "featured": "true",
    "height": 8,
    "id": 702,
    "name": "Dedenne",
    "number": "702",
    "slug": "dedenne",
    "type": [
      "electric",
      "fairy"
    ],
    "weakness": [
      "Poison",
      "Ground"
    ],
    "weight": 4.9
  },
  {
    "abilities": [
      "Clear Body"
    ],
    "featured": "true",
    "height": 12,
    "id": 703,
    "name": "Carbink",
    "number": "703",
    "slug": "carbink",
    "type": [
      "rock",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Grass",
      "Ground"
    ],
    "weight": 12.6
  },
  {
    "abilities": [
      "Hydration",
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 12,
    "id": 704,
    "name": "Goomy",
    "number": "704",
    "slug": "goomy",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 6.2
  },
  {
    "abilities": [
      "Hydration",
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 31,
    "id": 705,
    "name": "Sliggoo",
    "number": "705",
    "slug": "sliggoo",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 38.6
  },
  {
    "abilities": [
      "Hydration",
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 79,
    "id": 706,
    "name": "Goodra",
    "number": "706",
    "slug": "goodra",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 331.8
  },
  {
    "abilities": [
      "Prankster"
    ],
    "featured": "true",
    "height": 8,
    "id": 707,
    "name": "Klefki",
    "number": "707",
    "slug": "klefki",
    "type": [
      "steel",
      "fairy"
    ],
    "weakness": [
      "Fire",
      "Ground"
    ],
    "weight": 6.6
  },
  {
    "abilities": [
      "Frisk",
      "Natural Cure"
    ],
    "featured": "true",
    "height": 16,
    "id": 708,
    "name": "Phantump",
    "number": "708",
    "slug": "phantump",
    "type": [
      "ghost",
      "grass"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Dark",
      "Ice"
    ],
    "weight": 15.4
  },
  {
    "abilities": [
      "Frisk",
      "Natural Cure"
    ],
    "featured": "true",
    "height": 59,
    "id": 709,
    "name": "Trevenant",
    "number": "709",
    "slug": "trevenant",
    "type": [
      "ghost",
      "grass"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Dark",
      "Ice"
    ],
    "weight": 156.5
  },
  {
    "abilities": [
      "Frisk",
      "Pickup"
    ],
    "featured": "true",
    "height": 16,
    "id": 710,
    "name": "Pumpkaboo",
    "number": "710",
    "slug": "pumpkaboo",
    "type": [
      "ghost",
      "grass"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Dark",
      "Ice"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Frisk",
      "Pickup"
    ],
    "featured": "true",
    "height": 35,
    "id": 711,
    "name": "Gourgeist",
    "number": "711",
    "slug": "gourgeist",
    "type": [
      "ghost",
      "grass"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Dark",
      "Ice"
    ],
    "weight": 27.6
  },
  {
    "abilities": [
      "Ice Body",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 39,
    "id": 712,
    "name": "Bergmite",
    "number": "712",
    "slug": "bergmite",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 219.4
  },
  {
    "abilities": [
      "Ice Body",
      "Own Tempo"
    ],
    "featured": "true",
    "height": 79,
    "id": 713,
    "name": "Avalugg",
    "number": "713",
    "slug": "avalugg",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 1113.3
  },
  {
    "abilities": [
      "Frisk",
      "Infiltrator"
    ],
    "featured": "true",
    "height": 20,
    "id": 714,
    "name": "Noibat",
    "number": "714",
    "slug": "noibat",
    "type": [
      "flying",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Rock",
      "Ice",
      "Dragon"
    ],
    "weight": 17.6
  },
  {
    "abilities": [
      "Frisk",
      "Infiltrator"
    ],
    "featured": "true",
    "height": 59,
    "id": 715,
    "name": "Noivern",
    "number": "715",
    "slug": "noivern",
    "type": [
      "flying",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Rock",
      "Ice",
      "Dragon"
    ],
    "weight": 187.4
  },
  {
    "abilities": [
      "Fairy Aura"
    ],
    "featured": "true",
    "height": 118,
    "id": 716,
    "name": "Xerneas",
    "number": "716",
    "slug": "xerneas",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 474
  },
  {
    "abilities": [
      "Dark Aura"
    ],
    "featured": "true",
    "height": 228,
    "id": 717,
    "name": "Yveltal",
    "number": "717",
    "slug": "yveltal",
    "type": [
      "dark",
      "flying"
    ],
    "weakness": [
      "Fairy",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 447.5
  },
  {
    "abilities": [
      "Power Construct"
    ],
    "featured": "true",
    "height": 177,
    "id": 718,
    "name": "Zygarde",
    "number": "718",
    "slug": "zygarde",
    "type": [
      "dragon",
      "ground"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 1344.8
  },
  {
    "abilities": [
      "Magic Bounce"
    ],
    "featured": "true",
    "height": 43,
    "id": 719,
    "name": "Diancie",
    "number": "719",
    "slug": "diancie",
    "type": [
      "rock",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Grass",
      "Ground"
    ],
    "weight": 61.3
  },
  {
    "abilities": [
      "Magician"
    ],
    "featured": "true",
    "height": 256,
    "id": 720,
    "name": "Hoopa",
    "number": "720",
    "slug": "hoopa",
    "type": [
      "psychic",
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug"
    ],
    "weight": 1080.3
  },
  {
    "abilities": [
      "Water Absorb"
    ],
    "featured": "true",
    "height": 67,
    "id": 721,
    "name": "Volcanion",
    "number": "721",
    "slug": "volcanion",
    "type": [
      "fire",
      "water"
    ],
    "weakness": [
      "Ground",
      "Electric",
      "Rock"
    ],
    "weight": 429.9
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 12,
    "id": 722,
    "name": "Rowlet",
    "number": "722",
    "slug": "rowlet",
    "type": [
      "grass",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock"
    ],
    "weight": 3.3
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 28,
    "id": 723,
    "name": "Dartrix",
    "number": "723",
    "slug": "dartrix",
    "type": [
      "grass",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Rock"
    ],
    "weight": 35.3
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 63,
    "id": 724,
    "name": "Decidueye",
    "number": "724",
    "slug": "decidueye",
    "type": [
      "grass",
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Dark",
      "Ice"
    ],
    "weight": 80.7
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 16,
    "id": 725,
    "name": "Litten",
    "number": "725",
    "slug": "litten",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 9.5
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 28,
    "id": 726,
    "name": "Torracat",
    "number": "726",
    "slug": "torracat",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 55.1
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 71,
    "id": 727,
    "name": "Incineroar",
    "number": "727",
    "slug": "incineroar",
    "type": [
      "fire",
      "dark"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 183
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 16,
    "id": 728,
    "name": "Popplio",
    "number": "728",
    "slug": "popplio",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 16.5
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 24,
    "id": 729,
    "name": "Brionne",
    "number": "729",
    "slug": "brionne",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 38.6
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 71,
    "id": 730,
    "name": "Primarina",
    "number": "730",
    "slug": "primarina",
    "type": [
      "water",
      "fairy"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Poison"
    ],
    "weight": 97
  },
  {
    "abilities": [
      "Keen Eye",
      "Skill Link"
    ],
    "featured": "true",
    "height": 12,
    "id": 731,
    "name": "Pikipek",
    "number": "731",
    "slug": "pikipek",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 2.6
  },
  {
    "abilities": [
      "Keen Eye",
      "Skill Link"
    ],
    "featured": "true",
    "height": 24,
    "id": 732,
    "name": "Trumbeak",
    "number": "732",
    "slug": "trumbeak",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 32.6
  },
  {
    "abilities": [
      "Keen Eye",
      "Skill Link"
    ],
    "featured": "true",
    "height": 43,
    "id": 733,
    "name": "Toucannon",
    "number": "733",
    "slug": "toucannon",
    "type": [
      "normal",
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 57.3
  },
  {
    "abilities": [
      "Stakeout",
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 16,
    "id": 734,
    "name": "Yungoos",
    "number": "734",
    "slug": "yungoos",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 13.2
  },
  {
    "abilities": [
      "Stakeout",
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 28,
    "id": 735,
    "name": "Gumshoos",
    "number": "735",
    "slug": "gumshoos",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 31.3
  },
  {
    "abilities": [
      "Swarm"
    ],
    "featured": "true",
    "height": 16,
    "id": 736,
    "name": "Grubbin",
    "number": "736",
    "slug": "grubbin",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 9.7
  },
  {
    "abilities": [
      "Battery"
    ],
    "featured": "true",
    "height": 20,
    "id": 737,
    "name": "Charjabug",
    "number": "737",
    "slug": "charjabug",
    "type": [
      "bug",
      "electric"
    ],
    "weakness": [
      "Fire",
      "Rock"
    ],
    "weight": 23.1
  },
  {
    "abilities": [
      "Levitate"
    ],
    "featured": "true",
    "height": 59,
    "id": 738,
    "name": "Vikavolt",
    "number": "738",
    "slug": "vikavolt",
    "type": [
      "bug",
      "electric"
    ],
    "weakness": [
      "Fire",
      "Rock"
    ],
    "weight": 99.2
  },
  {
    "abilities": [
      "Hyper Cutter",
      "Iron Fist"
    ],
    "featured": "true",
    "height": 24,
    "id": 739,
    "name": "Crabrawler",
    "number": "739",
    "slug": "crabrawler",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 15.4
  },
  {
    "abilities": [
      "Hyper Cutter",
      "Iron Fist"
    ],
    "featured": "true",
    "height": 67,
    "id": 740,
    "name": "Crabominable",
    "number": "740",
    "slug": "crabominable",
    "type": [
      "fighting",
      "ice"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Psychic",
      "Flying",
      "Fighting",
      "Fairy"
    ],
    "weight": 396.8
  },
  {
    "abilities": [
      "Dancer"
    ],
    "featured": "true",
    "height": 24,
    "id": 741,
    "name": "Oricorio",
    "number": "741",
    "slug": "oricorio",
    "type": [
      "ghost",
      "flying"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 7.5
  },
  {
    "abilities": [
      "Honey Gather",
      "Shield Dust"
    ],
    "featured": "true",
    "height": 4,
    "id": 742,
    "name": "Cutiefly",
    "number": "742",
    "slug": "cutiefly",
    "type": [
      "bug",
      "fairy"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Flying",
      "Poison",
      "Rock"
    ],
    "weight": 0.4
  },
  {
    "abilities": [
      "Honey Gather",
      "Shield Dust"
    ],
    "featured": "true",
    "height": 8,
    "id": 743,
    "name": "Ribombee",
    "number": "743",
    "slug": "ribombee",
    "type": [
      "bug",
      "fairy"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Flying",
      "Poison",
      "Rock"
    ],
    "weight": 1.1
  },
  {
    "abilities": [
      "Keen Eye",
      "Vital Spirit"
    ],
    "featured": "true",
    "height": 20,
    "id": 744,
    "name": "Rockruff",
    "number": "744",
    "slug": "rockruff",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 20.3
  },
  {
    "abilities": [
      "Keen Eye",
      "Vital Spirit"
    ],
    "featured": "true",
    "height": 43,
    "id": 745,
    "name": "Lycanroc",
    "number": "745",
    "slug": "lycanroc",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 55.1
  },
  {
    "abilities": [
      "Schooling"
    ],
    "featured": "true",
    "height": 323,
    "id": 746,
    "name": "Wishiwashi",
    "number": "746",
    "slug": "wishiwashi",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 173.3
  },
  {
    "abilities": [
      "Limber",
      "Merciless"
    ],
    "featured": "true",
    "height": 16,
    "id": 747,
    "name": "Mareanie",
    "number": "747",
    "slug": "mareanie",
    "type": [
      "poison",
      "water"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ground"
    ],
    "weight": 17.6
  },
  {
    "abilities": [
      "Limber",
      "Merciless"
    ],
    "featured": "true",
    "height": 28,
    "id": 748,
    "name": "Toxapex",
    "number": "748",
    "slug": "toxapex",
    "type": [
      "poison",
      "water"
    ],
    "weakness": [
      "Psychic",
      "Electric",
      "Ground"
    ],
    "weight": 32
  },
  {
    "abilities": [
      "Own Tempo",
      "Stamina"
    ],
    "featured": "true",
    "height": 39,
    "id": 749,
    "name": "Mudbray",
    "number": "749",
    "slug": "mudbray",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 242.5
  },
  {
    "abilities": [
      "Own Tempo",
      "Stamina"
    ],
    "featured": "true",
    "height": 98,
    "id": 750,
    "name": "Mudsdale",
    "number": "750",
    "slug": "mudsdale",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 2028.3
  },
  {
    "abilities": [
      "Water Bubble"
    ],
    "featured": "true",
    "height": 12,
    "id": 751,
    "name": "Dewpider",
    "number": "751",
    "slug": "dewpider",
    "type": [
      "water",
      "bug"
    ],
    "weakness": [
      "Flying",
      "Electric",
      "Rock"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Water Bubble"
    ],
    "featured": "true",
    "height": 71,
    "id": 752,
    "name": "Araquanid",
    "number": "752",
    "slug": "araquanid",
    "type": [
      "water",
      "bug"
    ],
    "weakness": [
      "Flying",
      "Electric",
      "Rock"
    ],
    "weight": 180.8
  },
  {
    "abilities": [
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 12,
    "id": 753,
    "name": "Fomantis",
    "number": "753",
    "slug": "fomantis",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 3.3
  },
  {
    "abilities": [
      "Leaf Guard"
    ],
    "featured": "true",
    "height": 35,
    "id": 754,
    "name": "Lurantis",
    "number": "754",
    "slug": "lurantis",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 40.8
  },
  {
    "abilities": [
      "Effect Spore",
      "Illuminate"
    ],
    "featured": "true",
    "height": 8,
    "id": 755,
    "name": "Morelull",
    "number": "755",
    "slug": "morelull",
    "type": [
      "grass",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Flying",
      "Ice",
      "Poison"
    ],
    "weight": 3.3
  },
  {
    "abilities": [
      "Effect Spore",
      "Illuminate"
    ],
    "featured": "true",
    "height": 39,
    "id": 756,
    "name": "Shiinotic",
    "number": "756",
    "slug": "shiinotic",
    "type": [
      "grass",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Flying",
      "Ice",
      "Poison"
    ],
    "weight": 25.4
  },
  {
    "abilities": [
      "Corrosion"
    ],
    "featured": "true",
    "height": 24,
    "id": 757,
    "name": "Salandit",
    "number": "757",
    "slug": "salandit",
    "type": [
      "poison",
      "fire"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Ground",
      "Rock"
    ],
    "weight": 10.6
  },
  {
    "abilities": [
      "Corrosion"
    ],
    "featured": "true",
    "height": 47,
    "id": 758,
    "name": "Salazzle",
    "number": "758",
    "slug": "salazzle",
    "type": [
      "poison",
      "fire"
    ],
    "weakness": [
      "Water",
      "Psychic",
      "Ground",
      "Rock"
    ],
    "weight": 48.9
  },
  {
    "abilities": [
      "Fluffy",
      "Klutz"
    ],
    "featured": "true",
    "height": 20,
    "id": 759,
    "name": "Stufful",
    "number": "759",
    "slug": "stufful",
    "type": [
      "normal",
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy",
      "Fighting"
    ],
    "weight": 15
  },
  {
    "abilities": [
      "Fluffy",
      "Klutz"
    ],
    "featured": "true",
    "height": 83,
    "id": 760,
    "name": "Bewear",
    "number": "760",
    "slug": "bewear",
    "type": [
      "normal",
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy",
      "Fighting"
    ],
    "weight": 297.6
  },
  {
    "abilities": [
      "Leaf Guard",
      "Oblivious"
    ],
    "featured": "true",
    "height": 12,
    "id": 761,
    "name": "Bounsweet",
    "number": "761",
    "slug": "bounsweet",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 7.1
  },
  {
    "abilities": [
      "Leaf Guard",
      "Oblivious"
    ],
    "featured": "true",
    "height": 28,
    "id": 762,
    "name": "Steenee",
    "number": "762",
    "slug": "steenee",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 18.1
  },
  {
    "abilities": [
      "Leaf Guard",
      "Queenly Majesty"
    ],
    "featured": "true",
    "height": 47,
    "id": 763,
    "name": "Tsareena",
    "number": "763",
    "slug": "tsareena",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 47.2
  },
  {
    "abilities": [
      "Flower Veil",
      "Triage"
    ],
    "featured": "true",
    "height": 4,
    "id": 764,
    "name": "Comfey",
    "number": "764",
    "slug": "comfey",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 0.7
  },
  {
    "abilities": [
      "Inner Focus",
      "Telepathy"
    ],
    "featured": "true",
    "height": 59,
    "id": 765,
    "name": "Oranguru",
    "number": "765",
    "slug": "oranguru",
    "type": [
      "normal",
      "psychic"
    ],
    "weakness": [
      "Dark",
      "Bug"
    ],
    "weight": 167.6
  },
  {
    "abilities": [
      "Receiver"
    ],
    "featured": "true",
    "height": 79,
    "id": 766,
    "name": "Passimian",
    "number": "766",
    "slug": "passimian",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 182.5
  },
  {
    "abilities": [
      "Wimp Out"
    ],
    "featured": "true",
    "height": 20,
    "id": 767,
    "name": "Wimpod",
    "number": "767",
    "slug": "wimpod",
    "type": [
      "bug",
      "water"
    ],
    "weakness": [
      "Flying",
      "Electric",
      "Rock"
    ],
    "weight": 26.5
  },
  {
    "abilities": [
      "Emergency Exit"
    ],
    "featured": "true",
    "height": 79,
    "id": 768,
    "name": "Golisopod",
    "number": "768",
    "slug": "golisopod",
    "type": [
      "bug",
      "water"
    ],
    "weakness": [
      "Flying",
      "Electric",
      "Rock"
    ],
    "weight": 238.1
  },
  {
    "abilities": [
      "Water Compaction"
    ],
    "featured": "true",
    "height": 20,
    "id": 769,
    "name": "Sandygast",
    "number": "769",
    "slug": "sandygast",
    "type": [
      "ghost",
      "ground"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Water",
      "Ice"
    ],
    "weight": 154.3
  },
  {
    "abilities": [
      "Water Compaction"
    ],
    "featured": "true",
    "height": 51,
    "id": 770,
    "name": "Palossand",
    "number": "770",
    "slug": "palossand",
    "type": [
      "ghost",
      "ground"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Water",
      "Ice"
    ],
    "weight": 551.2
  },
  {
    "abilities": [
      "Innards Out"
    ],
    "featured": "true",
    "height": 12,
    "id": 771,
    "name": "Pyukumuku",
    "number": "771",
    "slug": "pyukumuku",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 2.6
  },
  {
    "abilities": [
      "Battle Armor"
    ],
    "featured": "true",
    "height": 75,
    "id": 772,
    "name": "Type: Null",
    "number": "772",
    "slug": "type-null",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 265.7
  },
  {
    "abilities": [
      "RKS System"
    ],
    "featured": "true",
    "height": 91,
    "id": 773,
    "name": "Silvally",
    "number": "773",
    "slug": "silvally",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 221.6
  },
  {
    "abilities": [
      "Shields Down"
    ],
    "featured": "true",
    "height": 12,
    "id": 774,
    "name": "Minior",
    "number": "774",
    "slug": "minior",
    "type": [
      "rock",
      "flying"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 0.7
  },
  {
    "abilities": [
      "Comatose"
    ],
    "featured": "true",
    "height": 16,
    "id": 775,
    "name": "Komala",
    "number": "775",
    "slug": "komala",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 43.9
  },
  {
    "abilities": [
      "Shell Armor"
    ],
    "featured": "true",
    "height": 79,
    "id": 776,
    "name": "Turtonator",
    "number": "776",
    "slug": "turtonator",
    "type": [
      "fire",
      "dragon"
    ],
    "weakness": [
      "Ground",
      "Rock",
      "Dragon"
    ],
    "weight": 467.4
  },
  {
    "abilities": [
      "Iron Barbs",
      "Lightning Rod"
    ],
    "featured": "true",
    "height": 12,
    "id": 777,
    "name": "Togedemaru",
    "number": "777",
    "slug": "togedemaru",
    "type": [
      "electric",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 7.3
  },
  {
    "abilities": [
      "Disguise"
    ],
    "featured": "true",
    "height": 8,
    "id": 778,
    "name": "Mimikyu",
    "number": "778",
    "slug": "mimikyu",
    "type": [
      "ghost",
      "fairy"
    ],
    "weakness": [
      "Ghost",
      "Steel"
    ],
    "weight": 1.5
  },
  {
    "abilities": [
      "Dazzling",
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 35,
    "id": 779,
    "name": "Bruxish",
    "number": "779",
    "slug": "bruxish",
    "type": [
      "water",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Grass",
      "Electric",
      "Bug"
    ],
    "weight": 41.9
  },
  {
    "abilities": [
      "Berserk",
      "Sap Sipper"
    ],
    "featured": "true",
    "height": 118,
    "id": 780,
    "name": "Drampa",
    "number": "780",
    "slug": "drampa",
    "type": [
      "normal",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Fighting",
      "Ice",
      "Dragon"
    ],
    "weight": 407.9
  },
  {
    "abilities": [
      "Steelworker"
    ],
    "featured": "true",
    "height": 154,
    "id": 781,
    "name": "Dhelmise",
    "number": "781",
    "slug": "dhelmise",
    "type": [
      "ghost",
      "grass"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Dark",
      "Ice"
    ],
    "weight": 463
  },
  {
    "abilities": [
      "Bulletproof",
      "Soundproof"
    ],
    "featured": "true",
    "height": 24,
    "id": 782,
    "name": "Jangmo-o",
    "number": "782",
    "slug": "jangmo-o",
    "type": [
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 65.5
  },
  {
    "abilities": [
      "Bulletproof",
      "Soundproof"
    ],
    "featured": "true",
    "height": 47,
    "id": 783,
    "name": "Hakamo-o",
    "number": "783",
    "slug": "hakamo-o",
    "type": [
      "dragon",
      "fighting"
    ],
    "weakness": [
      "Fairy",
      "Flying",
      "Psychic",
      "Ice",
      "Dragon"
    ],
    "weight": 103.6
  },
  {
    "abilities": [
      "Bulletproof",
      "Soundproof"
    ],
    "featured": "true",
    "height": 63,
    "id": 784,
    "name": "Kommo-o",
    "number": "784",
    "slug": "kommo-o",
    "type": [
      "dragon",
      "fighting"
    ],
    "weakness": [
      "Fairy",
      "Flying",
      "Psychic",
      "Ice",
      "Dragon"
    ],
    "weight": 172.4
  },
  {
    "abilities": [
      "Electric Surge"
    ],
    "featured": "true",
    "height": 71,
    "id": 785,
    "name": "Tapu Koko",
    "number": "785",
    "slug": "tapu-koko",
    "type": [
      "electric",
      "fairy"
    ],
    "weakness": [
      "Poison",
      "Ground"
    ],
    "weight": 45.2
  },
  {
    "abilities": [
      "Psychic Surge"
    ],
    "featured": "true",
    "height": 47,
    "id": 786,
    "name": "Tapu Lele",
    "number": "786",
    "slug": "tapu-lele",
    "type": [
      "psychic",
      "fairy"
    ],
    "weakness": [
      "Ghost",
      "Steel",
      "Poison"
    ],
    "weight": 41
  },
  {
    "abilities": [
      "Grassy Surge"
    ],
    "featured": "true",
    "height": 75,
    "id": 787,
    "name": "Tapu Bulu",
    "number": "787",
    "slug": "tapu-bulu",
    "type": [
      "grass",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fire",
      "Flying",
      "Ice",
      "Poison"
    ],
    "weight": 100.3
  },
  {
    "abilities": [
      "Misty Surge"
    ],
    "featured": "true",
    "height": 51,
    "id": 788,
    "name": "Tapu Fini",
    "number": "788",
    "slug": "tapu-fini",
    "type": [
      "water",
      "fairy"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Poison"
    ],
    "weight": 46.7
  },
  {
    "abilities": [
      "Unaware"
    ],
    "featured": "true",
    "height": 8,
    "id": 789,
    "name": "Cosmog",
    "number": "789",
    "slug": "cosmog",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 0.2
  },
  {
    "abilities": [
      "Sturdy"
    ],
    "featured": "true",
    "height": 4,
    "id": 790,
    "name": "Cosmoem",
    "number": "790",
    "slug": "cosmoem",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 2204.4
  },
  {
    "abilities": [
      "Full Metal Body"
    ],
    "featured": "true",
    "height": 134,
    "id": 791,
    "name": "Solgaleo",
    "number": "791",
    "slug": "solgaleo",
    "type": [
      "psychic",
      "steel"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Dark",
      "Ground"
    ],
    "weight": 507.1
  },
  {
    "abilities": [
      "Shadow Shield"
    ],
    "featured": "true",
    "height": 157,
    "id": 792,
    "name": "Lunala",
    "number": "792",
    "slug": "lunala",
    "type": [
      "psychic",
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 264.6
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 47,
    "id": 793,
    "name": "Nihilego",
    "number": "793",
    "slug": "nihilego",
    "type": [
      "rock",
      "poison"
    ],
    "weakness": [
      "Steel",
      "Water",
      "Psychic",
      "Ground"
    ],
    "weight": 122.4
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 94,
    "id": 794,
    "name": "Buzzwole",
    "number": "794",
    "slug": "buzzwole",
    "type": [
      "bug",
      "fighting"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 735.5
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 71,
    "id": 795,
    "name": "Pheromosa",
    "number": "795",
    "slug": "pheromosa",
    "type": [
      "bug",
      "fighting"
    ],
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 55.1
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 150,
    "id": 796,
    "name": "Xurkitree",
    "number": "796",
    "slug": "xurkitree",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 220.5
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 362,
    "id": 797,
    "name": "Celesteela",
    "number": "797",
    "slug": "celesteela",
    "type": [
      "steel",
      "flying"
    ],
    "weakness": [
      "Fire",
      "Electric"
    ],
    "weight": 2204.4
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 12,
    "id": 798,
    "name": "Kartana",
    "number": "798",
    "slug": "kartana",
    "type": [
      "grass",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting"
    ],
    "weight": 0.2
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 217,
    "id": 799,
    "name": "Guzzlord",
    "number": "799",
    "slug": "guzzlord",
    "type": [
      "dark",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Fighting",
      "Bug",
      "Ice",
      "Dragon"
    ],
    "weight": 1957.7
  },
  {
    "abilities": [
      "Neuroforce"
    ],
    "featured": "true",
    "height": 295,
    "id": 800,
    "name": "Necrozma",
    "number": "800",
    "slug": "necrozma",
    "type": [
      "psychic",
      "dragon"
    ],
    "weakness": [
      "Ghost",
      "Ice",
      "Dragon",
      "Dark",
      "Fairy",
      "Bug"
    ],
    "weight": 507.1
  },
  {
    "abilities": [
      "Soul-Heart"
    ],
    "featured": "true",
    "height": 39,
    "id": 801,
    "name": "Magearna",
    "number": "801",
    "slug": "magearna",
    "type": [
      "steel",
      "fairy"
    ],
    "weakness": [
      "Fire",
      "Ground"
    ],
    "weight": 177.5
  },
  {
    "abilities": [
      "Technician"
    ],
    "featured": "true",
    "height": 28,
    "id": 802,
    "name": "Marshadow",
    "number": "802",
    "slug": "marshadow",
    "type": [
      "fighting",
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 48.9
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 24,
    "id": 803,
    "name": "Poipole",
    "number": "803",
    "slug": "poipole",
    "type": [
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 4
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 142,
    "id": 804,
    "name": "Naganadel",
    "number": "804",
    "slug": "naganadel",
    "type": [
      "poison",
      "dragon"
    ],
    "weakness": [
      "Psychic",
      "Ground",
      "Ice",
      "Dragon"
    ],
    "weight": 330.7
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 217,
    "id": 805,
    "name": "Stakataka",
    "number": "805",
    "slug": "stakataka",
    "type": [
      "rock",
      "steel"
    ],
    "weakness": [
      "Water",
      "Fighting",
      "Ground"
    ],
    "weight": 1807.8
  },
  {
    "abilities": [
      "Beast Boost"
    ],
    "featured": "true",
    "height": 71,
    "id": 806,
    "name": "Blacephalon",
    "number": "806",
    "slug": "blacephalon",
    "type": [
      "fire",
      "ghost"
    ],
    "weakness": [
      "Water",
      "Ghost",
      "Ground",
      "Dark",
      "Rock"
    ],
    "weight": 28.7
  },
  {
    "abilities": [
      "Volt Absorb"
    ],
    "featured": "true",
    "height": 59,
    "id": 807,
    "name": "Zeraora",
    "number": "807",
    "slug": "zeraora",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 98.1
  },
  {
    "abilities": [
      "Magnet Pull"
    ],
    "featured": "true",
    "height": 8,
    "id": 808,
    "name": "Meltan",
    "number": "808",
    "slug": "meltan",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 17.6
  },
  {
    "abilities": [
      "Iron Fist"
    ],
    "featured": "true",
    "height": 98,
    "id": 809,
    "name": "Melmetal",
    "number": "809",
    "slug": "melmetal",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 1763.7
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 12,
    "id": 810,
    "name": "Grookey",
    "number": "810",
    "slug": "grookey",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 11
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 28,
    "id": 811,
    "name": "Thwackey",
    "number": "811",
    "slug": "thwackey",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 30.9
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "featured": "true",
    "height": 83,
    "id": 812,
    "name": "Rillaboom",
    "number": "812",
    "slug": "rillaboom",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 198.4
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 12,
    "id": 813,
    "name": "Scorbunny",
    "number": "813",
    "slug": "scorbunny",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 9.9
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 24,
    "id": 814,
    "name": "Raboot",
    "number": "814",
    "slug": "raboot",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 19.8
  },
  {
    "abilities": [
      "Blaze"
    ],
    "featured": "true",
    "height": 55,
    "id": 815,
    "name": "Cinderace",
    "number": "815",
    "slug": "cinderace",
    "type": [
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": 72.8
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 12,
    "id": 816,
    "name": "Sobble",
    "number": "816",
    "slug": "sobble",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 28,
    "id": 817,
    "name": "Drizzile",
    "number": "817",
    "slug": "drizzile",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 25.4
  },
  {
    "abilities": [
      "Torrent"
    ],
    "featured": "true",
    "height": 75,
    "id": 818,
    "name": "Inteleon",
    "number": "818",
    "slug": "inteleon",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 99.6
  },
  {
    "abilities": [
      "Cheek Pouch"
    ],
    "featured": "true",
    "height": 12,
    "id": 819,
    "name": "Skwovet",
    "number": "819",
    "slug": "skwovet",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 5.5
  },
  {
    "abilities": [
      "Cheek Pouch"
    ],
    "featured": "true",
    "height": 24,
    "id": 820,
    "name": "Greedent",
    "number": "820",
    "slug": "greedent",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 13.2
  },
  {
    "abilities": [
      "Keen Eye",
      "Unnerve"
    ],
    "featured": "true",
    "height": 8,
    "id": 821,
    "name": "Rookidee",
    "number": "821",
    "slug": "rookidee",
    "type": [
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 4
  },
  {
    "abilities": [
      "Keen Eye",
      "Unnerve"
    ],
    "featured": "true",
    "height": 31,
    "id": 822,
    "name": "Corvisquire",
    "number": "822",
    "slug": "corvisquire",
    "type": [
      "flying"
    ],
    "weakness": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "weight": 35.3
  },
  {
    "abilities": [
      "Pressure",
      "Unnerve"
    ],
    "featured": "true",
    "height": 551,
    "id": 823,
    "name": "Corviknight",
    "number": "823",
    "slug": "corviknight",
    "type": [
      "flying",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Electric"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Compound Eyes",
      "Swarm"
    ],
    "featured": "true",
    "height": 16,
    "id": 824,
    "name": "Blipbug",
    "number": "824",
    "slug": "blipbug",
    "type": [
      "bug"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": 17.6
  },
  {
    "abilities": [
      "Compound Eyes",
      "Swarm"
    ],
    "featured": "true",
    "height": 16,
    "id": 825,
    "name": "Dottler",
    "number": "825",
    "slug": "dottler",
    "type": [
      "bug",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Dark",
      "Rock",
      "Bug"
    ],
    "weight": 43
  },
  {
    "abilities": [
      "Frisk",
      "Swarm"
    ],
    "featured": "true",
    "height": 551,
    "id": 826,
    "name": "Orbeetle",
    "number": "826",
    "slug": "orbeetle",
    "type": [
      "bug",
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Fire",
      "Flying",
      "Dark",
      "Rock",
      "Bug"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Run Away",
      "Unburden"
    ],
    "featured": "true",
    "height": 24,
    "id": 827,
    "name": "Nickit",
    "number": "827",
    "slug": "nickit",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 19.6
  },
  {
    "abilities": [
      "Run Away",
      "Unburden"
    ],
    "featured": "true",
    "height": 47,
    "id": 828,
    "name": "Thievul",
    "number": "828",
    "slug": "thievul",
    "type": [
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 43.9
  },
  {
    "abilities": [
      "Cotton Down",
      "Regenerator"
    ],
    "featured": "true",
    "height": 16,
    "id": 829,
    "name": "Gossifleur",
    "number": "829",
    "slug": "gossifleur",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 4.9
  },
  {
    "abilities": [
      "Cotton Down",
      "Regenerator"
    ],
    "featured": "true",
    "height": 20,
    "id": 830,
    "name": "Eldegoss",
    "number": "830",
    "slug": "eldegoss",
    "type": [
      "grass"
    ],
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Poison",
      "Bug"
    ],
    "weight": 5.5
  },
  {
    "abilities": [
      "Fluffy",
      "Run Away"
    ],
    "featured": "true",
    "height": 24,
    "id": 831,
    "name": "Wooloo",
    "number": "831",
    "slug": "wooloo",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 13.2
  },
  {
    "abilities": [
      "Fluffy",
      "Steadfast"
    ],
    "featured": "true",
    "height": 51,
    "id": 832,
    "name": "Dubwool",
    "number": "832",
    "slug": "dubwool",
    "type": [
      "normal"
    ],
    "weakness": [
      "Fighting"
    ],
    "weight": 94.8
  },
  {
    "abilities": [
      "Shell Armor",
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 12,
    "id": 833,
    "name": "Chewtle",
    "number": "833",
    "slug": "chewtle",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 18.7
  },
  {
    "abilities": [
      "Shell Armor",
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 945,
    "id": 834,
    "name": "Drednaw",
    "number": "834",
    "slug": "drednaw",
    "type": [
      "water",
      "rock"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Ground"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Ball Fetch"
    ],
    "featured": "true",
    "height": 12,
    "id": 835,
    "name": "Yamper",
    "number": "835",
    "slug": "yamper",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 29.8
  },
  {
    "abilities": [
      "Strong Jaw"
    ],
    "featured": "true",
    "height": 39,
    "id": 836,
    "name": "Boltund",
    "number": "836",
    "slug": "boltund",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 75
  },
  {
    "abilities": [
      "Heatproof",
      "Steam Engine"
    ],
    "featured": "true",
    "height": 12,
    "id": 837,
    "name": "Rolycoly",
    "number": "837",
    "slug": "rolycoly",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 26.5
  },
  {
    "abilities": [
      "Flame Body",
      "Steam Engine"
    ],
    "featured": "true",
    "height": 43,
    "id": 838,
    "name": "Carkol",
    "number": "838",
    "slug": "carkol",
    "type": [
      "rock",
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 172
  },
  {
    "abilities": [
      "Flame Body",
      "Steam Engine"
    ],
    "featured": "true",
    "height": 1654,
    "id": 839,
    "name": "Coalossal",
    "number": "839",
    "slug": "coalossal",
    "type": [
      "rock",
      "fire"
    ],
    "weakness": [
      "Water",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Gluttony",
      "Ripen"
    ],
    "featured": "true",
    "height": 8,
    "id": 840,
    "name": "Applin",
    "number": "840",
    "slug": "applin",
    "type": [
      "grass",
      "dragon"
    ],
    "weakness": [
      "Flying",
      "Ice",
      "Dragon",
      "Poison",
      "Fairy",
      "Bug"
    ],
    "weight": 1.1
  },
  {
    "abilities": [
      "Gluttony",
      "Ripen"
    ],
    "featured": "true",
    "height": 945,
    "id": 841,
    "name": "Flapple",
    "number": "841",
    "slug": "flapple",
    "type": [
      "grass",
      "dragon"
    ],
    "weakness": [
      "Flying",
      "Ice",
      "Dragon",
      "Poison",
      "Fairy",
      "Bug"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Gluttony",
      "Ripen"
    ],
    "featured": "true",
    "height": 945,
    "id": 842,
    "name": "Appletun",
    "number": "842",
    "slug": "appletun",
    "type": [
      "grass",
      "dragon"
    ],
    "weakness": [
      "Flying",
      "Ice",
      "Dragon",
      "Poison",
      "Fairy",
      "Bug"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Sand Spit",
      "Shed Skin"
    ],
    "featured": "true",
    "height": 87,
    "id": 843,
    "name": "Silicobra",
    "number": "843",
    "slug": "silicobra",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 16.8
  },
  {
    "abilities": [
      "Sand Spit",
      "Shed Skin"
    ],
    "featured": "true",
    "height": 866,
    "id": 844,
    "name": "Sandaconda",
    "number": "844",
    "slug": "sandaconda",
    "type": [
      "ground"
    ],
    "weakness": [
      "Water",
      "Grass",
      "Ice"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Gulp Missile"
    ],
    "featured": "true",
    "height": 31,
    "id": 845,
    "name": "Cramorant",
    "number": "845",
    "slug": "cramorant",
    "type": [
      "flying",
      "water"
    ],
    "weakness": [
      "Electric",
      "Rock"
    ],
    "weight": 39.7
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 20,
    "id": 846,
    "name": "Arrokuda",
    "number": "846",
    "slug": "arrokuda",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Swift Swim"
    ],
    "featured": "true",
    "height": 51,
    "id": 847,
    "name": "Barraskewda",
    "number": "847",
    "slug": "barraskewda",
    "type": [
      "water"
    ],
    "weakness": [
      "Grass",
      "Electric"
    ],
    "weight": 66.1
  },
  {
    "abilities": [
      "Rattled",
      "Static"
    ],
    "featured": "true",
    "height": 16,
    "id": 848,
    "name": "Toxel",
    "number": "848",
    "slug": "toxel",
    "type": [
      "electric",
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 24.3
  },
  {
    "abilities": [],
    "featured": "true",
    "height": 945,
    "id": 849,
    "name": "Toxtricity",
    "number": "849",
    "slug": "toxtricity",
    "type": [
      "electric",
      "poison"
    ],
    "weakness": [
      "Psychic",
      "Ground"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Flash Fire",
      "White Smoke"
    ],
    "featured": "true",
    "height": 28,
    "id": 850,
    "name": "Sizzlipede",
    "number": "850",
    "slug": "sizzlipede",
    "type": [
      "fire",
      "bug"
    ],
    "weakness": [
      "Water",
      "Flying",
      "Rock"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Flash Fire",
      "White Smoke"
    ],
    "featured": "true",
    "height": 2953,
    "id": 851,
    "name": "Centiskorch",
    "number": "851",
    "slug": "centiskorch",
    "type": [
      "fire",
      "bug"
    ],
    "weakness": [
      "Water",
      "Flying",
      "Rock"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Limber"
    ],
    "featured": "true",
    "height": 24,
    "id": 852,
    "name": "Clobbopus",
    "number": "852",
    "slug": "clobbopus",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 8.8
  },
  {
    "abilities": [
      "Limber"
    ],
    "featured": "true",
    "height": 63,
    "id": 853,
    "name": "Grapploct",
    "number": "853",
    "slug": "grapploct",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 86
  },
  {
    "abilities": [
      "Weak Armor"
    ],
    "featured": "true",
    "height": 4,
    "id": 854,
    "name": "Sinistea",
    "number": "854",
    "slug": "sinistea",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 0.4
  },
  {
    "abilities": [
      "Weak Armor"
    ],
    "featured": "true",
    "height": 8,
    "id": 855,
    "name": "Polteageist",
    "number": "855",
    "slug": "polteageist",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 0.9
  },
  {
    "abilities": [
      "Anticipation",
      "Healer"
    ],
    "featured": "true",
    "height": 16,
    "id": 856,
    "name": "Hatenna",
    "number": "856",
    "slug": "hatenna",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 7.5
  },
  {
    "abilities": [
      "Anticipation",
      "Healer"
    ],
    "featured": "true",
    "height": 24,
    "id": 857,
    "name": "Hattrem",
    "number": "857",
    "slug": "hattrem",
    "type": [
      "psychic"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Bug"
    ],
    "weight": 10.6
  },
  {
    "abilities": [
      "Anticipation",
      "Healer"
    ],
    "featured": "true",
    "height": 1024,
    "id": 858,
    "name": "Hatterene",
    "number": "858",
    "slug": "hatterene",
    "type": [
      "psychic",
      "fairy"
    ],
    "weakness": [
      "Ghost",
      "Steel",
      "Poison"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Frisk",
      "Prankster"
    ],
    "featured": "true",
    "height": 16,
    "id": 859,
    "name": "Impidimp",
    "number": "859",
    "slug": "impidimp",
    "type": [
      "dark",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fairy",
      "Poison"
    ],
    "weight": 12.1
  },
  {
    "abilities": [
      "Frisk",
      "Prankster"
    ],
    "featured": "true",
    "height": 31,
    "id": 860,
    "name": "Morgrem",
    "number": "860",
    "slug": "morgrem",
    "type": [
      "dark",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fairy",
      "Poison"
    ],
    "weight": 27.6
  },
  {
    "abilities": [
      "Frisk",
      "Prankster"
    ],
    "featured": "true",
    "height": 1260,
    "id": 861,
    "name": "Grimmsnarl",
    "number": "861",
    "slug": "grimmsnarl",
    "type": [
      "dark",
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Fairy",
      "Poison"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Guts",
      "Reckless"
    ],
    "featured": "true",
    "height": 63,
    "id": 862,
    "name": "Obstagoon",
    "number": "862",
    "slug": "obstagoon",
    "type": [
      "dark",
      "normal"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting"
    ],
    "weight": 101.4
  },
  {
    "abilities": [
      "Battle Armor",
      "Tough Claws"
    ],
    "featured": "true",
    "height": 31,
    "id": 863,
    "name": "Perrserker",
    "number": "863",
    "slug": "perrserker",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Weak Armor"
    ],
    "featured": "true",
    "height": 39,
    "id": 864,
    "name": "Cursola",
    "number": "864",
    "slug": "cursola",
    "type": [
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark"
    ],
    "weight": 0.9
  },
  {
    "abilities": [
      "Steadfast"
    ],
    "featured": "true",
    "height": 31,
    "id": 865,
    "name": "Sirfetch'd",
    "number": "865",
    "slug": "sirfetchd",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 257.9
  },
  {
    "abilities": [
      "Screen Cleaner",
      "Tangled Feet"
    ],
    "featured": "true",
    "height": 59,
    "id": 866,
    "name": "Mr. Rime",
    "number": "866",
    "slug": "mr-rime",
    "type": [
      "ice",
      "psychic"
    ],
    "weakness": [
      "Steel",
      "Ghost",
      "Fire",
      "Dark",
      "Rock",
      "Bug"
    ],
    "weight": 128.3
  },
  {
    "abilities": [
      "Wandering Spirit"
    ],
    "featured": "true",
    "height": 63,
    "id": 867,
    "name": "Runerigus",
    "number": "867",
    "slug": "runerigus",
    "type": [
      "ground",
      "ghost"
    ],
    "weakness": [
      "Water",
      "Ghost",
      "Grass",
      "Dark",
      "Ice"
    ],
    "weight": 146.8
  },
  {
    "abilities": [
      "Sweet Veil"
    ],
    "featured": "true",
    "height": 8,
    "id": 868,
    "name": "Milcery",
    "number": "868",
    "slug": "milcery",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 0.7
  },
  {
    "abilities": [
      "Sweet Veil"
    ],
    "featured": "true",
    "height": 1181,
    "id": 869,
    "name": "Alcremie",
    "number": "869",
    "slug": "alcremie",
    "type": [
      "fairy"
    ],
    "weakness": [
      "Steel",
      "Poison"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Battle Armor"
    ],
    "featured": "true",
    "height": 118,
    "id": 870,
    "name": "Falinks",
    "number": "870",
    "slug": "falinks",
    "type": [
      "fighting"
    ],
    "weakness": [
      "Psychic",
      "Flying",
      "Fairy"
    ],
    "weight": 136.7
  },
  {
    "abilities": [
      "Lightning Rod"
    ],
    "featured": "true",
    "height": 12,
    "id": 871,
    "name": "Pincurchin",
    "number": "871",
    "slug": "pincurchin",
    "type": [
      "electric"
    ],
    "weakness": [
      "Ground"
    ],
    "weight": 2.2
  },
  {
    "abilities": [
      "Shield Dust"
    ],
    "featured": "true",
    "height": 12,
    "id": 872,
    "name": "Snom",
    "number": "872",
    "slug": "snom",
    "type": [
      "ice",
      "bug"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Flying",
      "Rock"
    ],
    "weight": 8.4
  },
  {
    "abilities": [
      "Shield Dust"
    ],
    "featured": "true",
    "height": 51,
    "id": 873,
    "name": "Frosmoth",
    "number": "873",
    "slug": "frosmoth",
    "type": [
      "ice",
      "bug"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Flying",
      "Rock"
    ],
    "weight": 92.6
  },
  {
    "abilities": [
      "Power Spot"
    ],
    "featured": "true",
    "height": 98,
    "id": 874,
    "name": "Stonjourner",
    "number": "874",
    "slug": "stonjourner",
    "type": [
      "rock"
    ],
    "weakness": [
      "Water",
      "Steel",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weight": 1146.4
  },
  {
    "abilities": [
      "Ice Face"
    ],
    "featured": "true",
    "height": 55,
    "id": 875,
    "name": "Eiscue",
    "number": "875",
    "slug": "eiscue",
    "type": [
      "ice"
    ],
    "weakness": [
      "Fire",
      "Steel",
      "Fighting",
      "Rock"
    ],
    "weight": 196.2
  },
  {
    "abilities": [
      "Inner Focus",
      "Synchronize"
    ],
    "featured": "true",
    "height": 35,
    "id": 876,
    "name": "Indeedee",
    "number": "876",
    "slug": "indeedee",
    "type": [
      "psychic",
      "normal"
    ],
    "weakness": [
      "Dark",
      "Bug"
    ],
    "weight": 61.7
  },
  {
    "abilities": [
      "Hunger Switch"
    ],
    "featured": "true",
    "height": 12,
    "id": 877,
    "name": "Morpeko",
    "number": "877",
    "slug": "morpeko",
    "type": [
      "electric",
      "dark"
    ],
    "weakness": [
      "Fairy",
      "Bug",
      "Fighting",
      "Ground"
    ],
    "weight": 6.6
  },
  {
    "abilities": [
      "Sheer Force"
    ],
    "featured": "true",
    "height": 47,
    "id": 878,
    "name": "Cufant",
    "number": "878",
    "slug": "cufant",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 220.5
  },
  {
    "abilities": [
      "Sheer Force"
    ],
    "featured": "true",
    "height": 906,
    "id": 879,
    "name": "Copperajah",
    "number": "879",
    "slug": "copperajah",
    "type": [
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Hustle",
      "Volt Absorb"
    ],
    "featured": "true",
    "height": 71,
    "id": 880,
    "name": "Dracozolt",
    "number": "880",
    "slug": "dracozolt",
    "type": [
      "electric",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Ground",
      "Ice",
      "Dragon"
    ],
    "weight": 418.9
  },
  {
    "abilities": [
      "Static",
      "Volt Absorb"
    ],
    "featured": "true",
    "height": 91,
    "id": 881,
    "name": "Arctozolt",
    "number": "881",
    "slug": "arctozolt",
    "type": [
      "electric",
      "ice"
    ],
    "weakness": [
      "Fire",
      "Ground",
      "Fighting",
      "Rock"
    ],
    "weight": 330.7
  },
  {
    "abilities": [
      "Strong Jaw",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 91,
    "id": 882,
    "name": "Dracovish",
    "number": "882",
    "slug": "dracovish",
    "type": [
      "water",
      "dragon"
    ],
    "weakness": [
      "Fairy",
      "Dragon"
    ],
    "weight": 474
  },
  {
    "abilities": [
      "Ice Body",
      "Water Absorb"
    ],
    "featured": "true",
    "height": 79,
    "id": 883,
    "name": "Arctovish",
    "number": "883",
    "slug": "arctovish",
    "type": [
      "water",
      "ice"
    ],
    "weakness": [
      "Grass",
      "Electric",
      "Fighting",
      "Rock"
    ],
    "weight": 385.8
  },
  {
    "abilities": [
      "Heavy Metal",
      "Light Metal"
    ],
    "featured": "true",
    "height": 1693,
    "id": 884,
    "name": "Duraludon",
    "number": "884",
    "slug": "duraludon",
    "type": [
      "steel",
      "dragon"
    ],
    "weakness": [
      "Fighting",
      "Ground"
    ],
    "weight": 9999
  },
  {
    "abilities": [
      "Clear Body",
      "Infiltrator"
    ],
    "featured": "true",
    "height": 20,
    "id": 885,
    "name": "Dreepy",
    "number": "885",
    "slug": "dreepy",
    "type": [
      "dragon",
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 4.4
  },
  {
    "abilities": [
      "Clear Body",
      "Infiltrator"
    ],
    "featured": "true",
    "height": 55,
    "id": 886,
    "name": "Drakloak",
    "number": "886",
    "slug": "drakloak",
    "type": [
      "dragon",
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 24.3
  },
  {
    "abilities": [
      "Clear Body",
      "Infiltrator"
    ],
    "featured": "true",
    "height": 118,
    "id": 887,
    "name": "Dragapult",
    "number": "887",
    "slug": "dragapult",
    "type": [
      "dragon",
      "ghost"
    ],
    "weakness": [
      "Ghost",
      "Dark",
      "Fairy",
      "Ice",
      "Dragon"
    ],
    "weight": 110.2
  },
  {
    "abilities": [
      "Intrepid Sword"
    ],
    "featured": "true",
    "height": 110,
    "id": 888,
    "name": "Zacian",
    "number": "888",
    "slug": "zacian",
    "type": [
      "fairy",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Ground"
    ],
    "weight": 782.6
  },
  {
    "abilities": [
      "Dauntless Shield"
    ],
    "featured": "true",
    "height": 114,
    "id": 889,
    "name": "Zamazenta",
    "number": "889",
    "slug": "zamazenta",
    "type": [
      "fighting",
      "steel"
    ],
    "weakness": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "weight": 1730.6
  },
  {
    "abilities": [
      "Pressure"
    ],
    "featured": "true",
    "height": 787,
    "id": 890,
    "name": "Eternatus",
    "number": "890",
    "slug": "eternatus",
    "type": [
      "poison",
      "dragon"
    ],
    "weakness": [
      "Psychic",
      "Ground",
      "Ice",
      "Dragon"
    ],
    "weight": 2094.4
  }
]

export default pokeData;

export type { PokeDataType };