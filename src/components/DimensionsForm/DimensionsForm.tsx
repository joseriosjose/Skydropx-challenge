import React, { Fragment } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Input } from "components";
import { Grid } from "@mui/material";
import useForm from "hooks/useForm";
import { handleOnlyNumber } from "utils/ValidatorsUtils";

const DimensionsForm = () => {
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

  console.log(fields);
  return (
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
  );
};

export default DimensionsForm;
