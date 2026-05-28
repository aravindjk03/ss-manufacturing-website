import React from "react";
import { motion } from "framer-motion";
import { Factory, Cog, CheckSquare, GitBranch, ShieldCheck, ArrowRight, Ruler, Layers, Clock, Award, Server, Users } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/SEO";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const sections = [
  {
    icon: Factory,
    title: "Manufacturing Facility",
    desc: "36,364 sq.mt campus near Kanchipuram — purpose-built for high-volume automotive safety component production.",
    points: [
      "Total land area: 36,364 sq.mt",
      "Building area: 7,510 sq.mt — factory 6,710 sq.mt, amenities 800 sq.mt",
      "Climate-controlled production environment",
      "Separate storage areas for raw materials and finished goods",
      "7 km from R&N facility, 40 km from HMI",
    ],
  },
  {
    icon: Cog,
    title: "Machinery & Production Lines",
    desc: "10+ dedicated production lines for retractors, 7 lines for buckles, and 1 line for height adjusters — all calibrated for OEM specifications.",
    points: [
      "Retractor lines: SD9-SUB (1), SD9 (2), SR2 (5), SD3 (1), SB3 (3)",
      "Buckle lines: SB15, SB20, SB30 — 7 lines total",
      "H/Adjuster line: SH8/9 — 1 dedicated line",
      "Sub-assembly lines for store room and H/Adj components",
      "Calibrated to 8-hour shift cycle times",
    ],
  },
  {
    icon: CheckSquare,
    title: "Quality Inspection",
    desc: "Multi-stage QC integrated at every step — from incoming raw material to final product release with full lot traceability.",
    points: [
      "Incoming material quality check for all raw materials",
      "In-process inspection at all critical control points",
      "Final outgoing quality verification before dispatch",
      "Full LOT traceability across every production batch",
      "SPC management for statistical process control",
    ],
  },
  {
    icon: GitBranch,
    title: "IT & Production Systems",
    desc: "Integrated digital systems for production management, quality control, and lifecycle traceability.",
    points: [
      "PLM — Product Lifecycle Management",
      "MES — Manufacturing Execution System (Production)",
      "MMS — Manufacturing Management System",
      "HANARO — Integrated ERP system",
      "TDMS — Technical Document Management",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Testing Laboratory",
    desc: "In-house testing laboratory with complete equipment for ECE R16 and HMC ES/MS validation of all products.",
    points: [
      "Universal Testing Machine (UTM) for force testing",
      "Reel Endurance Tester",
      "Buckle Release Force tester",
      "Climatic Chamber, Salt Spray Chamber, Dust Chamber",
      "Micro Slip Tester + 5 additional test systems",
    ],
  },
  {
    icon: Server,
    title: "Quality Management Systems",
    desc: "Structured quality management aligned with automotive OEM supplier requirements and international standards.",
    points: [
      "Life Time Management system for component durability",
      "Revalidation management for design and process changes",
      "DFMEA and Engineering Order (EO) Process management",
      "Materials & Finished Goods traceability management",
      "SPC-based corrective and preventive action (CAPA)",
    ],
  },
];

const processSteps = [
  { step: "01", label: "Raw Materials", desc: "ECE R16 compliant sourcing" },
  { step: "02", label: "Sub-Assembly", desc: "Component preparation & H/Adj lines" },
  { step: "03", label: "In-Process QC", desc: "Critical control point inspection" },
  { step: "04", label: "Assembly", desc: "Retractor, Buckle & Belt system assembly" },
  { step: "05", label: "Testing", desc: "UTM, endurance, climatic validation" },
  { step: "06", label: "Final Release", desc: "Lot-traced dispatch to OEM" },
];

