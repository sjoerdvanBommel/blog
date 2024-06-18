"use client";

import { Moon, Sun } from "@/components/icons";
import { VisuallyHidden } from "@/components/visually-hidden";
import {
  COLOR_CSS_VARIABLES,
  DEFAULT_COLOR_THEME,
} from "@/lib/constants/colors";
import { ColorTheme, THEME_COOKIE_NAME } from "@/lib/constants/cookies";
import Cookie from "js-cookie";
import { useState } from "react";

export type HeaderProps = {
  initialTheme: ColorTheme;
};

export function Header({ initialTheme }: HeaderProps) {
  const [theme, setTheme] = useState<ColorTheme>(initialTheme);

  function handleThemeChange() {
    const newTheme = theme === "dark" ? "light" : DEFAULT_COLOR_THEME;

    // Set local theme state
    setTheme(newTheme);

    // Update theme cookie
    Cookie.set(THEME_COOKIE_NAME, newTheme, { expires: 365 });

    // Update global theme CSS variables
    Object.entries<string>(COLOR_CSS_VARIABLES[newTheme]).forEach(
      ([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      }
    );
  }

  return (
    <header className="h-24 px-10 flex items-center justify-center bg-neutral-50">
      <div className="max-w-[1200px] flex flex-1 items-center justify-between">
        <h1 className="text-3xl font-bold">Sjoerd van Bommel</h1>
        <button
          className="w-11 h-11 grid place-content-center"
          onClick={handleThemeChange}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
          <VisuallyHidden>Toggle to {theme} theme</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}
