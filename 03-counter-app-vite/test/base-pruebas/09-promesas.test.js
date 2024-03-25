import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 00-promesas", () => {
  
  test("getHeroesByIdAsync debe retornar un heroe", (done) => {
    const id = 2;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({ id: 2, name: "Spiderman", owner: "Marvel" });
      done();
    });
  });

  test("getHeroesByIdAsync debe retornar un error si heroe es undefined", (done) => {
    const id =1000;
    getHeroeByIdAsync(id)
    .then(hero => {
      expect( hero ).toBeFalsy();
      done();
    })
    .catch ( error => {
      expect( error ).toBe("No se pudo encontrar el héroe");
      done()
    })
  });
});
