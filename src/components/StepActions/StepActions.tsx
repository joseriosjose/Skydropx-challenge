import { Button } from "components";
import React from "react";
import { StepActionsWrapper } from "./StepActionsStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StepActionsProps } from "interfaces/StepPropsTypes";

const StepActions = ({
  currentStep,
  next,
  previus,
  stepSize,
}: StepActionsProps) => {
  return (
    <StepActionsWrapper>
      {currentStep !== 0 && (
        <Button buttonType="secondary" text="Regresar" onClick={previus} />
      )}
      <Button
        buttonType="primary"
        text={stepSize - 1 === currentStep ? "Generar guia" : "Continuar"}
        size="large"
        onClick={next}
        endIcon={<ArrowForwardIosIcon />}
      />
    </StepActionsWrapper>
  );
};

export default StepActions;
