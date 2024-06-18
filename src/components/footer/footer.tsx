import dynamic from "next/dynamic";

const FooterBackground = dynamic(() => import("./footer-background"), {
  ssr: false,
});

export function Footer() {
  return (
    <footer className="relative h-[488px]">
      <FooterBackground />
      Thanks for passing by!
    </footer>
  );
}
