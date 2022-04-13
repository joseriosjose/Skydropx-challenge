import { render, cleanup } from "@testing-library/react";
import StepHeader from "../StepHeader";
import "@testing-library/jest-dom/extend-expect";
import { CustomThemeProvider, theme } from "providers";
import InventoryIcon from "@mui/icons-material/Inventory";
import { StepHeaderProps } from "components/StepHeader/StepHeader";

afterEach(() => {
  cleanup();
});

const StepHeaderWithTheme = ({ ...props }: StepHeaderProps) => (
  <CustomThemeProvider>
    <StepHeader {...props} />
  </CustomThemeProvider>
);

describe("StepHeader render", () => {
  it("should render a StepHeader Active", () => {
    const { getByTestId } = render(
      <StepHeaderWithTheme
        type="selected"
        icon={InventoryIcon}
        text="text"
        data-testid="StepHeaderTest-id"
      />
    );
    expect(getByTestId).not.toBeNull();
    const stepHeader = getByTestId("StepHeaderTest-id");
    expect(stepHeader).toBeInTheDocument();
    expect(stepHeader).not.toBeUndefined();
    expect(stepHeader).toHaveStyle({
      "background-color": theme.palette.primary.main,
    });
  });
  it("should render a StepHeader completed", () => {
    const { getByTestId } = render(
      <StepHeaderWithTheme
        type="completed"
        icon={InventoryIcon}
        text="text"
        data-testid="StepHeaderTest-id"
      />
    );
    expect(getByTestId).not.toBeNull();
    const stepHeader = getByTestId("StepHeaderTest-id");
    expect(stepHeader).toBeInTheDocument();
    expect(stepHeader).not.toBeUndefined();
    expect(stepHeader).toHaveStyle({
      "background-color": theme.palette.primary.light,
    });
  });
  it("should render a StepHeader inActive", () => {
    const { getByTestId } = render(
      <StepHeaderWithTheme
        type="default"
        icon={InventoryIcon}
        text="text"
        data-testid="StepHeaderTest-id"
      />
    );
    expect(getByTestId).not.toBeNull();
    const stepHeader = getByTestId("StepHeaderTest-id");
    expect(stepHeader).toBeInTheDocument();
    expect(stepHeader).not.toBeUndefined();
    expect(stepHeader).toHaveStyle({
      "background-color": "white",
    });
  });
});
