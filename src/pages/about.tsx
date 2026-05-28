import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Star, ShieldCheck, Zap, Leaf, Users, Award, MapPin, Factory } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/SEO";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const timeline = [
  { year: "2006", title: "Samsong Founded", desc: "Samsong established its automotive safety component manufacturing operations with a focus on seat belt systems." },
  { year: "2008", title: "Production Foundations", desc: "Core manufacturing infrastructure established with initial seat belt assembly and buckle production lines." },
  { year: "2013", title: "Global Export — Brazil", desc: "First XBB model delivery to Brazil, demonstrating global-grade manufacturing capability." },
  { year: "2015", title: "RNAIPL Supply Begins", desc: "XBA model first delivery to Renault Nissan Automotive India Private Limited — entering India's top OEM supply chain." },
  { year: "2019", title: "India Expansion", desc: "SSMPL India operations scaled with additional production lines and equipment investments." },
  { year: "2023", title: "Capacity Scale-Up", desc: "Production capacity reached 1.2 million units per year with 85% utilization across all lines." },
  { year: "2025", title: "25M+ Units Delivered", desc: "Continuing to serve HMI, RNAIPL, and KMI with expanded product range and quality systems." },
  { year: "2026", title: "Next Phase", desc: "New product introductions and manufacturing line expansions planned for the next growth phase." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We conduct business with transparency, honesty, and unwavering ethical standards across our entire supply chain." },
  { icon: Award, title: "Quality", desc: "Every component we produce is built to protect lives. We meet ECE R16, HMC ES/MS, and BMIR standards without compromise." },
  { icon: Zap, title: "Innovation", desc: "Continuous improvement through MES, PLM, SPC management, and investment in precision manufacturing technology." },
  { icon: Target, title: "Safety", desc: "Safety is not a feature — it is our purpose. We manufacture the systems that protect occupants in every vehicle we supply." },
  { icon: Leaf, title: "Sustainability", desc: "Responsible manufacturing that protects the environment and community through structured ESG practices." },
  { icon: Users, title: "Customer Commitment", desc: "Long-term partnerships with HMI, RNAIPL, and KMI built on consistent delivery and uncompromising quality." },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <SEO
        title="About Us"
        description="Learn about SS Manufacturing Private Limited (SSMPL) — our vision, mission, core values, and journey as a trusted Tier-1 automotive safety component manufacturer near Kanchipuram, Tamil Nadu."
        path="/about"
        keywords="SSMPL company, automotive manufacturer history, Chennai Tier-1 supplier, vehicle safety company India"
      />
      {/* HERO */}
      <section className="bg-[#0A1628] pt-44 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">SSMPL — Who We Are</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">About Us</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              SS Manufacturing Private Limited — a precision automotive safety component manufacturer built to serve India's leading OEMs at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeUp}>
              <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Company Overview</div>
              <h2 className="text-3xl font-black text-primary mb-6">SSMPL — Built for OEM Scale.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SS Manufacturing Private Limited (SSMPL) is an automotive safety component manufacturer located near Kanchipuram, Tamil Nadu — strategically positioned just 7 km from R&N facilities and 40 km from HMI's manufacturing hub.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We manufacture a complete range of seat belt systems: retractors (SD9, SR2, SD3, SB3), buckles (SB15, SB20, SB30), height adjusters (SH8/9), and seat belt webbing — all designed and built to meet stringent OEM specifications and international safety standards including ECE R16 and HMC ES/MS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a $27.9 million total investment, a 36,364 sq.mt campus, and a team of 600, SSMPL has the infrastructure, technology, and talent to serve India's largest automotive OEMs reliably at 1.2 million units per year.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Facility Quick Stats */}
              <div className="bg-muted border border-border p-6 space-y-4">
                <h3 className="font-black text-primary flex items-center gap-2">
                  <Factory size={18} className="text-white" /> Facility Overview
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { label: "Land Area", value: "36,364 sq.mt" },
                    { label: "Building Area", value: "7,510 sq.mt" },
                    { label: "Factory Floor", value: "6,710 sq.mt" },
                    { label: "Amenities", value: "800 sq.mt" },
                  ].map((s) => (
                    <div key={s.label} className="border-l-2 border-white pl-3">
                      <div className="font-black text-primary text-base">{s.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="border-l-4 border-white pl-6 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-white" />
                  <h3 className="font-black text-primary">Location</h3>
                </div>
                <p className="text-sm text-muted-foreground">Near Kanchipuram, Tamil Nadu</p>
                <p className="text-xs text-muted-foreground mt-1">7 km from R&N facility &nbsp;|&nbsp; 40 km from HMI</p>
              </div>

              {/* Vision */}
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Eye size={16} className="text-blue-500" />
                  <h3 className="font-black text-primary">Our Vision</h3>
                </div>
                <p className="text-muted-foreground italic text-sm">
                  "To become a trusted and sustainable manufacturing partner in the automotive industry — delivering world-class safety systems for every journey."
                </p>
              </div>

              {/* Mission */}
              <div className="bg-[#0A1628] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target size={16} className="text-white" />
                  <h3 className="font-black text-white">Our Mission</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Deliver OEM-grade quality in every component we manufacture",
                    "Operate with sustainable, responsible practices across all functions",
                    "Build lasting customer trust through consistency and integrity",
                    "Maintain ethical manufacturing throughout our supply chain",
                  ].map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-white shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT & PERSONNEL */}
      <section className="py-16 bg-[#0d1f3c]">
        <div className="container mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$27.9M", label: "Total Investment" },
              { value: "$17.5M", label: "Facility Construction" },
              { value: "$10.4M", label: "Equipment Investment" },
              { value: "600", label: "Total Personnel" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white">{s.value}</div>
                <div className="text-xs text-white/70 mt-2 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">What Drives Us</div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Core Values</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0d1f3c]/10">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} whileHover={{ y: -4 }} className="bg-[#0d1f3c] p-8 group hover:bg-[#0f2347] transition-colors" data-testid={`card-value-${v.title.toLowerCase()}`}>
                <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <v.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Our Journey</div>
            <h2 className="text-3xl md:text-4xl font-black text-primary">Key Milestones</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div key={item.year} variants={fadeUp} className={`relative flex items-start gap-8 pb-10 flex-row`}>
                  <div className="md:hidden absolute left-8 -translate-x-1/2 z-10">
                    <div className="w-9 h-9 bg-white text-white flex items-center justify-center border-4 border-background">
                      <Star size={12} />
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-9 h-9 bg-white text-white flex items-center justify-center border-4 border-background">
                      <Star size={12} />
                    </div>
                  </div>
                  <div className={`pl-16 md:pl-0 w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto"}`}>
                    <div className="bg-card border border-border p-5 hover:border-white transition-colors">
                      <div className="text-white font-black text-xl mb-1">{item.year}</div>
                      <div className="font-bold text-primary text-sm mb-1">{item.title}</div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
