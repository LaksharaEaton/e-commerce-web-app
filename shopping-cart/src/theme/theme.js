import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
    error: {
      main: "#d32f2f", // Red
    },
    background: {
      default: "#f9f9f9", // Light grey
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
