import React, { Fragment } from "react";
import { Grid, Typography, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ParcelAddress } from "components";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

export type ParcelType = {
  weight: number;
  distance_unit: string;
  mass_unit: string;
  height: number;
  width: number;
  length: number;
};

export type AddressType = {
  province: string;
  city: string;
  name: string;
  zip: string;
  country: string;
  address1: string;
  company: string;
  address2: string;
  phone: string;
  email: string;
};

export type AddressPreviewProps = {
  address_from: AddressType;
  address_to: AddressType;
  parcel: ParcelType;
};

const ParcelPreview = ({
  address_from,
  address_to,
  parcel,
}: AddressPreviewProps) => {
  return (
    <Fragment>
      <ParcelAddress
        address={address_from}
        indicator="Origen"
        icon={FlightTakeoffIcon}
      />

      <ParcelAddress
        address={address_to}
        indicator="Destino"
        icon={FlightLandIcon}
      />
    </Fragment>
  );
};

export default ParcelPreview;

/**  <AddressPreview
          indicator="Origen"
          province={address_from.province}
          city={address_from.city}
          address={address_from.address1}
          postalCode={address_from.zip}
          icon={FlightTakeoffIcon}
        />
        <AddressPreview
          indicator="Destino"
          province={address_to.province}
          city={address_to.city}
          address={address_to.address1}
          postalCode={address_to.zip}
          icon={FlightLandIcon}
        /> */
