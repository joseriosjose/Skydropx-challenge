import React, { Fragment } from "react";
import { ParcelPreview } from "components";
import { Grid } from "@mui/material";

const shipmentJson = {
  address_from: {
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
  },
  parcels: [
    {
      weight: 3,
      distance_unit: "CM",
      mass_unit: "KG",
      height: 10,
      width: 10,
      length: 10,
    },
  ],
  address_to: {
    province: "Jalisco",
    city: "Guadalajara",
    name: "Jorge Fernández",
    zip: "44100",
    country: "MX",
    address1: " Av. Lázaro Cárdenas #234",
    company: "-",
    address2: "Americana",
    phone: "5555555555",
    email: "ejemplo@skydropx.com",
    reference: "Frente a tienda de abarro",
    contents: "Hola",
  },
};
const DeliveryOptions = () => {
  const { address_from, address_to, parcels } = shipmentJson;
  const parcel = parcels[0];
  return (
    <Fragment>
      <Grid container spacing={2}>
        <ParcelPreview
          address_from={address_from}
          address_to={address_to}
          parcel={parcel}
        />
      </Grid>
      DeliveryOptions
    </Fragment>
  );
};

export default DeliveryOptions;
