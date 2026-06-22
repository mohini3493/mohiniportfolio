const footerLinks = ["Privacy", "Terms", "Security", "Status"];

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto border-t border-outline-variant bg-background">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 max-w-[1280px] mx-auto w-full gap-4">
        <span className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
          © 2024 MOHINIBA.DEV • System Status: Operational
        </span>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
