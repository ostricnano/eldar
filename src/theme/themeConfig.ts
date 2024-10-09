import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#FFC107",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#000", // Color del fondo de los botones primary
          color: "#fff", // Color del texto de los botones primary
        },
        containedSecondary: {
          backgroundColor: "#FFC107", // Fondo para botones secundarios
          color: "#000", // Texto en negro
        },
      },
    },
  },
});