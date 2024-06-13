import { ColorTheme } from "@/lib/constants/cookies";

const LIGHT_THEME_COLORS = {
  neutral: {
    0: "oklch(100% 0 0)",
    50: "oklch(97.59% 0.003 264.54)",
    100: "oklch(95.34% 0.004 236.5)",
    200: "oklch(92.03% 0.008 253.86)",
    300: "oklch(88.8% 0.015 251.17)",
    400: "oklch(84.57% 0.017 242.47)",
    500: "oklch(79.48% 0.024 246.11)",
    600: "oklch(69.81% 0.03 256.52)",
    700: "oklch(53.32% 0.033 254.8)",
    800: "oklch(40.91% 0.029 256.21)",
    900: "oklch(22.93% 0.017 259.75)",
    1000: "oklch(0% 0 0)",
  },
} as const;

const DARK_THEME_COLORS = {
  neutral: {
    0: "oklch(0% 0 0)",
    50: "oklch(20.81% 0.015 261.6)",
    100: "oklch(26.78% 0.026 262.62)",
    200: "oklch(31.01% 0.029 256.84)",
    300: "oklch(34.89% 0.034 257.1)",
    400: "oklch(43.31% 0.039 254.23)",
    500: "oklch(54.09% 0.036 257.27)",
    600: "oklch(66.78% 0.024 250.32)",
    700: "oklch(80.07% 0.017 250.88)",
    800: "oklch(88.04% 0.011 256.7)",
    900: "oklch(95.17% 0.006 264.53)",
    1000: "oklch(100% 0 0)",
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
        (prev, [shade, hex]) => ({
          ...prev,
          [`--color-${colorBase}-${shade}`]: hex,
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
          [shade]: `var(--color-${colorBase}-${shade})`,
        }),
        {}
      ),
    }),
    {}
  );
}
