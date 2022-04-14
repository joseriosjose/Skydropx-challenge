import React, { Fragment, useState } from "react";
import StepHeader from "components/StepHeader";
import MapIcon from "@mui/icons-material/Map";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Button } from "components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DestinationForm, DimensionsForm, DeliveryOptions } from "components";
import useStep from "hooks/useStep";
import {
  StepsHeaders,
  StepTitleMovilWrapper,
  StepContainerWrapper,
  StepActionsWrapper,
} from "./StepFormStyles";

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
  const { currentStep, Component, next, previus } = useStep([
    DestinationForm,
    DimensionsForm,
    DeliveryOptions,
  ]);

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

      <StepContainerWrapper>
        <Component />
      </StepContainerWrapper>
      <StepActionsWrapper>
        {currentStep !== 0 && (
          <Button buttonType="secondary" text="Regresar" onClick={previus} />
        )}
        <Button
          buttonType="primary"
          text="Continuar"
          size="large"
          onClick={next}
          endIcon={<ArrowForwardIosIcon />}
        />
      </StepActionsWrapper>
    </Fragment>
  );
};

export default StepForm;
