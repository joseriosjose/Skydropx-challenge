import { render, cleanup } from "@testing-library/react";
import NavBar from "../NavBar";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

describe("Navbar render", () => {
  it("should render a Navbar", () => {
    const { getByTestId } = render(
      <NavBar urlImg="" data-testid="NavbarTest-id" />
    );
    expect(getByTestId).not.toBeNull();
    const navbar = getByTestId("NavbarTest-id");
    expect(navbar).toBeInTheDocument();
    expect(navbar).not.toBeUndefined();
  });
});
