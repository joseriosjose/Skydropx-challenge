import React, { Fragment } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Input, StepActions } from "components";
import { Grid } from "@mui/material";
import useForm from "hooks/useForm";
import { handleOnlyNumber } from "utils/ValidatorsUtils";
import { StepActionsProps } from "interfaces/StepPropsTypes";
import { StepContainerWrapper } from "components/StepForm/StepFormStyles";

const DimensionsForm = ({ currentStep, next, previus }: StepActionsProps) => {
  const { register, fields } = useForm(
    {
      weight: "",
      height: "",
      width: "",
      length: "",
    },
    {
      weight: handleOnlyNumber(3),
      height: handleOnlyNumber(3),
      width: handleOnlyNumber(3),
      length: handleOnlyNumber(3),
    }
  );

  return (
    <Fragment>
      <StepContainerWrapper>
        <Grid container spacing={{ xs: 1, md: 3 }}>
          <Grid item xs={6}>
            <Input
              icon={FlightTakeoffIcon}
              label="Largo (cm)"
              placeholder="Ej. 30"
              {...register("length")}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              icon={FlightLandIcon}
              label="Ancho (cm)"
              placeholder="Ej. 20"
              {...register("width")}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              icon={FlightTakeoffIcon}
              label="Alto (cm)"
              placeholder="Ej. 40"
              {...register("height")}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              icon={FlightTakeoffIcon}
              label="Peso (Kg)"
              placeholder="Ej. 60"
              {...register("weight")}
            />
          </Grid>
        </Grid>
      </StepContainerWrapper>
      <StepActions currentStep={currentStep} next={next} previus={previus} />
    </Fragment>
  );
};

export default DimensionsForm;
