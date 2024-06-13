import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  COLOR_CSS_VARIABLES,
  DEFAULT_COLOR_THEME,
} from "@/lib/constants/colors";
import { ColorTheme, THEME_COOKIE_NAME } from "@/lib/constants/cookies";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Threeveloper Blog",
  description: "An interactive blog about frontend and 3D web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme =
    (cookies().get(THEME_COOKIE_NAME)?.value as ColorTheme) ||
    DEFAULT_COLOR_THEME;

  return (
    <html
      lang="en"
      className={GeistSans.className}
      style={COLOR_CSS_VARIABLES[theme]}
    >
      <body className="h-dvh">
        <Header initialTheme={theme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
