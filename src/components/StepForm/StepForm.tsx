import React, { Fragment, useState } from "react";
import StepHeader from "components/StepHeader";
import MapIcon from "@mui/icons-material/Map";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { styled, Theme } from "@mui/material/styles";
import { Button } from "components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import { DestinationForm, DimensionsForm } from "components";
import DeliveryOptions from "../DeliveryOptions/DeliveryOptions";

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
  const StepsHeaders = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }));

  const StepContainerWrapper = styled("div")(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(4),
    justifyContent: "center",
    gridAutoRows: "auto",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [(theme as Theme).breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(9),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  }));

  const StepActionsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  }));

  const StepTitleMovilWrapper = styled(Typography)(({ theme }) => ({
    display: "none",
    [(theme as Theme).breakpoints.down("md")]: {
      display: "block",
      textAlign: "center",
      marginTop: theme.spacing(2),
      color: "#04142a",
    },
  }));

  const [currentStep, setcurrentStep] = useState(2);

  return (
    <Fragment>
      <StepsHeaders>
        {steps.map(({ id, icono, texto }) => {
          return (
            <StepHeader key={`header-${texto}`} icon={icono} text={texto} />
          );
        })}
      </StepsHeaders>

      <StepTitleMovilWrapper variant="button" align="center">
        {steps.find((step) => step.id === currentStep)?.subTitle}
      </StepTitleMovilWrapper>

      <StepContainerWrapper>
        <DestinationForm />
        <DimensionsForm />
      </StepContainerWrapper>
      <StepActionsWrapper>
        <Button buttonType="secondary" text="Limpiar" />
        <Button
          buttonType="primary"
          text="Continuar"
          size="large"
          disabled
          endIcon={<ArrowForwardIosIcon />}
        />
      </StepActionsWrapper>
    </Fragment>
  );
};

export default StepForm;
