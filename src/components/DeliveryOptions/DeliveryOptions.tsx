import React, { Fragment, useState } from "react";
import { ParcelPreview } from "components";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { included } from "./rates";
import DeliveryItem from "../DeliveryItem/DeliveryItem";

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
const AccordionDetailsWrapper = styled(AccordionDetails)(({ theme }) => ({
  marginTop: 10,
  padding: "8px 8px 16px 16px",
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowBackIosIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(360deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(270deg)",
    color: theme.palette.primary.main,
  },
  padding: 0,
  color: "#04142a",
}));

const DeliveryOptions = () => {
  const { address_from, address_to, parcels } = shipmentJson;
  const parcel = parcels[0];

  //solo las opciones de envio
  const deliveryOptions = included?.filter(({ type }) => type === "rates");

  const [deliverySelected, setdeliverySelected] = useState("");

  console.log(deliverySelected);
  return (
    <Fragment>
      <Accordion defaultExpanded elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="overline">Detalle del paquete</Typography>
        </AccordionSummary>
        <AccordionDetailsWrapper>
          <Grid container spacing={2}>
            <ParcelPreview
              address_from={address_from}
              address_to={address_to}
              parcel={parcel}
            />
          </Grid>
        </AccordionDetailsWrapper>
      </Accordion>
      <Typography variant="overline">Paqueteria</Typography>
      <Grid container spacing={2}>
        {deliveryOptions?.map(({ id, attributes }) => (
          <Grid item xs={6} md={4} key={id}>
            <DeliveryItem
              key={`opcion${id}`}
              provider={attributes?.provider as string}
              service_level={attributes.service_level_name as string}
              days={attributes.days as number}
              pricing={attributes.total_pricing as string}
              currency={attributes.currency_local as string}
              selected={deliverySelected === id}
              onClick={() => {
                setdeliverySelected(id);
              }}
              typechip="default"
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default DeliveryOptions;
