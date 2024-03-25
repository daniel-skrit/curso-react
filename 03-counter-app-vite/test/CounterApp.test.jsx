import { render,screen, fireEvent } from "@testing-library/react";
import CounterApp from "../src/CounterApp";
describe("", () => {
  const num = 10;
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={num} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial  ', () => {
    const { container } = render(<CounterApp value={num} />);
    expect(screen.getByText(num)).toBeTruthy();
  })
  
  test('debe de incremementra con el boton +1', () => {
    const { container } = render(<CounterApp value={num} />);
    fireEvent.click( screen.getByText("+1"));
    expect (screen.getByText("11")).toBeTruthy();
  })
    
  
  test('debe de diminuir con el boton -1', () => {
    const { container } = render(<CounterApp value={num} />);
    fireEvent.click( screen.getByText("-1"));
    expect (screen.getByText("9")).toBeTruthy();
  })
  
  test('debe de funcionar el boton de rese', () => {
    const { container } = render(<CounterApp value={13} />);
    
    fireEvent.click( screen.getByText("-1"));
    fireEvent.click( screen.getByText("-1"));
    fireEvent.click( screen.getByText("-1"));
    fireEvent.click( screen.getByText("-1"));
    fireEvent.click( screen.getByText("-1"));
    fireEvent.click(    screen.getByRole("button", {name: "btn-reset"}));
    expect (screen.getByText("13")).toBeTruthy();
  })
});
