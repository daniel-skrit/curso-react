import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
    test("getSaludo debe retornar 'Hola Fernando'", () => {
        let result = getSaludo("Fernando");
        expect(result).toBe("Hola Fernando");
    })
});