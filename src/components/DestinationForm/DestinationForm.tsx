import React, { Fragment } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Input } from "components";
import useForm from "hooks/useForm";
import { handleOnlyNumber } from "utils/ValidatorsUtils";

const DestinationForm = () => {
  const { fields, register } = useForm(
    { zip_from: "", zip_to: "" },
    { zip_to: handleOnlyNumber(5), zip_from: handleOnlyNumber(5) }
  );
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default DestinationForm;
