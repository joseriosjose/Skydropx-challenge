import { Button } from "components";
import React, { useEffect, useMemo, useState } from "react";
import { StepActionsWrapper } from "./StepActionsStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StepActionsProps } from "interfaces/StepPropsTypes";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "_redux";
import { ShipmentState } from "_redux/reducers/Shipment.reducer";
import { resetForm } from "_redux/actions/Shipment.actions";

const StepActions = ({
  currentStep,
  next,
  previus,
  stepSize,
  enabled,
  reset,
}: StepActionsProps) => {
  const { label } = useSelector<GlobalState, ShipmentState>(
    (store) => store.shipment
  );
  const [label_buton, setlabel_buton] = useState("Continuar");

  const dispatch = useDispatch();

  useEffect(() => {
    setlabel_buton("Continuar");
    if (stepSize - 1 === currentStep) setlabel_buton("Generar guia");
    if (label.label_url) setlabel_buton("Volver a cotizar");
  }, [label, , currentStep, stepSize]);

  const handleNext = () => {
    if (label.label_url) {
      dispatch(resetForm());
      reset();
    } else {
      next();
    }
  };

  return (
    <StepActionsWrapper>
      {currentStep !== 0 && (
        <Button buttonType="secondary" text="Regresar" onClick={previus} />
      )}
      <Button
        disabled={!enabled}
        buttonType="primary"
        text={label_buton}
        size="large"
        onClick={handleNext}
        endIcon={<ArrowForwardIosIcon />}
      />
    </StepActionsWrapper>
  );
};

export default StepActions;
