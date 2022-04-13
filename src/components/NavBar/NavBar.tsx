import React from "react";
import { styled } from "@mui/material/styles";

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

const LOGO_SKYDROPX =
  "https://skydropx.com/assets/landing5/skydropx_logo-4fb27c0601c3bccddd15cad09e612eb0d777dcdbcebae56c0382a8fe2978dfa9.svg";

const NavBar = ({ ...props }) => {
  return (
    <NavBarWrapper {...props}>
      <LogoWrapper src={LOGO_SKYDROPX} />
    </NavBarWrapper>
  );
};

export default NavBar;
