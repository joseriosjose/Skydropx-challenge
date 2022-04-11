import { render, cleanup } from "@testing-library/react";
import NavBar from "../NavBar";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

describe("Navbar render", () => {
  it("should render a Navbar", () => {
    const { getByTestId } = render(<NavBar data-testid="NavbarTest-id" />);
    expect(getByTestId).not.toBeNull();
    const todoElement = getByTestId("NavbarTest-id");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).not.toBeUndefined();
  });
});
