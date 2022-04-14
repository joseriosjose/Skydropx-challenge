import { styled, Theme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StepsHeaders = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

export const StepContainerWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(4),
  justifyContent: "center",
  gridAutoRows: "auto",
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(12),
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  [(theme as Theme).breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(9),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

export const StepTitleMovilWrapper = styled(Typography)(({ theme }) => ({
  display: "none",
  [(theme as Theme).breakpoints.down("md")]: {
    display: "block",
    textAlign: "center",
    marginTop: theme.spacing(2),
    color: "#04142a",
  },
}));
