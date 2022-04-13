import { render, cleanup } from "@testing-library/react";
import { DeliveryItem } from "components";
import { CustomThemeProvider, theme } from "providers";
import "@testing-library/jest-dom/extend-expect";
import { DeliveryItemType } from "components/DeliveryItem/DeliveryItem";

afterEach(() => {
  cleanup();
});

const DeliveryItemWithTheme = ({ ...props }: DeliveryItemType) => (
  <CustomThemeProvider>
    <DeliveryItem {...props} />
  </CustomThemeProvider>
);

describe("DeliveryItem render", () => {
  it("should render a better DeliveryItem", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <DeliveryItemWithTheme
        provider="Fedex"
        service_level="Envio rapido"
        days={3}
        pricing="190.0"
        currency="MXM"
        selected={false}
        typechip="better"
        onClick={onClick}
        data-testid="DeliveryItemTest-id"
      />
    );
    const element = getByTestId("DeliveryItemTest-id");
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
    const chipElement = getByTestId("ChipTets-id");
    expect(chipElement).toHaveStyle({
      "background-color": theme.palette.secondary.main,
    });
  });

  it("should render a faster DeliveryItem", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <DeliveryItemWithTheme
        provider="Fedex"
        service_level="Envio rapido"
        days={3}
        pricing="190.0"
        currency="MXM"
        selected={false}
        typechip="faster"
        onClick={onClick}
        data-testid="DeliveryItemTest-id"
      />
    );
    const element = getByTestId("DeliveryItemTest-id");
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();

    const chipElement = getByTestId("ChipTets-id");
    expect(chipElement).toHaveStyle({
      "background-color": theme.palette.primary.light,
    });
  });

  it("should render a default DeliveryItem", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <DeliveryItemWithTheme
        provider="Fedex"
        service_level="Envio rapido"
        days={3}
        pricing="190.0"
        currency="MXM"
        selected={false}
        typechip="default"
        onClick={onClick}
        data-testid="DeliveryItemTest-id"
      />
    );
    const element = getByTestId("DeliveryItemTest-id");
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a selected DeliveryItem", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <DeliveryItemWithTheme
        provider="Fedex"
        service_level="Envio rapido"
        days={3}
        pricing="190.0"
        currency="MXM"
        selected={true}
        typechip="default"
        onClick={onClick}
        data-testid="DeliveryItemTest-id"
      />
    );
    const element = getByTestId("DeliveryItemTest-id");
    expect(element).toBeValid();
    element.click();
    expect(onClick).toHaveBeenCalled();
    expect(element).toHaveStyle({
      "background-color": theme.palette.primary.light,
      transform: "scale(1.05)",
    });
  });
});
