import React, { ClassAttributes, ElementType, Fragment } from "react";
import { SvgIcon, Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MUIStyledCommonProps } from "@mui/system";

export type StepHeaderProps = {
  theme?: Theme | undefined;
  type?: "completed" | "default" | "selected";
  icon: typeof SvgIcon;
  text: string;
};

type StepHeaderWrapperProps = MUIStyledCommonProps<Theme> &
  React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & {
    type?: "completed" | "default" | "selected";
    children: React.ReactNode;
  };

const styles = (theme: Theme) => ({
  completed: {
    backgroundColor: theme?.palette.primary.light,
    color: "#ffffff",
  },
  selected: {
    backgroundColor: theme?.palette.primary.main,
    ":first-of-type": {
      borderRadius: "30px 10px 10px 30px",
    },
    ":last-child": {
      borderRadius: "10px 30px 30px 10px",
    },
    cursor: "pointer",
    transform: "scale(1.09)",
    borderRadius: "12px 12px 12px 12px",
    color: "#ffffff",
  },
  default: {
    backgroundColor: "white",
    color: "#B4AFAF",
  },
});

const StepHeaderWrapper = styled("div")(
  ({ theme, type = "default" }: StepHeaderWrapperProps) => ({
    textAlign: "center",
    flex: "auto",
    borderStyle: "solid none solid solid",
    borderColor: "#4e34e15e",
    borderWidth: 2,
    maxWidth: 500,
    padding: "8px 5px 5px 5px",
    textTransform: "uppercase",
    ":first-of-type": {
      borderRadius: "30px 0px 0px 30px",
    },
    ":last-child": {
      borderRadius: "0px 30px 30px 0px",
      borderStyle: "solid solid solid solid",
    },
    svg: {
      verticalAlign: "text-top",
      marginRight: 13,
      [(theme as Theme).breakpoints.down("md")]: {
        marginRight: 0,
      },
    },
    [(theme as Theme).breakpoints.down("md")]: {
      span: {
        display: "none",
      },
    },
    ...(styles(theme as Theme)[type] || {}),
  })
);

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
