import { render, cleanup } from "@testing-library/react";
import { ParcelAddress } from "components";
import "@testing-library/jest-dom/extend-expect";
import FlightLandIcon from "@mui/icons-material/FlightLand";

afterEach(() => {
  cleanup();
});
const address_from = {
  province: "Ciudad de México",
  city: "Azcapotzalco",
  name: "Jose Fernando",
  zip: "02900",
  country: "MX",
  address1: "Av. Principal #234",
  company: "skydropx",
  address2: "Centro",
  phone: "5555555555",
  email: "skydropx@email.com",
};

describe("Navbar ParcelAddress", () => {
  it("should render a ParcelAddress", () => {
    const { getByTestId } = render(
      <ParcelAddress
        address={address_from}
        indicator="Origen"
        icon={FlightLandIcon}
        data-testid="ParcelAddressTest-id"
      />
    );
    expect(getByTestId).not.toBeNull();
    const parcelAddress = getByTestId("ParcelAddressTest-id");
    expect(parcelAddress).toBeInTheDocument();
    expect(parcelAddress).not.toBeUndefined();
    expect(parcelAddress).toHaveStyle({
      display: "flex",
    });
  });
});
