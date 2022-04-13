import { render, cleanup } from "@testing-library/react";
import NavBar from "../NavBar";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

describe("StepHeader render", () => {
  it("should render a StepHeader Active", () => {
    const { getByTestId } = render(<NavBar data-testid="NavbarTest-id" />);
    expect(getByTestId).not.toBeNull();
    const stepHeader = getByTestId("NavbarTest-id");
    expect(stepHeader).toBeInTheDocument();
    expect(stepHeader).not.toBeUndefined();
  });
});

describe("StepHeader render", () => {
  it("should render a StepHeader inActive", () => {
    const { getByTestId } = render(<NavBar data-testid="NavbarTest-id" />);
    expect(getByTestId).not.toBeNull();
    const stepHeader = getByTestId("NavbarTest-id");
    expect(stepHeader).toBeInTheDocument();
    expect(stepHeader).not.toBeUndefined();
  });
});
