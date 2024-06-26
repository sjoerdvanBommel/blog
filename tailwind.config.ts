import type { Config } from "tailwindcss";
import { COLORS_TAILWIND } from "./src/lib/constants/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...COLORS_TAILWIND,
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        ["xl-layered"]: `
            0.3px 0.5px 0.9px hsl(214deg 16% 9% / 0.01),
            1.2px 2px 3.4px hsl(214deg 16% 9% / 0.11),
            2.5px 4px 7px -0.1px hsl(214deg 16% 9% / 0.22),
            5px 8.1px 14.1px -0.1px hsl(214deg 16% 9% / 0.32)
        `,
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
export default config;
