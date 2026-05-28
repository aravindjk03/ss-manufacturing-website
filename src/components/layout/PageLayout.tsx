import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    // Update title based on route
    const routes: Record<string, string> = {
      "/": "Home | SS Manufacturing Private Limited",
      "/about": "About Us | SS Manufacturing Private Limited",
      "/products": "Products | SS Manufacturing Private Limited",
      "/esg": "ESG & Sustainability | SS Manufacturing Private Limited",
      "/policies": "Policies | SS Manufacturing Private Limited",
      "/infrastructure": "Infrastructure | SS Manufacturing Private Limited",
      "/contact": "Contact Us | SS Manufacturing Private Limited",
    };
    
    document.title = routes[location] || "SS Manufacturing Private Limited";
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow flex flex-col"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
