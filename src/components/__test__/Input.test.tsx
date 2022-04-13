import { useState } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { InputWrapperProps } from "components/Input/Input";
import { CustomThemeProvider } from "providers";
import "@testing-library/jest-dom/extend-expect";
import { Input } from "components";
import FlightLandIcon from "@mui/icons-material/FlightLand";

afterEach(() => {
  cleanup();
});

const InputWithTheme = ({ ...props }: InputWrapperProps) => (
  <CustomThemeProvider>
    <Input {...props} />
  </CustomThemeProvider>
);

function InputWrapperState() {
  const [value, setstate] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setstate(event.target.value);
  };
  return (
    <InputWithTheme
      icon={FlightLandIcon}
      label="Código postal de origen"
      placeholder="Ej. 68015"
      name="codigo"
      value={value}
      onChange={handleChange}
    />
  );
}

describe("Input render", () => {
  it("should render a Input default", () => {
    const { getByTestId } = render(<InputWrapperState />);
    expect(getByTestId).not.toBeNull();
    const todoElement = getByTestId("InputTest-id");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).not.toBeUndefined();
  });

  it("should render a Input new Value", () => {
    const { getByTestId } = render(<InputWrapperState />);
    expect(getByTestId).not.toBeNull();
    const todoElement = getByTestId("InputTest-id") as HTMLInputElement;
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).not.toBeUndefined();
    fireEvent.change(todoElement, { target: { value: "71222" } });
    expect(todoElement.value).toBe("71222");
  });
});
