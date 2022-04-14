import React, { Fragment } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Input, StepActions } from "components";
import { Grid } from "@mui/material";
import useForm from "hooks/useForm";
import { handleOnlyNumber } from "utils/ValidatorsUtils";
import { StepActionsProps } from "interfaces/StepPropsTypes";
import { StepContainerWrapper } from "components/StepForm/StepFormStyles";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "_redux";
import { ShipmentState } from "_redux/reducers/Shipment.reducer";
import { saveDimensions } from "../../_redux/actions/Shipment.actions";
import { getRates } from "_redux/thunks/Shipment.thunk";
import { createShipment } from "utils/CreateShipmentUtil";

const validator = handleOnlyNumber(3);

const DimensionsForm = ({ currentStep, next, previus }: StepActionsProps) => {
  const dispatch = useDispatch();
  const {
    informationParcel: { weight, height, width, length, zipFrom, zipTo },
  } = useSelector<GlobalState, ShipmentState>((store) => store.shipment);

  const { register, fields } = useForm(
    {
      weight,
      height,
      width,
      length,
    },
    {
      weight: validator,
      height: validator,
      width: validator,
      length: validator,
    }
  );

  const handleNext = () => {
    const { weight, height, width, length } = fields;
    if (
      validator(weight) &&
      validator(height) &&
      validator(width) &&
      validator(length)
    ) {
      dispatch(saveDimensions({ weight, height, width, length }));
      next();
      dispatch(
        getRates(
          createShipment({ weight, height, width, length, zipFrom, zipTo })
        )
      );
    }
  };

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
      <StepActions
        currentStep={currentStep}
        next={handleNext}
        previus={previus}
      />
    </Fragment>
  );
};

export default DimensionsForm;
