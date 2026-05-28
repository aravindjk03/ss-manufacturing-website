import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white border-t-4 border-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/ssmpl-logo.jpg"
                alt="SSMPL Logo"
                className="h-10 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-sm uppercase tracking-tight">SS Manufacturing</span>
                <span className="text-[9px] text-white/50 tracking-widest uppercase mt-0.5">Private Limited</span>
                <span className="text-[8px] text-white font-semibold tracking-wider mt-1 uppercase">For Your Safety Life</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              India's trusted manufacturer of automotive seat belts and safety assemblies. Supplying HMI, RNAIPL, and KMI with precision-engineered safety components.
            </p>
            <div className="pt-1 text-white font-medium text-xs uppercase tracking-wider">
              Earlier, The more Closer — The more Secure.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/60">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/infrastructure", label: "Infrastructure" },
                { href: "/esg", label: "ESG & Sustainability" },
                { href: "/policies", label: "Policies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight size={12} className="text-white" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/60">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-white mt-0.5 shrink-0" />
                <span>Near Kanchipuram,<br />Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-white shrink-0" />
                <span>+91 44 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-white shrink-0" />
                <span>info@ssmanufacturing.in</span>
              </li>
            </ul>
            <div className="text-xs text-gray-500 pt-2 border-t border-white/5">
              7 km from R&N facility<br />40 km from HMI
            </div>
          </div>

          {/* Customers & Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/60">Key Customers</h3>
            <div className="space-y-2">
              {["Hyundai Motor India (HMI)", "Renault Nissan (RNAIPL)", "Kia Motors India (KMI)"].map((c) => (
                <div key={c} className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white shrink-0" />
                  {c}
                </div>
              ))}
            </div>
            <div className="pt-4 space-y-2">
              <h3 className="font-bold text-sm uppercase tracking-widest text-white/60">Standards</h3>
              <div className="flex flex-wrap gap-2">
                {["ECE R16", "HMC ES/MS", "BMIR"].map((s) => (
                  <span key={s} className="text-xs border border-white/30 text-white px-2 py-0.5 font-semibold tracking-wide">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 bg-[#0d1f3c]/5 hover:bg-white transition-colors flex items-center justify-center text-white" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-[#0d1f3c]/5 hover:bg-white transition-colors flex items-center justify-center text-white" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 SS Manufacturing Private Limited (SSMPL) All Rights Reserved.</p>
          <p className="text-white/60 font-medium">For Your Safety Life</p>
          <div className="flex gap-4">
            <Link href="/policies" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/policies" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
