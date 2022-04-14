import React from "react";
import { SvgIcon, Theme, Typography } from "@mui/material";
import { StepHeaderWrapper } from "./StepHeaderStyles";

export type StepHeaderProps = {
  theme?: Theme | undefined;
  type?: "completed" | "default" | "selected";
  icon: typeof SvgIcon;
  text: string;
};

const StepHeader = ({
  icon,
  text,
  type = "default",
  ...props
}: StepHeaderProps) => {
  const Icon = icon;
  return (
    <StepHeaderWrapper type={type} {...props}>
      <Icon />
      <Typography variant="overline"> {text}</Typography>
    </StepHeaderWrapper>
  );
};

export default StepHeader;
