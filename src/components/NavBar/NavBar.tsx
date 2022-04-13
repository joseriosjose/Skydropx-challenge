import React from "react";
import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { MUIStyledCommonProps } from "@mui/system";

const NavBarWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  position: "fixed",
  webkitBoxShadow: "0px 0px 30px -18px #4E34E1",
  boxShadow: "0px 0px 30px -18px #4E34E1",
  zIndex: 2,
  background: "linear-gradient(160deg, #ffffff,#c6bdf9)",
}));

const LogoWrapper = styled("img")(({ theme }) => ({
  margin: "20px 30px 20px 30px",
  height: 50,
  [theme.breakpoints.down("md")]: {
    height: 30,
  },
}));

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
