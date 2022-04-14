import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export const InputWrapper = styled(TextField)(({ theme }) => ({
  [`& fieldset`]: {
    borderRadius: 30,
  },
}));

export const ContainerInputWrapper = styled("div")(({ theme }) => ({
  svg: {
    verticalAlign: "middle",
    color: theme.palette.primary.main,
    margin: 10,
    display: "inline-block",
  },
}));

export const TitleInputWrapper = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  color: "#898791",
}));
