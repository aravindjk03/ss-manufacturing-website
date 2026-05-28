import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShieldCheck, Cog, Package, Layers, ChevronRight, Download, ArrowRight, TestTube } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const products = [
  {
    id: "retractors",
    category: "Retractor Systems",
    icon: ShieldCheck,
    title: "Seat Belt Retractors",
    tagline: "SD9 / SD9-SUB / SR2 / SD3 / SB3 Series — Tilt-Lock Technology",
    desc: "Complete retractor assemblies featuring Tilt-Lock mechanism for reliable belt extraction and retraction. Manufactured across 10 dedicated production lines with a combined capacity of over 700,000 units per year. Compliant with ECE R16 and HMC ES/MS specifications.",
    features: [
      "Tilt-Lock retractor mechanism for precise locking geometry",
      "Reel endurance tested per ECE R16 standard",
      "Retraction and extension force validated with UTM",
      "Micro-slip test compliant",
      "Available in SD9-SUB, SD9, SR2, SD3, SB3 configurations",
      "Full dimensional traceability per production batch",
    ],
    applications: ["Passenger cars — B, C, D segment", "Sport utility vehicles (SUVs/MUVs)", "Light commercial vehicles (LCVs)", "Export markets — Brazil and others"],
    lines: "10 Production Lines | 4,000–6,000 ea/8hrs",
    standards: ["ECE R16", "HMC ES/MS", "BMIR"],
    color: "from-blue-900 to-[#0A1628]",
  },
  {
    id: "buckles",
    category: "Buckle Systems",
    icon: Cog,
    title: "Buckle Assemblies",
    tagline: "SB15 / SB20 / SB30 Series — Positive-Lock Buckle Systems",
    desc: "Precision-engineered buckle assemblies tested to ECE R16 release force specifications. The SB-series buckles are manufactured on 7 dedicated lines with full force-deflection testing and salt spray corrosion validation.",
    features: [
      "Positive-lock mechanism with audible confirmation",
      "Buckle release force tested per ECE R16",
      "Salt spray corrosion resistance test compliant",
      "Dust chamber and climatic chamber tested",
      "SB15, SB20, SB30 configurations for various vehicle types",
      "Custom latch geometry available for OEM specifications",
    ],
    applications: ["OEM passenger vehicle assembly lines", "Hyundai Motor India (HMI)", "Renault Nissan Automotive India (RNAIPL)", "Kia Motors India (KMI)"],
    lines: "7 Production Lines | 2,000 ea/8hrs",
    standards: ["ECE R16", "HMC ES/MS"],
    color: "from-gray-800 to-[#0A1628]",
  },
  {
    id: "height-adjusters",
    category: "Height Adjusters",
    icon: Layers,
    title: "Height Adjuster Systems",
    tagline: "SH8 / SH9 Series — B-Pillar Height Adjustment for Occupant Comfort",
    desc: "SH8 and SH9 series B-pillar height adjuster systems for ergonomically correct seat belt shoulder positioning across different occupant sizes. Designed for durability and smooth adjustment with one-handed operation.",
    features: [
      "Smooth single-hand adjustment mechanism",
      "Adjustable shoulder anchor height positions",
      "Endurance-tested for lifetime operation cycles",
      "Compliant with occupant safety geometry requirements",
      "Compatible with SD9 and SR2 retractor systems",
      "Vehicle-specific bracket and clip configurations",
    ],
    applications: ["Passenger vehicles requiring height-adjustable belt anchorage", "Mid-size and premium segment vehicles", "Fleet and commercial passenger vehicles", "Export vehicle models"],
    lines: "1 Production Line",
    standards: ["ECE R16", "HMC ES/MS"],
    color: "from-red-900 to-[#0A1628]",
  },
  {
    id: "webbing",
    category: "Materials",
    icon: Package,
    title: "Seat Belt Webbing",
    tagline: "High-Tensile Polyester Webbing — The Safety Substrate",
    desc: "Industrial-grade polyester webbing manufactured to OEM width and strength specifications. The critical substrate of every seat belt assembly — engineered for tensile strength, UV resistance, and colour consistency throughout the belt lifetime.",
    features: [
      "Minimum break strength: 14.4 kN per ECE R16",
      "Width: 46mm ± 0.5mm (customisable)",
      "UV and abrasion resistant polyester yarn",
      "AIS-005 / ECE R16 compliant colourfastness",
      "Bulk roll supply for assembly operations",
      "Custom colours to OEM specification",
    ],
    applications: ["In-house seat belt assembly operations", "Tier-1 automotive safety suppliers", "Aftermarket safety equipment manufacturers", "Export supply chains"],
    lines: "Sub-assembly support",
    standards: ["ECE R16", "AIS-005"],
    color: "from-green-900 to-[#0A1628]",
  },
];

