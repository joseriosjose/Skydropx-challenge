import React, { Fragment, useMemo } from "react";
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
import { saveDelivery, saveRates } from "../../_redux/actions/Shipment.actions";
import { getLabel } from "../../_redux/thunks/Shipment.thunk";
import { Included } from "../../interfaces/ShipmentResponseInterface";

const DeliveryOptions = ({
  currentStep,
  previus,
  stepSize,
  reset,
}: StepActionsProps) => {
  const dispatch = useDispatch();
  const {
    informationParcel: { weight, height, width, length, zipFrom, zipTo },
    rates,
    selectedDelivery,
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
  const handleSelected = (id: string) => {
    dispatch(saveDelivery(id));
  };

  const handleNext = () => {
    dispatch(getLabel(Number(selectedDelivery)));
  };

  const handlePrevius = () => {
    dispatch(saveDelivery(""));
    dispatch(saveRates([] as Included[]));
    previus();
  };

  const VALID_DELIVERY = useMemo(() => {
    return Boolean(selectedDelivery);
  }, [selectedDelivery]);

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
        {rates.length === 0 && !loading && (
          <>
            <Typography variant="overline" textAlign="center">
              No se encontraron paqueterias disponibles con tus criterios de
              busqueda
            </Typography>
            <Typography variant="overline" textAlign="center">
              intenta ingresando nuevos datos.
            </Typography>
          </>
        )}
      </StepContainerWrapper>
      <StepActions
        reset={reset}
        enabled={VALID_DELIVERY}
        stepSize={stepSize}
        currentStep={currentStep}
        next={handleNext}
        previus={handlePrevius}
      />
    </Fragment>
  );
};

export default DeliveryOptions;
