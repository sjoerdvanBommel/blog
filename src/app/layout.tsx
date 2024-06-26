import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionConfig } from "@/components/motion-config/motion-config";
import {
  COLOR_CSS_VARIABLES,
  DEFAULT_COLOR_THEME,
} from "@/lib/constants/colors";
import { ColorTheme, THEME_COOKIE_NAME } from "@/lib/constants/cookies";
import "@/lib/shims/react";
import { Nunito } from "next/font/google";
import { cookies } from "next/headers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threeveloper Blog",
  description: "An interactive blog about frontend and 3D web development",
};

const globalCssVars = {
  "--footer-height": "488px",
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
      className={nunito.className}
      style={{ ...COLOR_CSS_VARIABLES[theme], ...globalCssVars }}
    >
      <body
        className={`h-dvh flex flex-col overflow-x-hidden text-neutral-900 ${theme}`}
      >
        <MotionConfig>
          <div id="bg" className="bg-neutral-100 fixed inset-0 -z-50" />
          <Header initialTheme={theme} />
          <main className="grid md:grid-cols-[1fr,min(1200px,100%),1fr] md:[&>*]:[grid-column:2] content-start w-full flex-1 [&>:first-child]:mt-24 px-8 sm:px-4">
            {children}
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
