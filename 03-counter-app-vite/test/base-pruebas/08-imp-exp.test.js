import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
describe("Prueba s en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por ID ", () => {
    const id = 2;
    const hero = getHeroeById(id);
    console.log(hero);
    expect(hero).toEqual({
      id: 2,
      name: "Spiderman",
      owner: "Marvel",
    });
  });

  test("getHeroeById debe de retornar undefined si no existe un id ", () => {
    const id = 1212;
    const hero = getHeroeById(id);
    expect(hero).toBe(undefined);
  });

  test("getHeroesByOwner debe de retornar un array de objetos ", () => {
    const heroesByOwner = [
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ];
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toEqual(heroesByOwner);
    expect(heroes.length).toEqual(heroesByOwner.length);
  });

  test("getHeroesByOwner debe de retornar un array de una longitud ", () => {
    const length = 2;
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(length);
  });
});
