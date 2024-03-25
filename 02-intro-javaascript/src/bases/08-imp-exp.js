// import { heroes } from './data/heroes';
import  heroes, { owners } from '../data/heroes.js'


const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
};
const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
};

export {
    getHeroeById,
    getHeroesByOwner
}
// console.log(getHeroeById(2));
// console.log(getHeroesByOwner(owners[0]));
