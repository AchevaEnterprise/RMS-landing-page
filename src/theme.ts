import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "410px",
    md: "700px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  fonts: {
    body: "Rubik sans-serif",
    heading: "Rubik sans-serif",
  },
});

export default theme;
