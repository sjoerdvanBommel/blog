import { ColorTheme } from "@/lib/constants/cookies";

const LIGHT_THEME_COLORS = {
  primary: {
    500: "69.89% 0.2 42.67",
  },
  neutral: {
    0: "100% 0 0",
    50: "97.59% 0.003 264.54",
    100: "95.34% 0.004 236.5",
    200: "92.03% 0.008 253.86",
    300: "88.8% 0.015 251.17",
    400: "84.57% 0.017 242.47",
    500: "79.48% 0.024 246.11",
    600: "69.81% 0.03 256.52",
    700: "53.32% 0.033 254.8",
    800: "40.91% 0.029 256.21",
    900: "22.93% 0.017 259.75",
    1000: "0% 0 0",
  },
} as const;

const DARK_THEME_COLORS = {
  primary: {
    500: "69.89% 0.2 42.67",
  },
  neutral: {
    0: "0% 0 0",
    50: "10.81% 0.015 261.6",
    100: "15.78% 0.023 262.62",
    200: "31.01% 0.029 256.84",
    300: "34.89% 0.034 257.1",
    400: "43.31% 0.039 254.23",
    500: "54.09% 0.036 257.27",
    600: "66.78% 0.024 250.32",
    700: "80.07% 0.017 250.88",
    800: "88.04% 0.011 256.7",
    900: "95.17% 0.006 264.53",
    1000: "100% 0 0",
  },
} as const;

export const COLORS_TAILWIND = toTailwind(LIGHT_THEME_COLORS);
export const COLOR_CSS_VARIABLES = {
  light: toCSSVariables(LIGHT_THEME_COLORS),
  dark: toCSSVariables(DARK_THEME_COLORS),
};
export const DEFAULT_COLOR_THEME: ColorTheme = "dark";

/**
 * Converts the colors into a map of CSS variables which
 * can be used as inline styles in the document element
 */
function toCSSVariables(colors: Record<string, Record<string, string>>) {
  return Object.entries(colors).reduce(
    (prev, [colorBase, colorVariants]) => ({
      ...prev,
      ...Object.entries(colorVariants).reduce(
        (prev, [shade, oklch]) => ({
          ...prev,
          [`--color-${colorBase}-${shade}`]: oklch,
        }),
        {}
      ),
    }),
    {}
  );
}

/** Converts the colors into a similar (tailwind friendly) map referencing the CSS variables */
function toTailwind(colors: Record<string, Record<string, string>>) {
  return Object.entries(colors).reduce(
    (prev, [colorBase, colorVariants]) => ({
      ...prev,
      [colorBase]: Object.keys(colorVariants).reduce(
        (prev, shade) => ({
          ...prev,
          [shade]: `oklch(var(--color-${colorBase}-${shade}) / <alpha-value>)`,
        }),
        {}
      ),
    }),
    {}
  );
}
