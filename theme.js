import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#3B5186",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F8F9FA",
    },
  },
});

export default theme;
