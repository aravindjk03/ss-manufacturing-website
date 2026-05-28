import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck, Clock, Leaf, Award, Truck, ThumbsUp,
  ChevronRight, ArrowRight, Cog, CheckCircle, Factory, Users
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 1800, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white">{count}{suffix}</div>
      <div className="text-xs text-white/70 mt-2 uppercase tracking-widest">{label}</div>
    </div>
  );
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function HomePage() {
  return (
    <PageLayout>
      <SEO
        title="SS Manufacturing Private Limited"
        description="SSMPL — Chennai-based automotive safety component manufacturer supplying IATF 16949 certified seat belts, retractors, buckles, and safety assemblies to HMI, RNAIPL, KMI and India's leading OEMs."
        path="/"
        keywords="seat belt manufacturer India, automotive safety, IATF 16949, OEM supplier Chennai, SSMPL, vehicle safety assemblies"
      />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 industrial-grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d1f3c] to-[#0A1628] opacity-90" />
        {/* Decorative seat belt image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 bg-no-repeat bg-center bg-contain hidden lg:block"
          style={{ backgroundImage: "url('/seatbelt-hero.png')" }} />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
        <div className="relative container mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
              <Cog size={12} />
              Near Kanchipuram, Tamil Nadu, India
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-4">
              SS Manufacturing
              <span className="block text-white">Private Limited</span>
            </h1>
            <div className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-6">SSMPL</div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
              Trusted Manufacturing Partner for Automotive Safety Components — seat belts, retractors, buckles, and safety assemblies for India's leading OEMs.
            </p>
            <p className="text-white font-semibold tracking-wide text-sm mb-10 italic">
              "Earlier, The more Closer — The more Secure."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8 tracking-wide" data-testid="button-explore-products">
                  Explore Products <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-[#0d1f3c]/10 font-semibold px-8 tracking-wide" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Customer badges */}
            <div className="flex flex-wrap gap-3 mt-10">
              <div className="text-xs text-white/40 uppercase tracking-widest self-center">Supplying:</div>
              {["HMI", "RNAIPL", "KMI", "MOBIS"].map((c) => (
                <div key={c} className="px-3 py-1.5 border border-white/20 text-white/70 text-xs font-bold tracking-widest">
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">SSMPL — Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 leading-tight">
                For Your Safety Life.<br />
                <span className="text-secondary font-medium text-2xl">Built Around Every Journey.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SS Manufacturing Private Limited (SSMPL) is a Chennai-region automotive safety component manufacturer located near Kanchipuram, Tamil Nadu. We specialise in automotive seat belt systems — retractors, buckles, height adjusters, and seat belt webbing — for India's leading OEM and Tier-1 suppliers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a production capacity of <strong>1.2 million units per year</strong>, a <strong>$27.9 million total investment</strong>, and a team of 600 across staff and production, SSMPL is built to deliver at OEM scale without compromising on safety or quality.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold" data-testid="button-learn-more">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, label: "Facility Area", value: "36,364 m²" },
                { icon: Users, label: "Total Personnel", value: "600+" },
                { icon: Award, label: "Annual Capacity", value: "1.2M Units" },
                { icon: CheckCircle, label: "OEM Customers", value: "HMI · RNAIPL · KMI" },
              ].map((item) => (
                <div key={item.label} className="border border-border bg-card p-6 group hover:border-white transition-colors">
                  <item.icon size={26} className="text-white mb-3" />
                  <div className="text-lg font-black text-primary leading-tight">{item.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Our Strengths</div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Why Choose SS Manufacturing?</h2>
          </motion.div>
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0d1f3c]/10"
          >
            {[
              { icon: ShieldCheck, title: "OEM-Grade Quality", desc: "Components built to ECE R16, HMC ES/MS, and BMIR standards with full dimensional traceability per batch." },
              { icon: Clock, title: "Timely Delivery", desc: "Reliable production scheduling and logistics to keep your supply chain on track — every time." },
              { icon: Leaf, title: "ESG Commitment", desc: "Integrated environmental, social, and governance practices embedded in our operational DNA." },
              { icon: Award, title: "Scale & Capacity", desc: "1.2 million units per year at 85% utilization — purpose-built for high-volume OEM supply." },
              { icon: Truck, title: "Proximity to OEMs", desc: "Located near Kanchipuram — 7km from R&N, 40km from HMI — for efficient, low-lead-time supply." },
              { icon: ThumbsUp, title: "Customer Partnerships", desc: "Long-term supply relationships with HMI, RNAIPL, and KMI built on trust and consistent delivery." },
            ].map((item) => (
              <motion.div
                key={item.title} variants={fadeUp}
                className="bg-[#0d1f3c] p-8 group hover:bg-[#0f2347] transition-colors border-b border-r border-white/5"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS HIGHLIGHT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">What We Make</div>
              <h2 className="text-3xl md:text-4xl font-black text-primary">Our Core Products</h2>
            </div>
            <Link href="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold" data-testid="button-view-all-products">
                View All Products <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Seat Belt Retractors", desc: "SD9, SR2, SD3, SB3 series retractor systems with tilt-lock mechanism — manufactured across 10+ dedicated production lines.", icon: ShieldCheck, tag: "Safety Assembly", models: "SD9 / SD9-SUB / SR2 / SD3 / SB3" },
              { title: "Buckle Systems", desc: "SB15, SB20, SB30 series buckle assemblies with positive-lock confirmation, tested to ECE R16 release force specifications.", icon: Cog, tag: "Safety Component", models: "SB15 / SB20 / SB30" },
              { title: "Height Adjusters", desc: "SH8/9 series height adjuster systems for comfortable and ergonomically correct seat belt positioning.", icon: Award, tag: "Comfort & Safety", models: "SH8 / SH9" },
            ].map((product) => (
              <motion.div
                key={product.title} variants={fadeUp}
                className="border border-border group hover:border-white transition-all duration-300 bg-card overflow-hidden"
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(10,22,40,0.1)" }}
                data-testid={`card-product-${product.title.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className="h-2 bg-gradient-to-r from-primary to-white group-hover:from-white group-hover:to-primary transition-all duration-300" />
                <div className="p-8">
                  <div className="inline-block text-xs text-white border border-white/30 bg-white/5 px-3 py-1 font-semibold tracking-wider uppercase mb-4">{product.tag}</div>
                  <product.icon size={30} className="text-primary mb-4 group-hover:text-white transition-colors" />
                  <h3 className="font-black text-xl text-primary mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{product.desc}</p>
                  <div className="text-xs font-bold text-white/70 tracking-wider uppercase border-t border-border pt-3 mt-3">{product.models}</div>
                  <Link href="/products" className="mt-4 inline-flex">
                    <span className="text-sm font-semibold text-white flex items-center gap-1 hover:gap-3 transition-all">
                      View Details <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OEM CUSTOMERS — DEDICATED SECTION */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-bg opacity-50" />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white" />
        <div className="relative container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Trusted By India's Top OEMs</div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              Our Customers
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Long-standing supply relationships with India's leading automotive manufacturers — delivering seat belt systems at OEM scale, on time, every time.
            </p>
          </motion.div>

          {/* Customer cards — large format */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              {
                code: "HMI",
                name: "Hyundai Motor India",
                location: "Sriperumbudur, Tamil Nadu",
                logo: "/logos/hmi-logo.jpg",
                desc: "Tier-1 safety component supplier for Hyundai's India manufacturing operations. Supplying retractor and buckle assemblies across B and C segment vehicle lines.",
                distance: "40 km",
                distanceLabel: "From SSMPL",
                products: ["Retractors", "Buckle Systems", "Height Adjusters"],
              },
              {
                code: "RNAIPL",
                name: "Renault Nissan Automotive India",
                location: "Oragadam, Tamil Nadu",
                logo: "/logos/rnaipl-logo.jpg",
                desc: "Premier seat belt assembly supplier for Renault-Nissan's Chennai plant. XBA model first delivered in 2015 — a decade-long supply partnership.",
                distance: "7 km",
                distanceLabel: "From R&N Facility",
                products: ["Seat Belt Assemblies", "Retractors", "Webbing"],
              },
              {
                code: "KMI",
                name: "Kia Motors India",
                location: "Anantapur, Andhra Pradesh",
                logo: "/logos/kmi-logo.png",
                desc: "Safety systems partner for Kia's rapidly growing India lineup. Providing OEM-grade buckle and retractor systems across Kia's India vehicle range.",
                distance: "—",
                distanceLabel: "Pan-India Supply",
                products: ["Buckle Systems", "Retractors"],
              },
              {
                code: "MOBIS",
                name: "Hyundai Mobis",
                location: "Chennai, Tamil Nadu",
                logo: "/logos/mobis-logo.png",
                desc: "Tier-1 module integrator for the Hyundai-Kia group. Strategic supplier of seat belt sub-assemblies and safety components for OEM module programs.",
                distance: "—",
                distanceLabel: "OEM Tier-1 Partner",
                products: ["Seat Belt Sub-assemblies", "Buckle Systems"],
              },
            ].map((c, i) => (
              <motion.div
                key={c.code}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`relative bg-[#0d1f3c] group hover:bg-[#0f2347] transition-all duration-300 flex flex-col border-t-4 border-t-white ${i < 3 ? "lg:border-r border-white/10" : ""} ${i % 2 === 0 ? "sm:border-r border-white/10 lg:border-r" : ""}`}
                data-testid={`card-customer-${c.code.toLowerCase()}`}
              >
                {/* Logo area — white strip to show authentic brand colors */}
                <div className="h-40 flex items-center justify-center bg-white border-b border-white/10 overflow-hidden p-5">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ maxHeight: "90px" }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="text-xs font-bold text-white uppercase tracking-widest mb-1">{c.code}</div>
                    <div className="text-white font-black text-lg leading-tight">{c.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{c.location}</div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{c.desc}</p>

                  {/* Products supplied */}
                  <div className="mb-6">
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-2">Products Supplied</div>
                    <div className="flex flex-wrap gap-2">
                      {c.products.map((p) => (
                        <span key={p} className="text-xs border border-white/10 text-gray-300 px-2 py-1 font-medium">{p}</span>
                      ))}
                    </div>
                  </div>

                  {/* Distance stat */}
                  <div className="border-t border-white/10 pt-5 mt-auto flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-black text-white">{c.distance}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{c.distanceLabel}</div>
                    </div>
                    <div className="text-xs text-white font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Active Partner <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom trust strip */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 border border-white/10 bg-[#0d1f3c]/5 px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              <span className="text-white font-bold">4 OEM customers</span> &nbsp;·&nbsp; Standards: ECE R16, HMC ES/MS, BMIR &nbsp;·&nbsp; 1.2M units/year capacity
            </div>
            <div className="flex gap-2">
              {["ECE R16", "HMC ES/MS", "BMIR"].map((s) => (
                <span key={s} className="text-[10px] border border-white/30 text-white px-2 py-1 font-bold tracking-widest">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ESG COMMITMENT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Responsibility</div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">ESG at the Core of Everything We Do</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Sustainability is not a checkbox for us — it is a design principle. From how we source raw materials to how we treat our 600-person workforce, our ESG commitments shape every operational decision.
              </p>
              <div className="space-y-3">
                {[
                  "Waste reduction and responsible material usage",
                  "Zero-incident safety culture across all production lines",
                  "Ethical supply chain with compliant supplier standards",
                  "Fair wages and employee welfare programmes",
                  "Compliance with ECE R16 and international safety standards",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-muted border-l-2 border-white text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-white mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/esg" className="mt-8 inline-block">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold mt-8" data-testid="button-esg-report">
                  View ESG Report <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-1">
              {[
                { label: "Environmental", value: "E", color: "bg-green-700", desc: "Waste reduction, energy efficiency, responsible sourcing" },
                { label: "Social", value: "S", color: "bg-blue-700", desc: "600+ workers, safety programmes, diversity & inclusion" },
                { label: "Governance", value: "G", color: "bg-purple-700", desc: "Ethical practices, transparency, ECE R16 compliance" },
              ].map((pillar) => (
                <motion.div key={pillar.label} className="flex items-center gap-6 p-8 bg-card border border-border hover:border-white transition-colors" whileHover={{ x: 4 }}>
                  <div className={`w-16 h-16 ${pillar.color} flex items-center justify-center text-white font-black text-2xl shrink-0`}>{pillar.value}</div>
                  <div>
                    <div className="font-black text-xl text-primary">{pillar.label}</div>
                    <div className="text-sm text-muted-foreground mt-1">{pillar.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-3">Quality Assurance</div>
            <h2 className="text-2xl font-black text-primary">Internationally Certified</h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
              Our facility and management systems are certified across six international standards — covering quality, environment, safety, energy, and information security.
            </p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {[
              { code: "IATF 16949", label: "Automotive Quality Management System", color: "text-blue-600" },
              { code: "ISO 14001", label: "Environmental Management System", color: "text-green-600" },
              { code: "ISO 45001", label: "Occupational Health & Safety", color: "text-orange-600" },
              { code: "ISO 50001", label: "Energy Management System", color: "text-yellow-600" },
              { code: "ISO 27001", label: "Information Security Management", color: "text-purple-600" },
              { code: "ISO 37001", label: "Anti-Bribery Management System", color: "text-white" },
            ].map((cert) => (
              <motion.div
                key={cert.code} variants={fadeUp}
                className="bg-card p-6 text-center group hover:bg-muted transition-colors"
                whileHover={{ y: -3 }}
                data-testid={`card-cert-${cert.code.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className={`text-xs font-black uppercase tracking-widest mb-2 ${cert.color}`}>
                  {cert.code.split(" ")[0]}
                </div>
                <div className={`text-xl font-black text-primary mb-3`}>
                  {cert.code.includes(" ") ? cert.code.split(" ")[1] : ""}
                </div>
                <div className="w-8 h-0.5 bg-white mx-auto mb-3" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide leading-tight">{cert.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 bg-[#0d1f3c]">
        <div className="container mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={600} suffix="+" label="Total Personnel" />
            <StatCounter value={1200000} suffix="+" label="Units / Year Capacity" />
            <StatCounter value={27} suffix=".9M$" label="Total Investment" />
            <StatCounter value={36364} suffix=" m²" label="Land Area" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-6">Get In Touch</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 max-w-2xl mx-auto">
              Looking for a Reliable Automotive Safety Component Partner?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-10">
              Discuss your seat belt or safety assembly requirements with our team. We supply at OEM scale with ECE R16 compliance.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-12" data-testid="button-cta-contact">
                Start a Conversation <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
