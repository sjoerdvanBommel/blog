import FooterBackground from "@/components/footer/footer-background";

export function Footer() {
  return (
    <footer className="w-full min-h-[488px] relative">
      <FooterBackground />
      <div className="relative z-[2] grid h-full place-content-center pointer-events-none">
        <span className="text-xl">
          © 2024 Sjoerd van Bommel. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
