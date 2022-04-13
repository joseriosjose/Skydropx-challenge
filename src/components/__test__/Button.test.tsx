import { render, cleanup, getByTestId } from "@testing-library/react";
import { Button } from "components";
import { ButtonWrapperProps } from "components/Button/Button";
import { CustomThemeProvider } from "providers";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

const ButtonWithTheme = ({ ...props }: ButtonWrapperProps) => (
  <CustomThemeProvider>
    <Button {...props} />
  </CustomThemeProvider>
);

describe("Button render", () => {
  it("should render a Primary Button", () => {
    const label = "btnPrimary";
    const onClick = jest.fn();
    const { getByTestId } = render(
      <ButtonWithTheme
        text={label}
        buttonType="primary"
        data-testid="ButtonTest-id"
        onClick={onClick}
      />
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("ButtonTest-id");
    expect(element).toBeInTheDocument();
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a Secondary Button", () => {
    const label = "btnSecondary";
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button
        text={label}
        buttonType="secondary"
        data-testid="ButtonTest-id"
        onClick={onClick}
      />
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("ButtonTest-id");
    expect(element).toBeInTheDocument();
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
  });
});
