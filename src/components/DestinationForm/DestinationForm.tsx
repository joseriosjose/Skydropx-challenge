import React, { Fragment, useMemo } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Input } from "components";
import useForm from "hooks/useForm";
import { handleOnlyNumber } from "utils/ValidatorsUtils";
import { StepActions } from "components";
import { StepContainerWrapper } from "../StepForm/StepFormStyles";
import { StepActionsProps } from "interfaces/StepPropsTypes";

import { useDispatch, useSelector } from "react-redux";
import { saveDirections } from "_redux/actions/Shipment.actions";
import { ShipmentState } from "_redux/reducers/Shipment.reducer";
import { GlobalState } from "_redux";

const validator = handleOnlyNumber(5);

const DestinationForm = ({
  currentStep,
  next,
  previus,
  stepSize,
  reset,
}: StepActionsProps) => {
  const dispatch = useDispatch();
  const {
    informationParcel: { zipFrom, zipTo },
  } = useSelector<GlobalState, ShipmentState>((store) => store.shipment);

  const { fields, register } = useForm(
    { zip_from: zipFrom, zip_to: zipTo },
    { zip_to: validator, zip_from: validator }
  );

  const handleNext = () => {
    const { zip_from, zip_to } = fields;
    if (zip_from.length === 5 && zip_to.length === 5) {
      dispatch(saveDirections({ zipFrom: zip_from, zipTo: zip_to }));
      next();
    }
  };

  const VALID_DIRECCIONS = useMemo(() => {
    const { zip_from, zip_to } = fields;
    return zip_from.length === 5 && zip_to.length === 5;
  }, [fields]);

  return (
    <Fragment>
      <StepContainerWrapper>
        <Input
          icon={FlightTakeoffIcon}
          label="Código postal de origen"
          placeholder="Ej. 68015"
          {...register("zip_from")}
        />
        <Input
          icon={FlightLandIcon}
          label="Código postal del destino"
          placeholder="Ej. 68015"
          {...register("zip_to")}
        />
      </StepContainerWrapper>
      <StepActions
        reset={reset}
        enabled={VALID_DIRECCIONS}
        stepSize={stepSize}
        currentStep={currentStep}
        next={handleNext}
        previus={previus}
      />
    </Fragment>
  );
};

export default DestinationForm;
