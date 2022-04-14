import React from "react";
import { Theme } from "@mui/material";
import { MUIStyledCommonProps } from "@mui/system";
import { NavBarWrapper, LogoWrapper } from "./NavBarStyles";

type NavBarProps = MUIStyledCommonProps<Theme> &
  React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & {
    urlImg: string;
  };

const NavBar = ({ urlImg, ...props }: NavBarProps) => {
  return (
    <NavBarWrapper {...props}>
      <LogoWrapper src={urlImg} />
    </NavBarWrapper>
  );
};

export default NavBar;
