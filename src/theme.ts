// src/theme.ts
import { createTheme } from "@mui/material/styles";
import { colors } from "./constants/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.lightBlue },
    secondary: { main: colors.logoRed },
    background: {
      default: colors.background,
      paper: colors.card,
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
