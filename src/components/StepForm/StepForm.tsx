import React, { Fragment, useState } from "react";
import StepHeader from "components/StepHeader";
import MapIcon from "@mui/icons-material/Map";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { styled } from "@mui/material/styles";

const steps = [
  { id: 0, icono: MapIcon, texto: "destino" },
  { id: 1, icono: InventoryIcon, texto: "dimensiones" },
  { id: 2, icono: LocalShippingIcon, texto: "opciones de envio" },
];

const StepForm = () => {
  const StepsHeaders = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }));
  const [currentStep, setcurrentStep] = useState(1);

  return (
    <Fragment>
      <StepsHeaders>
        {steps.map(({ id, icono, texto }) => {
          return (
            <StepHeader
              key={`header-${texto}`}
              icon={icono}
              text={texto}
              selected={currentStep === id}
            />
          );
        })}
      </StepsHeaders>
    </Fragment>
  );
};

export default StepForm;
