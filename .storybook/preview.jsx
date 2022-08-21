import { darkTheme, styled } from "../src/theme";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from '@storybook/theming';

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#111119',appContentBg: "#111119" },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#fff',  }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#111119",
      },
      {
        name: "light",
        value: "#fff"
      }
    ]
  }
};

const Box = styled("div", {
  // background: "$bg",
});

export const decorators = [
  (Story) => {
    const theme = useDarkMode() ? darkTheme : "";
    console.log("theme:", useDarkMode());
    return (
      <Box className={theme}>
        <Story />
      </Box>
    );
  },
];
