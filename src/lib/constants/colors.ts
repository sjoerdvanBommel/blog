import { ColorTheme } from "@/lib/constants/cookies";

const LIGHT_THEME_COLORS = {
  primary: {
    500: "21 100% 55%",
  },
  neutral: {
    0: "0 0% 100%",
    50: "220 20% 97%",
    100: "204 16% 94%",
    200: "213 18% 90%",
    300: "212 24% 86%",
    400: "207 20% 80%",
    500: "209 21% 74%",
    600: "215 17% 63%",
    700: "214 14% 44%",
    800: "215 17% 30%",
    900: "217 21% 12%",
    1000: "0 0% 0%",
  },
} as const;

const DARK_THEME_COLORS = {
  primary: {
    500: "21 100% 55%",
  },
  neutral: {
    0: "0% 0 0",
    50: "223 64% 2%",
    100: "220 48% 6%",
    200: "215 24% 20%",
    300: "215 24% 24%",
    400: "213 21% 33%",
    500: "215 15% 45%",
    600: "211 12% 59%",
    700: "212 15% 75%",
    800: "215 16% 85%",
    900: "220 20% 94%",
    1000: "0 0% 100%",
  },
} as const;

type ColorBase = keyof typeof LIGHT_THEME_COLORS;
type ColorShade<TBase extends ColorBase> =
  keyof (typeof LIGHT_THEME_COLORS)[TBase];

export const COLORS_TAILWIND = toTailwind(LIGHT_THEME_COLORS);
export const COLOR_CSS_VARIABLES = {
  light: toCSSVariables(LIGHT_THEME_COLORS),
  dark: toCSSVariables(DARK_THEME_COLORS),
};
export const DEFAULT_COLOR_THEME: ColorTheme = "dark";
export const cssVar = <TBase extends ColorBase>(
  color: TBase,
  shade: ColorShade<TBase>,
  opacity = 100
) => `hsl(${LIGHT_THEME_COLORS[color][shade]} / ${opacity})`;

/**
 * Converts the colors into a map of CSS variables which
 * can be used as inline styles in the document element
 */
function toCSSVariables<TBase extends ColorBase>(
  colors: Record<TBase, Record<ColorShade<TBase>, string>>
) {
  return Object.entries<Record<ColorShade<TBase>, string>>(colors).reduce(
    (prev, [colorBase, colorVariants]) => ({
      ...prev,
      ...Object.entries(colorVariants).reduce(
        (prev, [shade, oklch]) => ({
          ...prev,
          [toCSSVariable(colorBase as TBase, +shade as ColorShade<TBase>)]:
            oklch,
        }),
        {}
      ),
    }),
    {}
  );
}

function toCSSVariable<TBase extends ColorBase>(
  color: TBase,
  shade: ColorShade<TBase>
) {
  return `--color-${color}-${String(shade)}`;
}

/** Converts the colors into a similar (tailwind friendly) map referencing the CSS variables */
function toTailwind(colors: Record<string, Record<string, string>>) {
  return Object.entries(colors).reduce(
    (prev, [colorBase, colorVariants]) => ({
      ...prev,
      [colorBase]: Object.keys(colorVariants).reduce(
        (prev, shade) => ({
          ...prev,
          [shade]: `hsl(var(--color-${colorBase}-${shade}) / <alpha-value>)`,
        }),
        {}
      ),
    }),
    {}
  );
}
