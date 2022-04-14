import React, { Fragment, useState } from "react";
import { ParcelPreview, StepActions } from "components";
import { Box, CircularProgress, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { included } from "./rates";
import DeliveryItem from "../DeliveryItem/DeliveryItem";
import {
  AccordionDetailsWrapper,
  AccordionSummary,
} from "./DeliveryOptionsStyles";
import { StepActionsProps } from "interfaces/StepPropsTypes";
import { StepContainerWrapper } from "components/StepForm/StepFormStyles";
import { useSelector } from "react-redux";
import { GlobalState } from "_redux";
import { ShipmentState } from "_redux/reducers/Shipment.reducer";
import { createShipment } from "utils/CreateShipmentUtil";

const DeliveryOptions = ({
  currentStep,
  next,
  previus,
  stepSize,
}: StepActionsProps) => {
  const {
    informationParcel: { weight, height, width, length, zipFrom, zipTo },
    rates,
    loading,
  } = useSelector<GlobalState, ShipmentState>((store) => store.shipment);

  const { address_from, address_to, parcels } = createShipment({
    weight,
    height,
    width,
    length,
    zipFrom,
    zipTo,
  });

  const [deliverySelected, setdeliverySelected] = useState("");

  return (
    <Fragment>
      <StepContainerWrapper>
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="overline">Detalle del paquete</Typography>
          </AccordionSummary>
          <AccordionDetailsWrapper>
            <Grid container spacing={2}>
              <ParcelPreview
                address_from={address_from}
                address_to={address_to}
                parcel={parcels[0]}
              />
            </Grid>
          </AccordionDetailsWrapper>
        </Accordion>
        <Typography variant="overline">Paqueteria</Typography>
        <Grid container spacing={2}>
          {loading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            rates?.map(({ id, attributes }) => (
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
            ))
          )}
        </Grid>
      </StepContainerWrapper>
      <StepActions
        stepSize={stepSize}
        currentStep={currentStep}
        next={next}
        previus={previus}
      />
    </Fragment>
  );
};

export default DeliveryOptions;
