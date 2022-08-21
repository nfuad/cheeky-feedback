import { createStitches, createTheme } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      text: "black",
      focus: "rgba(3, 138, 255, 0.1)",
      border: "rgba(0, 0, 0, 0.1)",
      bg1: "white",
      bg2: "rgba(0, 0, 0, 0.02)",
      btnText: "rgba(0, 0, 0, 0.6)"
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    text: "white",
    focus: "rgba(3, 138, 255, 0.4)",
    bg1: "#18181B",
    bg2: "rgba(255, 255, 255, 0.1)",
    border: "rgba(255, 255, 255, 0.1)",
    btnText: "rgba(255, 255, 255, 0.6)",
  },
});
