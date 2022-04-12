import React, { Fragment } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Input } from "components";
import { Grid } from "@mui/material";

const DimensionsForm = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 3 }}>
      <Grid item xs={6}>
        <Input
          variant="outlined"
          icon={FlightTakeoffIcon}
          label="Largo (cm)"
          fullWidth
          placeholder="Ej. 30"
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          variant="outlined"
          icon={FlightLandIcon}
          label="Ancho (cm)"
          fullWidth
          placeholder="Ej. 20"
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          variant="outlined"
          icon={FlightTakeoffIcon}
          label="Alto (cm)"
          fullWidth
          placeholder="Ej. 40"
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          variant="outlined"
          icon={FlightTakeoffIcon}
          label="Peso (Kg)"
          fullWidth
          placeholder="Ej. 60"
        />
      </Grid>
    </Grid>
  );
};

export default DimensionsForm;
