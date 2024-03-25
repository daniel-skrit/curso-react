import FirstApp from "../src/FirstApp";
import { render, screen } from "@testing-library/react";

describe("", () => {
  const title = "Hola soy un titulo";
  test("debe de hacer match con el snapshot ", () => {
    const {container} = render( <FirstApp title={title}/>);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar "Hola soy un titulo ', () => {
    const {container} = render( <FirstApp title={title}/>);
    // screen.debug();
    expect ( screen.getByText(title)).toBeTruthy();
  })
  
  test('debe de mostrar el titulo en un h1', () => {
     render( <FirstApp title={title}/>);
    expect( screen.getByRole("heading", { level: 1}).innerHTML).toContain(title);
  })
  
});
