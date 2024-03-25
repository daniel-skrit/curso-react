import { getHeroeById, getHeroesByOwner } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("28 dias despues");
//     let heroe = getHeroeById(1);
//     resolve(heroe);
//     reject("No se pudo encontrar el heroe")
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe: ", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.warn);
