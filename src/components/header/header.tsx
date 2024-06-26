"use client";

import { Moon, Sun } from "@/components/icons";
import { VisuallyHidden } from "@/components/visually-hidden";
import {
  COLOR_CSS_VARIABLES,
  DEFAULT_COLOR_THEME,
} from "@/lib/constants/colors";
import { ColorTheme, THEME_COOKIE_NAME } from "@/lib/constants/cookies";
import Cookie from "js-cookie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export type HeaderProps = {
  initialTheme: ColorTheme;
};

export function Header({ initialTheme }: HeaderProps) {
  const [theme, setTheme] = useState<ColorTheme>(initialTheme);

  const pathname = usePathname();

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

    // Add theme class for tailwind dark: selectors
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  }

  return (
    <header
      className={`min-h-24 fixed left-0 right-0 bg-neutral-100 px-10 flex items-center justify-center ${
        pathname === "/about-me" ? "" : "z-10"
      }`}
    >
      <div className="max-w-[1200px] flex flex-1 items-center justify-between">
        <Link className="text-3xl font-bold mr-auto" href="/">
          <VisuallyHidden>Go to homepage</VisuallyHidden>
          Sjoerd van Bommel
        </Link>

        <nav className="text-lg flex gap-4">
          <Link href="/about-me" className="p-4">
            About me
          </Link>
        </nav>
        <button
          className="w-16 h-16 grid place-content-center p-4 ml-8"
          onClick={handleThemeChange}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
          <VisuallyHidden>Toggle to {theme} theme</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}
