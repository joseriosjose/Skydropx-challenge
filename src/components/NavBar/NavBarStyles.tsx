import { styled } from "@mui/material/styles";

export const NavBarWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  position: "fixed",
  webkitBoxShadow: "0px 0px 30px -18px #4E34E1",
  boxShadow: "0px 0px 30px -18px #4E34E1",
  zIndex: 2,
  background: "linear-gradient(160deg, #ffffff,#c6bdf9)",
}));

export const LogoWrapper = styled("img")(({ theme }) => ({
  margin: "20px 30px 20px 30px",
  height: 50,
  [theme.breakpoints.down("md")]: {
    height: 30,
  },
}));
