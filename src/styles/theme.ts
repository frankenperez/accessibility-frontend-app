// MUI Styles
import { createTheme, Theme as MuiTheme } from "@mui/material/styles";

const theme: MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#7e7e7e",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#00c9a5",
      contrastText: "#ffffff"
    },
    error: {
      main: "#c10d0d",
      contrastText: "#ffffff"
    },
    warning: {
      main: "#e1b209",
      contrastText: "#ffffff"
    },
    info: {
      main: "#117FD1",
      contrastText: "#ffffff"
    },
    success: {
      main: "#0abe67",
      contrastText: "#ffffff"
    },
    grey: {
      "100": "#f6f6f6",
      "200": "#e6e6e6",
      "300": "#cccccc",
      "400": "#afafaf",
      "500": "#999999",
      "600": "#666666",
      "700": "#333333",
      "800": "#222222",
      "900": "#000000"
    },
    text: {
      primary: "#000000",
      secondary: "#606060",
      disabled: "#999999"
    }
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(", "),
    fontSize: 16,
    htmlFontSize: 16
  }
});

// Extends the existing MuiTheme Options
type ThemeConfig = typeof theme;
declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeConfig {}
}

export default theme;