export default function InfrastructurePage() {
  return (
    <PageLayout>
      <SEO
        title="Infrastructure"
        description="Explore SSMPL's state-of-the-art manufacturing facility, capabilities, and end-to-end process flow — precision automotive component production near Kanchipuram, Tamil Nadu."
        path="/infrastructure"
        keywords="manufacturing facility India, automotive plant Chennai, production capabilities, precision manufacturing, Kanchipuram"
      />
      {/* HERO */}
      <section className="bg-[#0A1628] pt-44 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Manufacturing Capabilities</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Infrastructure</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              36,364 sq.mt of purpose-built manufacturing near Kanchipuram — 1.2 million units per year, built to OEM specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Ruler, value: "36,364 m²", label: "Total Land Area" },
              { icon: Layers, value: "19 Lines", label: "Production Lines" },
              { icon: Award, value: "ECE R16", label: "Primary Standard" },
              { icon: Clock, value: "1.2M/yr", label: "Annual Capacity" },
            ].map((metric) => (
              <motion.div key={metric.label} variants={fadeUp} className="text-center text-white">
                <metric.icon size={26} className="mx-auto mb-3 opacity-80" />
                <div className="text-xl font-black">{metric.value}</div>
                <div className="text-xs opacity-70 uppercase tracking-widest mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Core Capabilities</div>
            <h2 className="text-3xl md:text-4xl font-black text-white">The SSMPL Manufacturing Standard</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0d1f3c]/10">
            {[
              {
                title: "Precision Manufacturing",
                desc: "19 production lines across retractors, buckles, and height adjusters — all calibrated for OEM-grade dimensional accuracy. Tilt-Lock retractor technology and positive-lock buckle assembly require tight tolerances maintained through SPC monitoring.",
                highlight: "85% utilization | 1.2M units/year",
              },
              {
                title: "Quality Control",
                desc: "Quality is built in at every stage — not just inspected at the end. LOT traceability, DFMEA, and SPC management ensure every product leaving our facility is fully documented and validated against ECE R16 and HMC ES/MS standards.",
                highlight: "Full LOT traceability per batch",
              },
              {
                title: "Digital Operations",
                desc: "Integrated PLM, MES, MMS, HANARO, and TDMS systems provide real-time production visibility, technical document control, and preventive maintenance scheduling — enabling OEM-grade supply chain transparency.",
                highlight: "PLM · MES · MMS · HANARO · TDMS",
              },
            ].map((pillar) => (
              <motion.div key={pillar.title} variants={fadeUp} className="bg-[#0d1f3c] p-10 group hover:bg-[#0f2347] transition-colors" whileHover={{ y: -4 }}>
                <div className="text-3xl font-black text-white mb-2">//</div>
                <h3 className="font-black text-white text-xl mb-4">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                <div className="border-l-2 border-accent pl-4 text-xs text-white font-bold uppercase tracking-wider">{pillar.highlight}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FACILITY SECTIONS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">Our Facility</div>
            <h2 className="text-3xl md:text-4xl font-black text-primary">Infrastructure Overview</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <motion.div
                key={section.title} variants={fadeUp}
                className="border border-border bg-card p-8 group hover:border-accent transition-colors"
                whileHover={{ y: -3 }}
                data-testid={`card-infra-${section.title.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 bg-muted border border-border flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                    <section.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-black text-primary text-lg">{section.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{section.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-4 border-l-2 border-muted group-hover:border-accent transition-colors">
                  {section.points.map((point) => (
                    <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ArrowRight size={12} className="text-white mt-1 shrink-0" />{point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PERSONNEL */}
      <section className="py-16 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-3">Our People</div>
            <h2 className="text-2xl font-black text-primary">Personnel Status</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Users, value: "600+", label: "Total Personnel" },
              { icon: Users, value: "120", label: "Staff" },
              { icon: Users, value: "480", label: "Production Workers" },
              { icon: Users, value: "5", label: "Korean Expats" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="border border-border bg-card p-6 text-center hover:border-accent transition-colors">
                <s.icon size={22} className="text-white mx-auto mb-2" />
                <div className="text-2xl font-black text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS FLOW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">How We Work</div>
            <h2 className="text-3xl md:text-4xl font-black text-primary">Production Process Flow</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row items-stretch justify-between gap-0">
            {processSteps.map((step, i) => (
              <React.Fragment key={step.step}>
                <motion.div variants={fadeUp} className="flex-1 bg-card border border-border p-6 text-center group hover:border-accent transition-colors" data-testid={`card-process-step-${i + 1}`}>
                  <div className="text-3xl font-black text-white/30 group-hover:text-white/60 transition-colors mb-3">{step.step}</div>
                  <div className="font-black text-primary text-xs mb-2 uppercase tracking-wider">{step.label}</div>
                  <div className="text-xs text-muted-foreground">{step.desc}</div>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-1">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
