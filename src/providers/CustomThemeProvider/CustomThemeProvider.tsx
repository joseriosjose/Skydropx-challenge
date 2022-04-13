import { ReactElement } from "react";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#664fe7",
    },
    secondary: {
      light: "#99e3b9",
      main: "#60d192",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
});

interface ThemeProps {
  children: ReactElement | ReactElement[];
}

const CustomThemeProvider = ({ children }: ThemeProps): ReactElement => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default CustomThemeProvider;
