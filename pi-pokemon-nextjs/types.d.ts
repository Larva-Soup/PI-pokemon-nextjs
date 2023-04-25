// type Pokemon = {
//   height: number;
//   id: number;
//   name: string;
//   sprites: {
//     ["official-artwork"]: {
//       front_default: string;
//     };
//   };
//   stats: [
//     hp: { base_stat: number },
//     attack: { base_stat: number },
//     defense: { base_stat: number },
//     special_attack: { base_stat: number },
//     special_defense: { base_stat: number },
//     speed: { base_stat: number }
//   ];
//   types: [
//     slot_1: { type: { name: string } },
//     slot_2: { type: { name: string } }
//   ];
//   weight: number;
// };

type Pokemon = {
  height: number;
  id: number;
  name: string;
  sprites: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  types: string[];
  weight: number;
};

type SearchResult = {
  query?: {
    pages?: Pokemon[];
  };
};
