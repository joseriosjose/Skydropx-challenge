import React, { Fragment } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Input } from "components";
import useForm from "hooks/useForm";
import { handleOnlyNumber } from "utils/ValidatorsUtils";
import { StepActions } from "components";
import { StepContainerWrapper } from "../StepForm/StepFormStyles";
import { StepActionsProps } from "interfaces/StepPropsTypes";

const DestinationForm = ({ currentStep, next, previus }: StepActionsProps) => {
  const { fields, register } = useForm(
    { zip_from: "", zip_to: "" },
    { zip_to: handleOnlyNumber(5), zip_from: handleOnlyNumber(5) }
  );
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
      <StepActions currentStep={currentStep} next={next} previus={previus} />
    </Fragment>
  );
};

export default DestinationForm;
