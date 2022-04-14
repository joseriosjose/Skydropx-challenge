import React from "react";
import { styled } from "@mui/material/styles";
import StepForm from "../../components/StepForm/StepForm";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "_redux";
import { ShipmentState } from "_redux/reducers/Shipment.reducer";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { setError } from "../../_redux/actions/Shipment.actions";

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
  const dispatch = useDispatch();

  const { loading, error } = useSelector<GlobalState, ShipmentState>(
    (store) => store.shipment
  );

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setError(""));
  };
  return (
    <ShipmentStepsWrapper>
      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <StepForm />
    </ShipmentStepsWrapper>
  );
};

export default ShipmentSteps;
