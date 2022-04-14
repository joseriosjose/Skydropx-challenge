import React, { Fragment } from "react";
import StepHeader from "components/StepHeader";
import MapIcon from "@mui/icons-material/Map";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { DestinationForm, DimensionsForm, DeliveryOptions } from "components";
import useStep from "hooks/useStep";
import { StepsHeaders, StepTitleMovilWrapper } from "./StepFormStyles";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { GlobalState } from "_redux";
import { ShipmentState } from "_redux/reducers/Shipment.reducer";

const steps = [
  { id: 0, icono: MapIcon, texto: "destino", subTitle: "Datos de envio" },
  {
    id: 1,
    icono: InventoryIcon,
    texto: "dimensiones",
    subTitle: "Datos del paquete",
  },
  {
    id: 2,
    icono: LocalShippingIcon,
    texto: "opciones de envio",
    subTitle: "Opciones de envio",
  },
];

const StepForm = () => {
  const { currentStep, next, previus } = useStep(steps.length);
  const { loading } = useSelector<GlobalState, ShipmentState>(
    (store) => store.shipment
  );

  return (
    <Fragment>
      <StepsHeaders>
        {steps.map(({ id, icono, texto }, index) => {
          return (
            <StepHeader
              key={`header-${texto}`}
              type={
                index === currentStep
                  ? "selected"
                  : index < currentStep
                  ? "completed"
                  : "default"
              }
              icon={icono}
              text={texto}
            />
          );
        })}
      </StepsHeaders>

      <StepTitleMovilWrapper variant="button" align="center">
        {steps.find((step) => step.id === currentStep)?.subTitle}
      </StepTitleMovilWrapper>

      {[DestinationForm, DimensionsForm, DeliveryOptions].map(
        (Component, index) =>
          index === currentStep ? (
            <Component
              stepSize={steps.length}
              currentStep={currentStep}
              next={next}
              previus={previus}
              key={index}
            />
          ) : null
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Fragment>
  );
};

export default StepForm;
