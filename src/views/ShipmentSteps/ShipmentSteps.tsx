import React from "react";
import { styled } from "@mui/material/styles";
import StepForm from "../../components/StepForm/StepForm";

const ShipmentStepsWrapper = styled("div")(({ theme }) => ({
  margin: "0 auto",
  padding: theme.spacing(20, 2),
  minHeight: "100vh",
  maxWidth: "850px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(12, 2),
  },
}));

const ShipmentSteps = () => {
  return (
    <ShipmentStepsWrapper>
      <StepForm />
    </ShipmentStepsWrapper>
  );
};

export default ShipmentSteps;
