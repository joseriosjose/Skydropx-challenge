import React, { Fragment } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Input } from "components";

const DestinationForm = () => {
  return (
    <Fragment>
      <Input
        variant="outlined"
        icon={FlightTakeoffIcon}
        label="Código postal de origen"
        fullWidth
        placeholder="Ej. 68015"
      />
      <Input
        variant="outlined"
        icon={FlightLandIcon}
        label="Código postal del destino"
        fullWidth
        placeholder="Ej. 68015"
      />
    </Fragment>
  );
};

export default DestinationForm;
