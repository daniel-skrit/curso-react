import { heroes } from "../data/heroes";

export const getHeroesByName = (search) => {
  search = search.toLocaleLowerCase().trim();
  if (search.length === 0) return [];
  return heroes.filter((heroe) => heroe.superhero.toLocaleLowerCase().includes(search));
};
