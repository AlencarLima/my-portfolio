import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',	// #232323
    },
    secondary: {
      main: '#4f8e3e',	// #4f8e3e
    },
  },
  typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  }
});

theme = responsiveFontSizes(theme);

export default theme;