const categories = ["All", "Retractor Systems", "Buckle Systems", "Height Adjusters", "Materials"];

const testEquipment = [
  "Reel Endurance Tester",
  "Buckle Release Force (UTM)",
  "Retraction & Extension Force",
  "Micro Slip Tester",
  "Climatic Chamber",
  "Salt Spray Chamber",
  "Dust Chamber",
  "+ 5 Others",
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      <SEO
        title="Products"
        description="SSMPL product range — automotive seat belts, retractors, buckles, and safety assemblies engineered for OEMs and Tier-1 suppliers. IATF 16949 certified manufacturing with rigorous testing."
        path="/products"
        keywords="automotive seat belts, seat belt retractors, seat belt buckles, vehicle safety assemblies, OEM components, automotive parts India"
      />
      {/* HERO */}
      <section className="bg-[#0A1628] pt-44 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Product Range</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Our Products</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              Retractors, buckles, height adjusters, and webbing — seat belt systems built to ECE R16, HMC ES/MS, and BMIR standards.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["ECE R16", "HMC ES/MS", "BMIR"].map((s) => (
                <span key={s} className="text-xs border border-white/40 text-white px-3 py-1 font-bold tracking-widest">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-6 bg-background border-b border-border sticky top-20 z-30 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`button-filter-${cat.toLowerCase().replace(/ /g, "-")}`}
                className={`px-4 py-2 text-xs font-bold tracking-wide border transition-colors uppercase ${
                  activeCategory === cat ? "bg-accent text-white border-accent" : "border-border text-muted-foreground hover:border-white hover:text-white bg-background"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold" data-testid="button-download-catalog">
            <Download size={12} className="mr-2" /> Download Catalog
          </Button>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {filtered.map((product) => (
              <motion.div
                key={product.id} variants={fadeUp}
                className="border border-border bg-card overflow-hidden group hover:border-white transition-all duration-300"
                data-testid={`card-product-${product.id}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className={`bg-gradient-to-br ${product.color} p-10 flex flex-col justify-between min-h-48`}>
                    <div>
                      <div className="inline-block text-xs text-white border border-white/40 bg-white/10 px-3 py-1 font-bold tracking-wider uppercase mb-6">
                        {product.category}
                      </div>
                      <product.icon size={44} className="text-white/80 mb-4" />
                      <h2 className="text-2xl font-black text-white">{product.title}</h2>
                      <p className="text-white/60 text-xs mt-2 font-medium">{product.tagline}</p>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="text-xs text-white/50 uppercase tracking-wider">{product.lines}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.standards.map((s) => (
                          <span key={s} className="text-[10px] border border-white/40 text-white px-2 py-0.5 font-bold tracking-wider">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm">{product.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-black text-primary text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="w-4 h-0.5 bg-white inline-block" />Key Features
                        </h4>
                        <ul className="space-y-2">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <ChevronRight size={12} className="text-white mt-0.5 shrink-0" />{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-black text-primary text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="w-4 h-0.5 bg-white inline-block" />Applications
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {product.applications.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="mt-1.5 w-1.5 h-1.5 bg-white shrink-0" />{a}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact">
                          <Button className="bg-accent hover:bg-accent/90 text-white font-semibold text-sm" data-testid={`button-inquire-${product.id}`}>
                            Send Inquiry <ArrowRight size={14} className="ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTING EQUIPMENT */}
      <section className="py-16 bg-[#0A1628]">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Quality Assurance</div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Testing Equipment</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
              Every product is validated through our in-house testing laboratory before release.
            </p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {testEquipment.map((eq) => (
              <motion.div key={eq} variants={fadeUp} className="border border-white/10 bg-[#0d1f3c]/5 p-4 text-center group hover:border-white/40 transition-colors">
                <TestTube size={18} className="text-white mx-auto mb-2" />
                <div className="text-xs text-gray-300 font-medium leading-tight">{eq}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-primary mb-4">Need a Custom Solution or Quotation?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-sm">
            Our engineering team can develop custom configurations for your specific vehicle model or OEM specification. Contact us to begin.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8" data-testid="button-custom-inquiry">
              Discuss Requirements <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
