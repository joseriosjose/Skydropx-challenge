import React from "react";
import { ButtonProps } from "@mui/material/Button";
import { Typography } from "@mui/material";
import { ButtonWrapper } from "./ButtonStyles";

export interface ButtonWrapperProps extends ButtonProps {
  buttonType: "primary" | "secondary";
  text: string;
}

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
