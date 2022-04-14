import { styled } from "@mui/material/styles";

export const StepActionsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  gap: 25,
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
}));
