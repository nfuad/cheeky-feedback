import { createStitches, createTheme } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      text: "rgb(0, 0, 0)",
      focus: "rgba(3, 138, 255, 0.1)",
      border: "rgba(0, 0, 0, 0.1)",
      bg: "rgb(255, 255, 255)",
      bgSecondary: "rgba(0, 0, 0, 0.02)",
      btnText: "rgba(0, 0, 0, 0.6)",
      borderColor: "orange"
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    text: "rgb(255, 255, 255)",
    focus: "rgba(3, 138, 255, 0.4)",
    bg: "rgb(24, 24, 27)",
    bgSecondary: "rgba(255, 255, 255, 0.1)",
    border: "rgba(255, 255, 255, 0.1)",
    btnText: "rgba(255, 255, 255, 0.6)",
    borderColor: "orange"
  },
});
