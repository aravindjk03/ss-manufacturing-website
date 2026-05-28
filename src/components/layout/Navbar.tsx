import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/esg", label: "ESG" },
  { href: "/policies", label: "Policies" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/contact", label: "Contact" },
];

function SSMPLLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center select-none">
      <img
        src="/ssmpl-logo.jpg"
        alt="SSMPL Logo"
        className="h-10 w-auto object-contain shrink-0"
      />
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const isHome = location === "/";
  const transparentMode = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        transparentMode
          ? "bg-transparent border-transparent"
          : "bg-[#0A1628] border-white/10 shadow-lg"
      )}
    >
      {/* Certification strip */}
      <div className={cn(
        "border-b transition-all duration-300",
        transparentMode ? "bg-black/30 border-white/10" : "bg-[#0d1f3c]/5 border-white/10"
      )}>
        <div className="container mx-auto px-4 h-8 flex items-center justify-between gap-4 overflow-hidden">
          <div className="text-[10px] text-white/40 uppercase tracking-widest shrink-0 hidden sm:block">Certified</div>
          <div className="flex items-center gap-1 flex-1 justify-center sm:justify-start overflow-x-auto no-scrollbar">
            {[
              { code: "ISO 27001", label: "Information Security" },
              { code: "IATF 16949", label: "Automotive QMS" },
              { code: "ISO 50001", label: "Energy Management" },
              { code: "ISO 37001", label: "Anti-Bribery" },
              { code: "ISO 14001", label: "Environmental" },
              { code: "ISO 45001", label: "Occupational Safety" },
            ].map((cert) => (
              <div
                key={cert.code}
                title={cert.label}
                className="shrink-0 flex items-center gap-1 px-2 py-0.5 border border-accent/25 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-colors cursor-default"
              >
                <span className="text-[9px] font-black text-white tracking-wider">{cert.code}</span>
              </div>
            ))}
          </div>
          <div className="text-[9px] text-white/30 uppercase tracking-widest shrink-0 hidden md:block">Multi-certified facility</div>
        </div>
      </div>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <SSMPLLogo dark={false} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white text-white/80",
                  isActive ? "text-white" : ""
                )}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link href="/contact" className="ml-4">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold tracking-wide">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10 shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium",
                    isActive ? "bg-[#0d1f3c]/10 text-white" : "text-white/80 hover:bg-[#0d1f3c]/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
