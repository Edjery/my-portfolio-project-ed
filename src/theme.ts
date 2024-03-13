import { PaletteMode, createTheme } from "@mui/material";

const theme = (themeMode: PaletteMode) =>
  createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: themeMode === "dark" ? "#fff" : "#333",
      },
      secondary: {
        main: themeMode === "dark" ? "#5000DC" : "#1C004C",
      },
      background: {
        default: themeMode === "dark" ? "#15161D" : "#E9F1FA",
        paper: themeMode === "dark" ? "#15161D" : "#DBE7F5",
      },
      text: {
        primary: themeMode === "dark" ? "#fff" : "#333",
        secondary: themeMode === "dark" ? "#C1C1C1" : "#666",
      },
    },
  });

export default theme;
