import React from "react";
import { styled, Theme } from "@mui/material/styles";
import { MUIStyledCommonProps } from "@mui/system";
import MuiButton from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";
import { Typography } from "@mui/material";

export interface ButtonWrapperProps extends ButtonProps {
  buttonType: "primary" | "secondary";
  text: string;
}

const ButtonWrapper = styled(MuiButton)(({ theme }) => ({
  borderRadius: 13,
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  svg: {
    fontSize: 17,
    marginLeft: 7,
  },
  [(theme as Theme).breakpoints.down("md")]: {
    span: {
      display: "none",
    },
  },
}));

const Button = ({
  children,
  buttonType = "primary",
  text,
  ...props
}: ButtonWrapperProps) => {
  return (
    <ButtonWrapper
      variant={buttonType === "primary" ? "contained" : "outlined"}
      {...props}
    >
      <Typography variant="body2">{text}</Typography>
    </ButtonWrapper>
  );
};

export default Button;
