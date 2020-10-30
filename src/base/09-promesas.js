import { getHeroesById } from "./base/08-import-export-heroes";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroesById(2);
//     console.log(heroe);
//     resolve(heroe);
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("then de la promesa");
//     console.log(heroe);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getHeroeByIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`No existe el heroe buscado con ID ${id}`);
      }
    }, 2000);
  });

  return promesa;
};

getHeroeByIdAsync(4)
  .then((heroe) => {
    console.log("then de la promesa");
    console.log(heroe);
  })
  .catch((err) => {
    console.log(err);
  });
