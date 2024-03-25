import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp.jsx";

describe("Pruebas en FirstApp", () => {
//   test("debe de hacer match con el snapshot", () => {
//     const title = "Hola Buenas";
//     const {container} = render(<FirstApp title={title}></FirstApp>);

//     expect(container).toMatchSnapshot();
//   });

  test("debe de mostrar el title en un h1", () => {
    const title = "Hola Buenas";
    const {container, getByText, getByTestId} = render(<FirstApp title={title}></FirstApp>);
    expect(getByText(title)).toBeTruthy();
    
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("debe de mostrar el subtitulo enviadp por props", () => {
    const title = "Hola Buenas";
    const subtitle = "Hola otra vez";
    const {container, getByText, getByTestId} = render(<FirstApp title={title} subtitle={subtitle}></FirstApp>);
    expect(getByText(subtitle)).toBeTruthy();

  });

});
