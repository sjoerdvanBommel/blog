import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  COLOR_CSS_VARIABLES,
  DEFAULT_COLOR_THEME,
} from "@/lib/constants/colors";
import { ColorTheme, THEME_COOKIE_NAME } from "@/lib/constants/cookies";
import { Nunito } from "next/font/google";
import { cookies } from "next/headers";

const nunito = Nunito({ subsets: ["latin"] });

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
      className={`${nunito.className} bg-gradient-to-b from-neutral-50 to-neutral-100 text-neutral-900 ${theme}`}
      style={COLOR_CSS_VARIABLES[theme]}
    >
      <body className="h-dvh flex flex-col">
        <Header initialTheme={theme} />
        <main className="flex justify-center m-auto max-w-[1200px] w-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
