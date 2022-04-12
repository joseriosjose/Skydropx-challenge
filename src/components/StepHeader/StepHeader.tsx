import React, { ClassAttributes, ElementType, Fragment } from "react";
import { SvgIcon, Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MUIStyledCommonProps } from "@mui/system";

export type StepHeaderProps = {
  theme?: Theme | undefined;
  selected?: boolean;
  icon: typeof SvgIcon;
  text: string;
};

type StepHeaderWrapperProps = MUIStyledCommonProps<Theme> &
  React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & {
    selected?: boolean;
    children: React.ReactNode;
  };

const StepHeaderWrapper = styled("div")(
  ({ theme, selected }: StepHeaderWrapperProps) => ({
    backgroundColor: selected ? theme?.palette.primary.main : "#FFFFFF",
    color: selected ? "#ffffff" : "#B4AFAF",
    textAlign: "center",
    flex: "auto",
    borderStyle: "solid none solid solid",
    borderColor: "#4e34e15e",
    borderWidth: 2,
    cursor: selected ? "pointer" : "default",
    padding: "8px 5px 5px 5px",
    textTransform: "uppercase",
    ":first-child": {
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
  })
);

const StepHeader = ({ icon, text, selected, ...props }: StepHeaderProps) => {
  const Icon = icon;
  return (
    <Fragment>
      <StepHeaderWrapper selected={selected}>
        <Icon />
        <Typography variant="overline"> {text}</Typography>
      </StepHeaderWrapper>
    </Fragment>
  );
};

export default StepHeader;
