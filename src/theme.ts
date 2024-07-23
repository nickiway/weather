"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "5px 10px",
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default theme;
