import { heroes } from "../data/heroes";

export const getHeroesById = function (id) {
  return heroes.find((heroe) => heroe.id === id);
};

// export default getHeroesById;
