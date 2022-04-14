import React, { Fragment } from "react";
import { ParcelAddress } from "components";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AltoTextWrapper,
  LargoTextWrapper,
  ImgWrapper,
  PesoTextWrapper,
  AnchoTextWrapper,
  AccordionDetailsWrapper,
} from "./ParcelPreviewStyles";
import { Accordion, AccordionSummary, Grid, Typography } from "@mui/material";

const parcelIcon =
  "https://www.skydropx.com/assets/landing5/packing-icon-08a1985fa82f9e09d82de5613cdd07bf22d046fce6c582cab4686028bc4d3a61.svg";

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
  const { height, weight, width, length } = parcel;
  return (
    <Accordion defaultExpanded elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="overline">Detalle del paquete</Typography>
      </AccordionSummary>
      <AccordionDetailsWrapper>
        <Grid container spacing={2}>
          <AltoTextWrapper variant="body2">
            Alto: {height} (cm){" "}
          </AltoTextWrapper>
          <div>
            <LargoTextWrapper variant="body2">
              Largo: {length} (cm)
            </LargoTextWrapper>
            <ImgWrapper src={parcelIcon} />
            <PesoTextWrapper variant="body2">
              Peso: {weight} (Kg)
            </PesoTextWrapper>
          </div>
          <AnchoTextWrapper variant="body2">
            Ancho: {width} (cm)
          </AnchoTextWrapper>
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
        </Grid>
      </AccordionDetailsWrapper>
    </Accordion>
  );
};

export default ParcelPreview;
