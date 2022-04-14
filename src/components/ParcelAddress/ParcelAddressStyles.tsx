import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleInputWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: "#4c4949",
  svg: {
    margin: "30px 15px 15px 15px",
    color: theme.palette.primary.main,
  },
}));
