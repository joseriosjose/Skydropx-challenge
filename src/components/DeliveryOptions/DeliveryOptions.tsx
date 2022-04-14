import React, { Fragment } from "react";
import { ParcelPreview, StepActions } from "components";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeliveryItem from "../DeliveryItem/DeliveryItem";
import {
  AccordionDetailsWrapper,
  AccordionSummary,
} from "./DeliveryOptionsStyles";
import { StepActionsProps } from "interfaces/StepPropsTypes";
import { StepContainerWrapper } from "components/StepForm/StepFormStyles";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "_redux";
import { ShipmentState } from "_redux/reducers/Shipment.reducer";
import { createShipment } from "utils/CreateShipmentUtil";
import { saveDelivery } from "../../_redux/actions/Shipment.actions";
import { getLabel } from "../../_redux/thunks/Shipment.thunk";

const DeliveryOptions = ({
  currentStep,
  next,
  previus,
  stepSize,
}: StepActionsProps) => {
  const dispatch = useDispatch();
  const {
    informationParcel: { weight, height, width, length, zipFrom, zipTo },
    rates,
    selectedDelivery,
  } = useSelector<GlobalState, ShipmentState>((store) => store.shipment);

  const { address_from, address_to, parcels } = createShipment({
    weight,
    height,
    width,
    length,
    zipFrom,
    zipTo,
  });
  const handleSelected = (id: string) => {
    console.log(id);
    dispatch(saveDelivery(id));
  };

  const handleNext = () => {
    dispatch(getLabel(Number(selectedDelivery)));
  };

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
          {rates?.map(({ id, attributes }) => (
            <Grid item xs={6} md={4} key={id}>
              <DeliveryItem
                key={`opcion${id}`}
                provider={attributes?.provider as string}
                service_level={attributes.service_level_name as string}
                days={attributes.days as number}
                pricing={attributes.total_pricing as string}
                currency={attributes.currency_local as string}
                selected={selectedDelivery === id}
                onClick={() => {
                  handleSelected(id);
                }}
                typechip="default"
              />
            </Grid>
          ))}
        </Grid>
      </StepContainerWrapper>
      <StepActions
        stepSize={stepSize}
        currentStep={currentStep}
        next={handleNext}
        previus={previus}
      />
    </Fragment>
  );
};

export default DeliveryOptions;
